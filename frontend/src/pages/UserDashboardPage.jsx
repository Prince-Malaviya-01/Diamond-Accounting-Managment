import { useCallback, useEffect, useMemo, useRef, useState, Fragment } from "react";
import {
  Upload, CheckCircle2, Clock, Loader2, XCircle,
  Download, Trash2, Package, FileText, Gem,
  Weight, BarChart3, AlertCircle, Search, RefreshCw,
  Receipt, Calendar, ChevronDown, IndianRupee, Filter,
  FileSpreadsheet, TrendingUp, Check, Eye
} from "lucide-react";
import api, { billingApi } from "../api";
import { downloadFile } from "../utils/fileSystemUtils";
import LogoutButton from "../components/LogoutButton";
import Shell from "../components/Shell";
import StatCard from "../components/StatCard";
import ThemeToggle from "../components/ThemeToggle";
import CustomSelect from "../components/CustomSelect";
import CustomDatePicker from "../components/CustomDatePicker";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip, ResponsiveContainer } from 'recharts';

const STATUS_CONFIG = {
  Uploaded:   { cls: "uploaded",   icon: <Upload size={14} /> },
  Queued:     { cls: "queued",     icon: <Clock size={14} /> },
  Processing: { cls: "processing", icon: <Loader2 size={14} /> },
  Completed:  { cls: "completed",  icon: <CheckCircle2 size={14} /> },
  Failed:     { cls: "failed",     icon: <XCircle size={14} /> },
};

const SelectionBox = ({ checked, onChange }) => (
  <div 
    onClick={onChange}
    className={`custom-checkbox ${checked ? 'checked' : ''}`}
    style={{ margin: '0 auto' }}
  >
    <Check size={12} strokeWidth={3} />
  </div>
);

const MONTHS = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const isWeightInRange = (weight, rangeStr) => {
  const clean = rangeStr.toUpperCase().replace(/\s+/g, '');
  if (clean.includes("TO")) {
    const parts = clean.split("TO");
    const min = parseFloat(parts[0].replace(/[^0-9.]/g, ''));
    const max = parseFloat(parts[1].replace(/[^0-9.]/g, ''));
    const w = Math.round(Number(weight) * 100) / 100;
    return min <= w && w <= max;
  } else if (clean.includes("UP")) {
    const min = parseFloat(clean.replace("UP", "").replace(/[^0-9.]/g, ''));
    const w = Math.round(Number(weight) * 100) / 100;
    return w >= min;
  }
  return false;
};

const HorizontalScrollContainer = ({ children, style, className }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      };
      el.addEventListener("wheel", onWheel, { passive: false });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollWidth,
        behavior: 'smooth'
      });
    }
  }, [children]);

  return <div ref={ref} style={style} className={className}>{children}</div>;
};

export default function UserDashboardPage() {
  const [profile, setProfile] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [summary, setSummary] = useState(null);
  const [billing, setBilling] = useState([]);
  const [stoneReport, setStoneReport] = useState([]);
  const [reportRanges, setReportRanges] = useState([]);
  const [form, setForm] = useState({ files: [] });
  const [fileInputKey, setFileInputKey] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedActiveIds, setSelectedActiveIds] = useState([]);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [downloadingBulk, setDownloadingBulk] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(null);
  const [downloadedSearchTerm, setDownloadedSearchTerm] = useState("");
  const [selectedDownloadedIds, setSelectedDownloadedIds] = useState([]);
  const [downloadingDownloadedBulk, setDownloadingDownloadedBulk] = useState(false);
  const [downloadedProgress, setDownloadedProgress] = useState(null);
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem("clientActiveTab") || "stones"); // stones | report | billing | pay_pending | downloaded_files
  const fileInputRef = useRef(null);
  const msgTimer = useRef(null);
  const lastLoadedReportParamsRef = useRef({ month: null, year: null, profileId: null });

  // Stone report month/year filter
  const now = new Date();
  const [reportYear, setReportYear] = useState(now.getFullYear());
  const [reportMonth, setReportMonth] = useState(now.getMonth() + 1);

  // Custom Report Modal state
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportConfig, setReportConfig] = useState({
    format: "PDF",
    type: "FULL",
    filter: "MONTH",
    month: "",
    dates: [],
    startDate: "",
    endDate: "",
  });
  const [availableRanges, setAvailableRanges] = useState([]);
  const [downloadingReport, setDownloadingReport] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [reportLoaded, setReportLoaded] = useState(false);
  const [expandedRanges, setExpandedRanges] = useState([]);

  // Accounts/Payment state
  const [recordedProfits, setRecordedProfits] = useState([]);
  const [accProfitMonth, setAccProfitMonth] = useState("all");
  const [accProfitYear, setAccProfitYear] = useState("all");

  // Custom Confirm Modal state for premium UI confirmations
  const [confirmModal, setConfirmModal] = useState({
    show: false,
    title: "",
    message: "",
    confirmLabel: "",
    onConfirm: null,
    isDanger: false
  });

  const showMsg = (text) => {
    setMessage(text);
    clearTimeout(msgTimer.current);
    msgTimer.current = setTimeout(() => setMessage(""), 5000);
  };

  const loadData = useCallback(async () => {
    const [profileRes, jobsRes, billingRes, summaryRes] = await Promise.all([
      api.get("/users/me"),
      api.get("/jobs/list"),
      billingApi.getHistory(),
      api.get("/jobs/summary"),
    ]);
    setProfile(prev => {
      if (prev && JSON.stringify(prev) === JSON.stringify(profileRes.data)) return prev;
      return profileRes.data;
    });
    setJobs(jobsRes.data);
    setBilling(billingRes.data);
    setSummary(summaryRes.data);
    setLoading(false);
  }, []);

  const loadStoneReportAndRanges = useCallback(async () => {
    if (!profile) return;
    try {
      setLoading(true);
      const [reportRes, rangesRes] = await Promise.all([
        billingApi.getStoneReport(reportYear, reportMonth),
        api.get(`/billing/weight-ranges/${profile.id}`, { params: { year: reportYear, month: reportMonth } })
      ]);
      setStoneReport(reportRes.data);
      setReportRanges(rangesRes.data);
      setReportLoaded(true);
      setExpandedRanges([]);
    } catch {
      setStoneReport([]);
      setReportRanges([]);
      setReportLoaded(false);
      setExpandedRanges([]);
    } finally {
      setLoading(false);
    }
  }, [reportYear, reportMonth, profile]);

  const loadProfits = useCallback(async () => {
    try {
      const res = await api.get("/billing/profits");
      setRecordedProfits(res.data);
    } catch { showMsg("Failed to load payments"); }
  }, []);

  useEffect(() => {
    loadData().catch(() => showMsg("Failed to load dashboard"));
    const iv = setInterval(() => loadData().catch(() => {}), 5000);
    return () => { clearInterval(iv); clearTimeout(msgTimer.current); };
  }, [loadData]);

  useEffect(() => {
    if (activeTab === "report" && profile) {
      const last = lastLoadedReportParamsRef.current;
      if (last.profileId !== profile.id) {
        lastLoadedReportParamsRef.current = { month: reportMonth, year: reportYear, profileId: profile.id };
        loadStoneReportAndRanges();
      }
    } else if (activeTab !== "report") {
      lastLoadedReportParamsRef.current = { month: null, year: null, profileId: null };
    }
    localStorage.setItem("clientActiveTab", activeTab);
  }, [activeTab, profile, loadStoneReportAndRanges]);

  const toggleRangeExpand = (rangeStr) => {
    setExpandedRanges(prev => 
      prev.includes(rangeStr) ? prev.filter(r => r !== rangeStr) : [...prev, rangeStr]
    );
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleDownloadStatement = async () => {
    try {
      showMsg("Generating Statement PDF...");
      const params = {};
      if (accProfitMonth !== "all") params.month = accProfitMonth;
      if (accProfitYear !== "all") params.year = accProfitYear;
      const res = await api.get("/billing/statement-pdf", { params, responseType: "blob" });
      saveBlob(res.data, `Account_Statement_${profile.company_name}.pdf`);
      showMsg("✓ Statement downloaded");
    } catch { showMsg("Failed to download statement"); }
  };

  const allCompleted = useMemo(() => jobs.filter((j) => j.status === "Completed"), [jobs]);
  const completed = useMemo(() => jobs.filter((j) => j.status === "Completed" && !j.downloaded), [jobs]);
  const downloadedJobs = useMemo(() => jobs.filter((j) => j.status === "Completed" && j.downloaded), [jobs]);
  const activeJobs = useMemo(() => jobs.filter((j) => j.status !== "Completed"), [jobs]);
  const totalWeight = useMemo(() => allCompleted.reduce((s, j) => s + Number(j.weight), 0), [allCompleted]);

  const rangeSummaries = useMemo(() => {
    if (!reportRanges.length) return [];
    return reportRanges.map(r => {
      const matchingStones = stoneReport.filter(s => isWeightInRange(s.weight, r.range));
      const pcs = matchingStones.length;
      const carat = matchingStones.reduce((sum, s) => sum + Number(s.weight), 0);
      const rateVal = parseFloat(r.price) || 0;
      const totalAmt = carat * rateVal;
      return {
        id: r.id,
        range: r.range,
        rate: rateVal,
        pcs,
        carat,
        totalAmt,
        stones: matchingStones
      };
    });
  }, [reportRanges, stoneReport]);

  const reportTotals = useMemo(() => {
    const pcs = rangeSummaries.reduce((sum, r) => sum + r.pcs, 0);
    const carat = rangeSummaries.reduce((sum, r) => sum + r.carat, 0);
    const amount = rangeSummaries.reduce((sum, r) => sum + r.totalAmt, 0);
    return { pcs, carat, amount };
  }, [rangeSummaries]);

  // Billing totals
  const billingTotals = useMemo(() => {
    const totalStones = billing.reduce((s, b) => s + b.total_stones, 0);
    const totalWt = billing.reduce((s, b) => s + b.total_weight, 0);
    const totalAmt = billing.reduce((s, b) => s + b.total_amount, 0);
    return { stones: totalStones, weight: totalWt, amount: totalAmt };
  }, [billing]);

  const filteredCompleted = useMemo(() => {
    let list = [...completed].sort((a, b) => new Date(b.completed_at || 0) - new Date(a.completed_at || 0));
    if (!searchTerm) return list;
    
    const term = searchTerm.toLowerCase();
    
    // Smart Filter: wt:>1.0 or wt:<2.5
    if (term.includes('wt:')) {
      const match = term.match(/wt:([><=]?)([0-9.]+)/);
      if (match) {
        const op = match[1] || "=";
        const val = parseFloat(match[2]);
        return list.filter(j => {
          const w = parseFloat(j.weight || 0);
          if (op === '>') return w > val;
          if (op === '<') return w < val;
          return w === val;
        });
      }
    }

    return list.filter(j => j.stone_id?.toLowerCase().includes(term) || j.completed_filename?.toLowerCase().includes(term));
  }, [completed, searchTerm]);

  const filteredDownloaded = useMemo(() => {
    let list = [...downloadedJobs].sort((a, b) => new Date(b.completed_at || 0) - new Date(a.completed_at || 0));
    if (!downloadedSearchTerm) return list;
    
    const term = downloadedSearchTerm.toLowerCase();
    
    // Smart Filter: wt:>1.0 or wt:<2.5
    if (term.includes('wt:')) {
      const match = term.match(/wt:([><=]?)([0-9.]+)/);
      if (match) {
        const op = match[1] || "=";
        const val = parseFloat(match[2]);
        return list.filter(j => {
          const w = parseFloat(j.weight || 0);
          if (op === '>') return w > val;
          if (op === '<') return w < val;
          return w === val;
        });
      }
    }

    return list.filter(j => j.stone_id?.toLowerCase().includes(term) || j.completed_filename?.toLowerCase().includes(term));
  }, [downloadedJobs, downloadedSearchTerm]);

  const revenueTrendData = useMemo(() => {
    return [...billing].reverse().map(b => ({
      name: b.month,
      revenue: b.total_amount,
      stones: b.total_stones
    })).filter(d => {
      if (accProfitYear !== "all" && !d.name.includes(String(accProfitYear))) return false;
      return true;
    });
  }, [billing, accProfitYear]);

  const filteredAccountData = useMemo(() => {
    // Current user's monthly breakdown from billing history
    return billing.map(b => {
      const [y, m] = b.month.split("-").map(Number);
      return { month: m, year: y, revenue: b.total_amount, label: b.month };
    }).filter(b => {
      const monthMatch = accProfitMonth === "all" || b.month === Number(accProfitMonth);
      const yearMatch = accProfitYear === "all" || b.year === Number(accProfitYear);
      return monthMatch && yearMatch;
    });
  }, [billing, accProfitMonth, accProfitYear]);

  const filteredReceivedTotals = useMemo(() => {
    return recordedProfits.filter(p => {
      const date = new Date(p.created_at);
      const m = date.getMonth() + 1;
      const y = date.getFullYear();
      const monthMatch = accProfitMonth === "all" || m === Number(accProfitMonth);
      const yearMatch = accProfitYear === "all" || y === Number(accProfitYear);
      return monthMatch && yearMatch;
    });
  }, [recordedProfits, accProfitMonth, accProfitYear]);

  const accProfitTotals = useMemo(() => {
    const revenue = filteredAccountData.reduce((s, i) => s + i.revenue, 0);
    const received = filteredReceivedTotals.reduce((s, v) => s + v.amount, 0);
    return { revenue, received, pending: revenue - received };
  }, [filteredAccountData, filteredReceivedTotals]);

  const filteredActive = useMemo(() => {
    if (!searchTerm) return activeJobs;
    const term = searchTerm.toLowerCase();
    return activeJobs.filter(j => j.stone_id?.toLowerCase().includes(term) || j.upload_filename?.toLowerCase().includes(term));
  }, [activeJobs, searchTerm]);

  const saveBlob = (data, filename) => {
    const url = URL.createObjectURL(data);
    const a = Object.assign(document.createElement("a"), { href: url, download: filename });
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  /* ── Upload handlers ── */
  const handleFiles = (files) => {
    if (files.length) setForm({ files: Array.from(files) });
  };

  const uploadFiles = async (e) => {
    e?.preventDefault();
    if (!form.files.length) { showMsg("Please select files to upload"); return; }
    setUploading(true);
    
    const filesToUpload = [...form.files];
    const totalFiles = filesToUpload.length;
    setUploadProgress({ current: 1, total: totalFiles, percent: 0, filename: filesToUpload[0].name });
    
    let createdCount = 0;
    let replacedCount = 0;
    let skippedCount = 0;
    let invalidCount = 0;
    
    try {
      for (let i = 0; i < totalFiles; i++) {
        const file = filesToUpload[i];
        setUploadProgress({ current: i + 1, total: totalFiles, percent: 0, filename: file.name });
        
        const fd = new FormData();
        fd.append("files", file);
        
        const { data } = await api.post("/jobs/upload-multiple", fd, {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress({ current: i + 1, total: totalFiles, percent: percentCompleted, filename: file.name });
          }
        });
        
        createdCount += data.created || 0;
        replacedCount += data.replaced || 0;
        skippedCount += (data.skipped_in_processing?.length || 0) + (data.skipped_duplicates?.length || 0);
        invalidCount += data.invalid_files?.length || 0;
      }
      
      showMsg(
        `Upload Complete: ${createdCount} created, ${replacedCount} replaced, ${skippedCount} skipped, ${invalidCount} invalid`
      );
      setForm({ files: [] });
      setFileInputKey((p) => p + 1);
      loadData();
    } catch (err) {
      showMsg(err.response?.data?.detail || "Upload failed during batch process");
      loadData();
    } finally {
      setUploading(false);
      setUploadProgress(null);
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  /* ── Actions ── */
  const requestDownload = async (job) => {
    try {
      showMsg("Downloading...");
      const res = await api.get(`/jobs/${job.id}/completed`, { responseType: "blob" });
      await downloadFile(res.data, job.completed_filename || `${job.stone_id}_completed`);
      showMsg("✓ File downloaded");
      loadData();
    } catch (err) {
      if (err.response && err.response.data instanceof Blob) {
        try {
          const text = await err.response.data.text();
          const parsed = JSON.parse(text);
          if (parsed.detail) {
            showMsg(parsed.detail);
            return;
          }
        } catch {}
      }
      showMsg("Download failed");
    }
  };

  const viewInvoice = async (month) => {
    try {
      showMsg("Preparing preview...");
      // We need to find the invoice ID for this month
      const inv = billing.find(b => b.month === month);
      if (!inv) return;
      
      const res = await api.get(`/billing/invoice/${inv.id}`, { responseType: "blob" });
      const url = URL.createObjectURL(res.data);
      setPreviewUrl(url);
      setShowPreviewModal(true);
    } catch { showMsg("Failed to load preview"); }
  };

  const deleteJob = async (job) => {
    setConfirmModal({
      show: true,
      title: "Delete Stone Record",
      message: `Are you sure you want to permanently delete stone "${job.stone_id}" from your record?`,
      confirmLabel: "Delete Stone",
      isDanger: true,
      onConfirm: async () => {
        try {
          await api.delete(`/jobs/${job.id}`);
          showMsg(`Deleted: ${job.stone_id}`);
          setSelectedIds((p) => p.filter((id) => id !== job.id));
          loadData();
        } catch (err) { showMsg(err.response?.data?.detail || "Delete failed"); }
      }
    });
  };

  const toggleSelect = (id) =>
    setSelectedIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const selectAll = () => setSelectedIds(completed.map((j) => j.id));
  const clearSelection = () => setSelectedIds([]);

  const downloadSelected = async () => {
    if (!selectedIds.length) { showMsg("Select stones first"); return; }
    setDownloadingBulk(true);
    setDownloadProgress(0);
    try {
      showMsg("Preparing download...");
      const res = await api.post(
        "/jobs/download-bulk",
        { job_ids: selectedIds },
        {
          responseType: "blob",
          onDownloadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setDownloadProgress(percentCompleted);
            } else {
              setDownloadProgress(null);
            }
          }
        }
      );
      showMsg("Saving files...");
      await downloadFile(res.data, "completed_stones.zip");
      showMsg("✓ Bulk download saved to D:\\Online\\");
      setSelectedIds([]);
      loadData();
    } catch (err) {
      console.error(err);
      showMsg("Bulk download failed");
    } finally {
      setDownloadingBulk(false);
      setDownloadProgress(null);
    }
  };

  const toggleSelectDownloaded = (id) =>
    setSelectedDownloadedIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const selectAllDownloaded = () => setSelectedDownloadedIds(downloadedJobs.map((j) => j.id));
  const clearSelectionDownloaded = () => setSelectedDownloadedIds([]);

  const downloadSelectedDownloaded = async () => {
    if (!selectedDownloadedIds.length) { showMsg("Select stones first"); return; }
    setDownloadingDownloadedBulk(true);
    setDownloadedProgress(0);
    try {
      showMsg("Preparing download...");
      const res = await api.post(
        "/jobs/download-bulk",
        { job_ids: selectedDownloadedIds },
        {
          responseType: "blob",
          onDownloadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setDownloadedProgress(percentCompleted);
            } else {
              setDownloadedProgress(null);
            }
          }
        }
      );
      showMsg("Saving files...");
      await downloadFile(res.data, "completed_stones.zip");
      showMsg("✓ Bulk download saved to D:\\Online\\");
      setSelectedDownloadedIds([]);
      loadData();
    } catch (err) {
      console.error(err);
      showMsg("Bulk download failed");
    } finally {
      setDownloadingDownloadedBulk(false);
      setDownloadedProgress(null);
    }
  };

  const deleteSelected = async () => {
    if (!selectedIds.length) { showMsg("Select stones first"); return; }
    setConfirmModal({
      show: true,
      title: "Delete Selected Stones",
      message: `Are you sure you want to permanently delete the ${selectedIds.length} selected completed stone(s)?`,
      confirmLabel: "Delete Selected",
      isDanger: true,
      onConfirm: async () => {
        let n = 0;
        for (const id of selectedIds) { try { await api.delete(`/jobs/${id}`); n++; } catch {} }
        setSelectedIds([]);
        showMsg(`${n} stone(s) deleted`);
        loadData();
      }
    });
  };

  const toggleSelectActive = (id) =>
    setSelectedActiveIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const selectAllActive = () => setSelectedActiveIds(activeJobs.map((j) => j.id));
  const clearSelectionActive = () => setSelectedActiveIds([]);

  const deleteSelectedActive = async () => {
    if (!selectedActiveIds.length) { showMsg("Select active stones first"); return; }
    setConfirmModal({
      show: true,
      title: "Delete Selected Active Stones",
      message: `Are you sure you want to permanently delete the ${selectedActiveIds.length} selected active stone(s)?`,
      confirmLabel: "Delete Selected",
      isDanger: true,
      onConfirm: async () => {
        let n = 0;
        for (const id of selectedActiveIds) { try { await api.delete(`/jobs/${id}`); n++; } catch {} }
        setSelectedActiveIds([]);
        showMsg(`${n} active stone(s) deleted`);
        loadData();
      }
    });
  };

  const openReportModal = async (month) => {
    setReportConfig(prev => ({
      ...prev,
      month: month,
      format: "PDF",
      type: "SUMMARY",
      filter: "MONTH"
    }));
    setShowReportModal(true);
    try {
      const [y, m] = month.split("-").map(Number);
      const [rangesRes, dateRes] = await Promise.all([
        api.get(`/billing/weight-ranges/${profile.id}?year=${y}&month=${m}`),
        api.get(`/billing/user-earliest-date/${profile.id}`)
      ]);
      setAvailableRanges(rangesRes.data);
      setMinDate(dateRes.data.date || "");
    } catch (e) {
      console.error("Error loading modal data", e);
    }
  };

  const triggerCustomDownload = async () => {
    setDownloadingReport(true);
    try {
      const payload = {
        format: reportConfig.format,
        type: reportConfig.type,
        filter: reportConfig.filter,
        month: reportConfig.month,
      };

      if (reportConfig.filter === "DAYS") {
        payload.dates = reportConfig.dates;
      } else if (reportConfig.filter === "RANGE") {
        payload.dates = [reportConfig.startDate, reportConfig.endDate];
      }

      const res = await api.post("/billing/report", payload, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      const ext = reportConfig.format === "PDF" ? "pdf" : "xlsx";
      link.setAttribute("download", `report_${reportConfig.month || "custom"}.${ext}`);
      document.body.appendChild(link);
      link.click();
      setShowReportModal(false);
    } catch (e) {
      if (e.response?.status === 404) {
        showMsg("No Record Found");
      } else {
        showMsg("Error generating report");
      }
    } finally {
      setDownloadingReport(false);
    }
  };

  const StatusBadge = ({ status }) => {
    const cfg = STATUS_CONFIG[status] || { cls: "uploaded", icon: null };
    return <span className={`status-badge ${cfg.cls}`}>{cfg.icon} {status}</span>;
  };

  const yearOptions = [];
  for (let y = now.getFullYear(); y >= now.getFullYear() - 3; y--) yearOptions.push(y);

  return (
    <Shell title="Dashboard" subtitle={profile ? `${profile.company_name} — ${profile.username}` : ""} actions={
      <>
        <span className="refresh-dot" title="Auto-refresh active" />
        <ThemeToggle />
        <LogoutButton />
      </>
    }>
      {/* ── Stats ── */}
      <section className="stats-grid">
        {loading ? (
          Array(6).fill(0).map((_, i) => (
            <div key={i} className="stat-card skeleton" style={{ height: 100, border: 'none' }} />
          ))
        ) : (
          <>
            <StatCard label="Total Jobs" value={summary?.total ?? jobs.length}
              icon={<Package size={20} />} color="blue" />
            <StatCard label="Completed" value={summary?.processed ?? allCompleted.length}
              icon={<CheckCircle2 size={20} />} color="green" />
            <StatCard label="Pending" value={summary?.pending ?? 0}
              icon={<Clock size={20} />} color="orange" />
            <StatCard label="Processing" value={summary?.processing ?? 0}
              icon={<Loader2 size={20} />} color="purple" />
            <StatCard label="Failed" value={summary?.failed ?? 0}
              icon={<XCircle size={20} />} color="red" />
            <StatCard label="Weight Done" value={`${totalWeight.toFixed(2)} ct`}
              icon={<Weight size={20} />} color="green" />
          </>
        )}
      </section>

      {/* ── Upload Zone ── */}
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">
            <div className="panel-icon purple"><Upload size={18} /></div>
            <h3>Upload Stones</h3>
          </div>
          {form.files.length > 0 && (
            <span className="panel-badge purple">{form.files.length} file(s) selected</span>
          )}
        </div>
        <form onSubmit={uploadFiles}>
          <div
            className={`upload-zone ${dragOver ? "drag-over" : ""}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
          >
            <div className="upload-icon"><Upload size={36} /></div>
            <p>
              {form.files.length
                ? form.files.map((f) => f.name).join(", ")
                : "Drag & drop files here or click to browse"
              }
            </p>
            <div className="upload-hint">Stone ID will be auto-detected from the file name</div>
          </div>
          <input
            ref={fileInputRef}
            key={fileInputKey}
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />
          <div style={{ marginTop: 12, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <button type="submit" className="btn-primary" disabled={uploading || !form.files.length}>
              {uploading ? <Loader2 size={16} className="spin" /> : <Upload size={16} />}
              {uploading 
                ? (uploadProgress 
                    ? `Uploading ${uploadProgress.current}/${uploadProgress.total}` 
                    : "Uploading...") 
                : "Upload Files"}
            </button>
            {uploading && uploadProgress && (
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: "200px", maxWidth: "300px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                  <span style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", maxWidth: "180px" }} title={uploadProgress.filename}>
                    File: {uploadProgress.filename}
                  </span>
                  <span>{uploadProgress.percent || 0}%</span>
                </div>
                <div style={{ width: "100%", height: "6px", background: "var(--border-light)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: `${uploadProgress.percent || 0}%`, height: "100%", background: "var(--primary)", transition: "width 0.1s ease" }}></div>
                </div>
              </div>
            )}
            {!uploading && form.files.length > 0 && (
              <button type="button" className="btn-ghost" onClick={() => { setForm({ files: [] }); setFileInputKey(p => p + 1); }}>
                Clear
              </button>
            )}
          </div>
        </form>
      </div>

      {/* ── Tab Navigation ── */}
      <div className="tab-bar">
        <button className={`tab-btn ${activeTab === "stones" ? "active" : ""}`} onClick={() => setActiveTab("stones")}>
          <Gem size={16} /> Stones
        </button>
        <button className={`tab-btn ${activeTab === "report" ? "active" : ""}`} onClick={() => setActiveTab("report")}>
          <FileSpreadsheet size={16} /> Stone Report
        </button>
        <button className={`tab-btn ${activeTab === "downloaded_files" ? "active" : ""}`} onClick={() => setActiveTab("downloaded_files")}>
          <Download size={16} /> Downloaded Files
        </button>
      </div>

      {/* ── TAB: Stones ── */}
      {activeTab === "stones" && (
        <>
          {/* Search */}
          <div style={{ position: "relative", marginBottom: 16 }}>
            <Search size={18} style={{ position: "absolute", left: 12, top: 11, color: "var(--text-light)" }} />
            <input
              className="search-input"
              placeholder="Search stones by ID or filename..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: 38, marginBottom: 0 }}
            />
          </div>

          {/* Completed Stones */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <div className="panel-icon green"><CheckCircle2 size={18} /></div>
                <h3>Completed Stones</h3>
              </div>
              <span className="panel-badge green">{completed.length}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
              <div className="bulk-action-grid" style={{ marginBottom: 0, display: "flex", gap: 8 }}>
                <button className="btn-ghost btn-sm" onClick={selectAll} disabled={downloadingBulk}>Select All</button>
                <button className="btn-ghost btn-sm" onClick={clearSelection} disabled={downloadingBulk}>Clear</button>
                <button className="btn-primary btn-sm" onClick={downloadSelected} disabled={!selectedIds.length || downloadingBulk}>
                  {downloadingBulk ? <Loader2 size={14} className="spin" /> : <Download size={14} />}
                  {downloadingBulk
                    ? (downloadProgress !== null ? `Downloading ${downloadProgress}%` : "Downloading...")
                    : `Download (${selectedIds.length})`}
                </button>
              </div>
              
              {downloadingBulk && downloadProgress !== null && (
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "200px", maxWidth: "300px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    <span>Downloading ZIP file</span>
                    <span>{downloadProgress}%</span>
                  </div>
                  <div style={{ width: "100%", height: "6px", background: "var(--border-light)", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{ width: `${downloadProgress}%`, height: "100%", background: "var(--primary)", transition: "width 0.1s ease" }}></div>
                  </div>
                </div>
              )}
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: 40 }}>
                      <SelectionBox 
                        checked={selectedIds.length === completed.length && completed.length > 0}
                        onChange={() => selectedIds.length === completed.length ? clearSelection() : selectAll()} 
                      />
                    </th>
                    <th>Stone ID</th>
                    <th>File</th>
                    <th>Completed</th>
                    <th style={{ width: 130 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCompleted.length ? filteredCompleted.map((job) => (
                    <tr key={job.id} className={selectedIds.includes(job.id) ? "selected-row" : ""}>
                      <td><SelectionBox checked={selectedIds.includes(job.id)} onChange={() => toggleSelect(job.id)} /></td>
                      <td><strong>{job.stone_id}</strong></td>
                      <td style={{ color: "var(--text-light)", fontSize: ".85rem" }}>{job.completed_filename || "-"}</td>
                      <td style={{ fontSize: ".85rem" }}>{job.completed_at ? new Date(job.completed_at).toLocaleString('en-GB') : "-"}</td>
                      <td>
                        <button className="btn-primary btn-sm" onClick={() => requestDownload(job)} title="Download">
                          <Download size={14} /> Download
                        </button>
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={5}>
                      <div className="empty-state"><Gem size={32} /><p>No completed stones yet</p></div>
                    </td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Active Stones */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <div className="panel-icon orange"><Clock size={18} /></div>
                <h3>Active Stones</h3>
              </div>
              <span className="panel-badge orange">{activeJobs.length}</span>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Stone ID</th>
                    <th>Weight</th>
                    <th>Status</th>
                    <th>File</th>
                    <th>Created</th>
                    <th>Processing Since</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredActive.length ? filteredActive.map((job) => (
                    <tr key={job.id}>
                      <td><strong>{job.stone_id}</strong></td>
                      <td>{job.weight || "-"}</td>
                      <td><StatusBadge status={job.status} /></td>
                      <td style={{ color: "var(--text-light)", fontSize: ".85rem" }}>{job.upload_filename || "-"}</td>
                      <td style={{ fontSize: ".85rem" }}>{job.created_at ? new Date(job.created_at).toLocaleString('en-GB') : "-"}</td>
                      <td style={{ fontSize: ".85rem" }}>{job.processing_started_at ? new Date(job.processing_started_at).toLocaleString('en-GB') : "-"}</td>
                    </tr>
                  )) : (
                    <tr><td colSpan={6}>
                      <div className="empty-state"><Package size={32} /><p>No active stones</p></div>
                    </td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* ── TAB: Stone Report ── */}
      {activeTab === "report" && (
        <>
          {/* Month/Year filter */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <div className="panel-icon blue"><FileSpreadsheet size={18} /></div>
                <h3>Stone Report</h3>
              </div>
            </div>
            <div className="filter-row billing-controls-row" style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", gap: 10, width: "100%", maxWidth: "600px", alignItems: "flex-end" }}>
                <div className="filter-group" style={{ marginBottom: 0, flex: 1 }}>
                  <label style={{ marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}><Calendar size={14} /> Month</label>
                  <CustomSelect
                    options={MONTHS.slice(1).map((m, i) => ({ label: m, value: i + 1 }))}
                    value={reportMonth}
                    onChange={(val) => { setReportMonth(val); setReportLoaded(false); }}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="filter-group" style={{ marginBottom: 0, flex: 1 }}>
                  <label style={{ marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}><Calendar size={14} /> Year</label>
                  <CustomSelect
                    options={yearOptions.map(y => ({ label: String(y), value: y }))}
                    value={reportYear}
                    onChange={(val) => { setReportYear(val); setReportLoaded(false); }}
                    style={{ width: "100%" }}
                  />
                </div>
                <button 
                  type="button" 
                  className="btn-primary" 
                  onClick={loadStoneReportAndRanges}
                  style={{ height: "42px", padding: "0 20px", display: "flex", alignItems: "center", gap: "6px" }}
                  disabled={loading}
                >
                  {loading ? <Loader2 size={16} className="spin" /> : <Eye size={16} />} Show Report
                </button>
                <button 
                  type="button" 
                  className="btn-primary" 
                  onClick={() => openReportModal(`${reportYear}-${String(reportMonth).padStart(2, '0')}`)}
                  style={{ height: "42px", padding: "0 20px", display: "flex", alignItems: "center", gap: "6px" }}
                  disabled={loading}
                >
                  <Download size={16} /> Download Report
                </button>
              </div>
            </div>

            {/* Excel-style summary & detail report */}
            {reportLoaded && (
              reportRanges.length === 0 ? (
                <div className="empty-state">
                  <FileSpreadsheet size={32} />
                  <p>No configured weight ranges or records found for this client.</p>
                </div>
              ) : (
                <div className="table-container" style={{ marginTop: 16 }}>
                  <table className="excel-report-table">
                    <thead>
                      <tr>
                        <th style={{ textAlign: "left" }}>Range</th>
                        <th style={{ textAlign: "right" }}>Pcs</th>
                        <th style={{ textAlign: "right" }}>Carat</th>
                        <th style={{ textAlign: "right" }}>Rate</th>
                        <th style={{ textAlign: "right" }}>Total Rs</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rangeSummaries.map((s) => {
                        const isExpanded = expandedRanges.includes(s.range);
                        return (
                          <Fragment key={s.id}>
                            <tr 
                              className="summary-row" 
                              onClick={() => toggleRangeExpand(s.range)}
                              style={{ cursor: "pointer" }}
                            >
                              <td><strong>{s.range}</strong></td>
                              <td style={{ textAlign: "right" }}>{s.pcs}</td>
                              <td style={{ textAlign: "right" }}>{s.carat.toFixed(2)}</td>
                              <td style={{ textAlign: "right" }}>₹{s.rate.toFixed(2)}</td>
                              <td style={{ textAlign: "right", fontWeight: 600 }}>₹{s.totalAmt.toFixed(2)}</td>
                            </tr>
                            {isExpanded && (
                              <tr className="expanded-row-container" style={{ background: "var(--bg-card-hover)" }}>
                                <td colSpan={5} style={{ padding: "16px 20px" }}>
                                  <div 
                                    className="report-toggle-helper"
                                    style={{ 
                                      textAlign: "center", 
                                      fontSize: "0.85rem", 
                                      color: "var(--primary)", 
                                      marginBottom: 12, 
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      gap: "6px",
                                      fontWeight: 600,
                                      userSelect: "none"
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleRangeExpand(s.range);
                                    }}
                                  >
                                    Hide Detailed Records ▲
                                  </div>
                                  <div className="table-container nested-table" style={{ border: "1.5px solid var(--border-light)", borderRadius: "8px" }}>
                                    <table style={{ width: "100%" }}>
                                      <thead>
                                        <tr>
                                          <th>#</th>
                                          <th>Stone ID</th>
                                          <th>Weight (ct)</th>
                                          <th>Completed On</th>
                                          <th style={{ textAlign: "right" }}>Amount (₹)</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {s.stones.length ? s.stones.map((stone, idx) => (
                                          <tr key={stone.job_id}>
                                            <td>{idx + 1}</td>
                                            <td><strong>{stone.stone_id}</strong></td>
                                            <td>{Number(stone.weight).toFixed(2)}</td>
                                            <td style={{ fontSize: ".85rem" }}>{stone.completed_at ? new Date(stone.completed_at).toLocaleDateString('en-GB') : "-"}</td>
                                            <td style={{ textAlign: "right", fontWeight: 600 }}>₹{Number(stone.amount).toFixed(2)}</td>
                                          </tr>
                                        )) : (
                                          <tr>
                                            <td colSpan={5} style={{ textAlign: "center", color: "var(--text-light)", padding: "20px" }}>
                                              No completed stones found in this range
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </Fragment>
                        );
                      })}
                      <tr className="total-row">
                        <td><strong>TOTAL</strong></td>
                        <td style={{ textAlign: "right" }}><strong>{reportTotals.pcs}</strong></td>
                        <td style={{ textAlign: "right" }}><strong>{reportTotals.carat.toFixed(2)}</strong></td>
                        <td></td>
                        <td style={{ textAlign: "right" }}><strong>₹{reportTotals.amount.toFixed(2)}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            )}
          </div>
        </>
      )}

      {/* ── TAB: Downloaded Files ── */}
      {activeTab === "downloaded_files" && (
        <div className="fade-in">
          {/* Search */}
          <div style={{ position: "relative", marginBottom: 16 }}>
            <Search size={18} style={{ position: "absolute", left: 12, top: 11, color: "var(--text-light)" }} />
            <input
              className="search-input"
              placeholder="Search downloaded files by ID or filename..."
              value={downloadedSearchTerm}
              onChange={(e) => setDownloadedSearchTerm(e.target.value)}
              style={{ paddingLeft: 38, marginBottom: 0 }}
            />
          </div>

          {/* Downloaded Files Panel */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <div className="panel-icon blue"><Download size={18} /></div>
                <h3>Downloaded Files</h3>
              </div>
              <span className="panel-badge blue">{downloadedJobs.length}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
              <div className="bulk-action-grid" style={{ marginBottom: 0, display: "flex", gap: 8 }}>
                <button className="btn-ghost btn-sm" onClick={selectAllDownloaded} disabled={downloadingDownloadedBulk}>Select All</button>
                <button className="btn-ghost btn-sm" onClick={clearSelectionDownloaded} disabled={downloadingDownloadedBulk}>Clear</button>
                <button className="btn-primary btn-sm" onClick={downloadSelectedDownloaded} disabled={!selectedDownloadedIds.length || downloadingDownloadedBulk}>
                  {downloadingDownloadedBulk ? <Loader2 size={14} className="spin" /> : <Download size={14} />}
                  {downloadingDownloadedBulk
                    ? (downloadedProgress !== null ? `Downloading ${downloadedProgress}%` : "Downloading...")
                    : `Download (${selectedDownloadedIds.length})`}
                </button>
              </div>
              
              {downloadingDownloadedBulk && downloadedProgress !== null && (
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "200px", maxWidth: "300px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    <span>Downloading ZIP file</span>
                    <span>{downloadedProgress}%</span>
                  </div>
                  <div style={{ width: "100%", height: "6px", background: "var(--border-light)", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{ width: `${downloadedProgress}%`, height: "100%", background: "var(--primary)", transition: "width 0.1s ease" }}></div>
                  </div>
                </div>
              )}
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: 40 }}>
                      <SelectionBox 
                        checked={selectedDownloadedIds.length === downloadedJobs.length && downloadedJobs.length > 0}
                        onChange={() => selectedDownloadedIds.length === downloadedJobs.length ? clearSelectionDownloaded() : selectAllDownloaded()} 
                      />
                    </th>
                    <th>Stone ID</th>
                    <th>File</th>
                    <th>Completed</th>
                    <th style={{ width: 130 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDownloaded.length ? filteredDownloaded.map((job) => (
                    <tr key={job.id} className={selectedDownloadedIds.includes(job.id) ? "selected-row" : ""}>
                      <td><SelectionBox checked={selectedDownloadedIds.includes(job.id)} onChange={() => toggleSelectDownloaded(job.id)} /></td>
                      <td><strong>{job.stone_id}</strong></td>
                      <td style={{ color: "var(--text-light)", fontSize: ".85rem" }}>{job.completed_filename || "-"}</td>
                      <td style={{ fontSize: ".85rem" }}>{job.completed_at ? new Date(job.completed_at).toLocaleString('en-GB') : "-"}</td>
                      <td>
                        <button className="btn-primary btn-sm" onClick={() => requestDownload(job)} title="Download">
                          <Download size={14} /> Download
                        </button>
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={5}>
                      <div className="empty-state"><Gem size={32} /><p>No downloaded files yet</p></div>
                    </td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Account info (Always visible bottom of Report tab) */}
      {activeTab === "report" && profile && (
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <div className="panel-icon purple"><TrendingUp size={18} /></div>
              <h3>Account Summary</h3>
            </div>
          </div>
          <div className="account-grid">
            <div className="account-item">
              <span className="account-label">Company</span>
              <span className="account-value">{profile.company_name}</span>
            </div>
            <div className="account-item">
              <span className="account-label">Username</span>
              <span className="account-value">@{profile.username}</span>
            </div>
            <div className="account-item">
              <span className="account-label">Member Since</span>
              <span className="account-value">{new Date(profile.created_at).toLocaleDateString('en-GB')}</span>
            </div>
            <div className="account-item">
              <span className="account-label">Total Completed</span>
              <span className="account-value">{allCompleted.length} stones</span>
            </div>
            <div className="account-item highlight">
              <span className="account-label">Total Weight</span>
              <span className="account-value">{totalWeight.toFixed(2)} ct</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Profile Card (always visible) ── */}
      {profile && activeTab === "stones" && (
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <div className="panel-icon purple"><Gem size={18} /></div>
              <h3>Profile</h3>
            </div>
          </div>
          <div className="profile-bar">
            <div className="profile-avatar">
              {profile.username?.charAt(0).toUpperCase()}
            </div>
            <div className="profile-details">
              <strong>{profile.company_name}</strong>
              <span>@{profile.username} • Since {new Date(profile.created_at).toLocaleDateString('en-GB')}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Download Custom Report Modal ── */}
      {showReportModal && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: 500 }}>
            <div className="modal-header">
              <div className="panel-title">
                <Download size={20} className="text-primary" />
                <h3>Download Report</h3>
              </div>
              <button onClick={() => setShowReportModal(false)} className="btn-icon">
                <XCircle size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <p style={{ marginBottom: 20, color: "var(--text-secondary)" }}>
                Generating report for <strong>{reportConfig.month}</strong>
              </p>

                <div className="form-group">
                <label>File Format</label>
                <div className="btn-group" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <button 
                    className={`btn ${reportConfig.format === "PDF" ? "btn-primary" : "btn-outline"}`}
                    onClick={() => setReportConfig(p => ({ ...p, format: "PDF", filter: "MONTH", type: "SUMMARY" }))}
                  >
                    <FileText size={16} /> PDF
                  </button>
                  <button 
                    className={`btn ${reportConfig.format === "EXCEL" ? "btn-success" : "btn-outline"}`}
                    onClick={() => setReportConfig(p => ({ ...p, format: "EXCEL", type: "SUMMARY" }))}
                  >
                    <FileSpreadsheet size={16} /> Excel
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Report Type</label>
                {reportConfig.format === "PDF" ? (
                  <div style={{
                    padding: "10px 14px",
                    background: "var(--bg-card-hover)",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    color: "var(--text)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center"
                  }}>
                    Summary Report
                  </div>
                ) : (
                  <CustomSelect 
                    options={[
                      { label: "Summary Report", value: "SUMMARY" },
                      { label: "Full Report", value: "FULL_SHEETS" }
                    ]}
                    value={reportConfig.type}
                    onChange={(val) => setReportConfig(p => ({ ...p, type: val }))}
                  />
                )}
              </div>

              {reportConfig.format !== "PDF" && (
                <div className="form-group">
                  <label>Date Filter</label>
                  <CustomSelect 
                    options={[
                      { label: `Full Month (${reportConfig.month})`, value: "MONTH" },
                      { label: "Multiple Dates", value: "DAYS" },
                      { label: "Date Range", value: "RANGE" }
                    ]}
                    value={reportConfig.filter}
                    onChange={(val) => setReportConfig(p => ({ ...p, filter: val }))}
                  />
                </div>
              )}

              {reportConfig.filter === "DAYS" && (
                <div className="form-group">
                  <label>Select Dates</label>
                  <CustomDatePicker 
                    value=""
                    placeholder="CLICK TO ADD DATE"
                    min={minDate}
                    onChange={(val) => {
                      if (val && !reportConfig.dates.includes(val)) {
                        setReportConfig(p => ({ ...p, dates: [...p.dates, val] }));
                      }
                    }}
                  />
                  <HorizontalScrollContainer 
                    style={{ 
                      display: "flex", 
                      gap: 8, 
                      marginTop: 12, 
                      overflowX: "auto", 
                      width: "100%", 
                      minHeight: "40px",
                      alignItems: "center",
                      whiteSpace: 'nowrap',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      cursor: 'ew-resize'
                    }} className="no-scrollbar">
                    {reportConfig.dates.map(d => {
                      const [y, m, day] = d.split("-");
                      return (
                        <span key={d} className="status-badge queued" style={{ display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0, padding: '6px 12px' }}>
                          {`${day}/${m}/${y}`} <XCircle size={14} style={{ cursor: "pointer", opacity: 0.7 }} onClick={() => setReportConfig(p => ({ ...p, dates: p.dates.filter(x => x !== d) }))} />
                        </span>
                      );
                    })}
                  </HorizontalScrollContainer>
                </div>
              )}

              {reportConfig.filter === "RANGE" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15 }}>
                  <div className="form-group">
                    <label>From</label>
                    <CustomDatePicker 
                      value={reportConfig.startDate}
                      min={minDate}
                      onChange={(val) => setReportConfig(p => ({ ...p, startDate: val }))}
                    />
                  </div>
                  <div className="form-group">
                    <label>To</label>
                    <CustomDatePicker 
                      value={reportConfig.endDate}
                      min={minDate}
                      onChange={(val) => setReportConfig(p => ({ ...p, endDate: val }))}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button onClick={() => setShowReportModal(false)} className="btn-outline">Cancel</button>
              <button 
                className="btn-primary" 
                onClick={triggerCustomDownload}
                disabled={downloadingReport}
              >
                {downloadingReport ? <Loader2 className="spin" size={16} /> : <Download size={16} />}
                Download
              </button>
            </div>
          </div>
        </div>
      )}
      {showPreviewModal && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: 900, width: '90%', height: '90vh' }}>
            <div className="modal-header">
              <div className="panel-title">
                <Eye size={20} className="text-primary" />
                <h3>Invoice Preview</h3>
              </div>
              <button onClick={() => { setShowPreviewModal(false); URL.revokeObjectURL(previewUrl); }} className="btn-icon">
                <XCircle size={24} />
              </button>
            </div>
            <div className="modal-body pdf-preview-body">
              <iframe 
                src={previewUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 'none', flex: 1, borderRadius: '10px' }}
                title="Invoice Preview"
              />
            </div>
          </div>
        </div>
      )}
      {message && <div className="toast">{message}</div>}

      {/* ── Premium Custom Confirmation Modal ── */}
      {confirmModal.show && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.65)", display: "flex", alignItems: "center",
          justifyContent: "center", zIndex: 2000, backdropFilter: "blur(8px)",
          animation: "fadeIn 0.2s ease-out"
        }}>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
          `}</style>
          <div className="panel" style={{
            width: "440px", maxWidth: "90%", padding: "24px",
            border: "1px solid var(--border-light)", background: "var(--bg-card)",
            borderRadius: "16px", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.15), 0 10px 10px -5px rgba(0,0,0,0.05)",
            animation: "scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "20px" }}>
              <div style={{
                background: confirmModal.isDanger ? "var(--failed-bg)" : "var(--primary-bg)",
                color: confirmModal.isDanger ? "var(--failed)" : "var(--primary)",
                padding: "12px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <AlertCircle size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 8px 0", fontSize: "1.15rem", fontWeight: 700, color: "var(--text)" }}>
                  {confirmModal.title || "Confirm Action"}
                </h3>
                <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                  {confirmModal.message}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", borderTop: "1px solid var(--border-light)", paddingTop: "16px" }}>
              <button className="btn-ghost" onClick={() => setConfirmModal({ ...confirmModal, show: false })} style={{ height: "40px", padding: "0 18px", borderRadius: "8px", fontWeight: 600 }}>
                Cancel
              </button>
              <button 
                className={confirmModal.isDanger ? "btn-danger" : "btn-primary"} 
                onClick={() => {
                  if (confirmModal.onConfirm) confirmModal.onConfirm();
                  setConfirmModal({ ...confirmModal, show: false });
                }}
                style={{ height: "40px", padding: "0 20px", borderRadius: "8px", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}
              >
                {confirmModal.confirmLabel || "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}
