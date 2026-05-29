import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const [form, setForm] = useState({ files: [] });
  const [fileInputKey, setFileInputKey] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedActiveIds, setSelectedActiveIds] = useState([]);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem("clientActiveTab") || "stones"); // stones | report | billing | pay_pending
  const fileInputRef = useRef(null);
  const msgTimer = useRef(null);

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
    setProfile(profileRes.data);
    setJobs(jobsRes.data);
    setBilling(billingRes.data);
    setSummary(summaryRes.data);
    setLoading(false);
  }, []);

  const loadStoneReport = useCallback(async () => {
    try {
      const res = await billingApi.getStoneReport(reportYear, reportMonth);
      setStoneReport(res.data);
    } catch { setStoneReport([]); }
  }, [reportYear, reportMonth]);

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
    if (activeTab === "report") loadStoneReport();
    if (activeTab === "pay_pending") loadProfits();
    localStorage.setItem("clientActiveTab", activeTab);
  }, [activeTab, loadStoneReport, loadProfits]);

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

  const completed = useMemo(() => jobs.filter((j) => j.status === "Completed"), [jobs]);
  const activeJobs = useMemo(() => jobs.filter((j) => j.status !== "Completed"), [jobs]);
  const totalWeight = useMemo(() => completed.reduce((s, j) => s + Number(j.weight), 0), [completed]);

  // Stone report totals
  const reportTotals = useMemo(() => {
    const totalWt = stoneReport.reduce((s, r) => s + Number(r.weight), 0);
    const totalAmt = stoneReport.reduce((s, r) => s + Number(r.amount), 0);
    return { weight: totalWt, amount: totalAmt, count: stoneReport.length };
  }, [stoneReport]);

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
    try {
      const fd = new FormData();
      form.files.forEach((f) => fd.append("files", f));
      const { data } = await api.post("/jobs/upload-multiple", fd);
      showMsg(
        `Upload: ${data.created} created, ${data.replaced ?? 0} replaced, ${data.skipped_in_processing?.length ?? 0} skipped, ${data.invalid_files.length} invalid`
      );
      setForm({ files: [] });
      setFileInputKey((p) => p + 1);
      loadData();
    } catch (err) {
      showMsg(err.response?.data?.detail || "Upload failed");
    } finally {
      setUploading(false);
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
    try {
      showMsg("Downloading...");
      const res = await api.post("/jobs/download-bulk", { job_ids: selectedIds }, { responseType: "blob" });
      await downloadFile(res.data, "completed_stones.zip");
      showMsg("✓ Bulk download saved to D:\\Online\\");
    } catch { showMsg("Bulk download failed"); }
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
            <StatCard label="Completed" value={summary?.processed ?? completed.length}
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
          <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
            <button type="submit" className="btn-primary" disabled={uploading || !form.files.length}>
              <Upload size={16} />
              {uploading ? "Uploading..." : "Upload Files"}
            </button>
            {form.files.length > 0 && (
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
        <button className={`tab-btn ${activeTab === "billing" ? "active" : ""}`} onClick={() => setActiveTab("billing")}>
          <Receipt size={16} /> Billing & Invoices
        </button>
        <button className={`tab-btn ${activeTab === "pay_pending" ? "active" : ""}`} onClick={() => setActiveTab("pay_pending")}>
          <IndianRupee size={16} /> Pay & Pending
        </button>
      </div>

      {/* ── TAB: Stones ── */}
      {activeTab === "stones" && (
        <>
          {/* Search */}
          <div style={{ position: "relative", marginBottom: 16 }}>
            <Search size={18} style={{ position: "absolute", left: 12, top: 11, color: "#94a3b8" }} />
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

            <div className="bulk-action-grid" style={{ marginBottom: 12 }}>
              <button className="btn-ghost btn-sm" onClick={selectAll}>Select All</button>
              <button className="btn-ghost btn-sm" onClick={clearSelection}>Clear</button>
              <button className="btn-primary btn-sm" onClick={downloadSelected} disabled={!selectedIds.length}>
                <Download size={14} /> Download ({selectedIds.length})
              </button>
              <button className="btn-danger btn-sm" onClick={deleteSelected} disabled={!selectedIds.length}>
                <Trash2 size={14} /> Delete ({selectedIds.length})
              </button>
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
                      <td style={{ color: "#64748b", fontSize: ".85rem" }}>{job.completed_filename || "-"}</td>
                      <td style={{ fontSize: ".85rem" }}>{job.completed_at ? new Date(job.completed_at).toLocaleString('en-GB') : "-"}</td>
                      <td>
                        <div className="btn-group">
                          <button className="btn-primary btn-sm" onClick={() => requestDownload(job)} title="Download">
                            <Download size={14} />
                          </button>
                          <button className="btn-danger btn-sm" onClick={() => deleteJob(job)} title="Delete">
                            <Trash2 size={14} />
                          </button>
                        </div>
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

            <div className="bulk-action-grid" style={{ marginBottom: 12 }}>
              <button className="btn-ghost btn-sm" onClick={selectAllActive}>Select All</button>
              <button className="btn-ghost btn-sm" onClick={clearSelectionActive}>Clear</button>
              <button className="btn-danger btn-sm full-row" onClick={deleteSelectedActive} disabled={!selectedActiveIds.length}>
                <Trash2 size={14} /> Delete ({selectedActiveIds.length})
              </button>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: 40 }}>
                      <SelectionBox 
                        checked={selectedActiveIds.length === activeJobs.length && activeJobs.length > 0}
                        onChange={() => selectedActiveIds.length === activeJobs.length ? clearSelectionActive() : selectAllActive()} 
                      />
                    </th>
                    <th>Stone ID</th>
                    <th>Weight</th>
                    <th>Status</th>
                    <th>File</th>
                    <th>Created</th>
                    <th>Processing Since</th>
                    <th style={{ width: 70 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredActive.length ? filteredActive.map((job) => (
                    <tr key={job.id} className={selectedActiveIds.includes(job.id) ? "selected-row" : ""}>
                      <td><SelectionBox checked={selectedActiveIds.includes(job.id)} onChange={() => toggleSelectActive(job.id)} /></td>
                      <td><strong>{job.stone_id}</strong></td>
                      <td>{job.weight || "-"}</td>
                      <td><StatusBadge status={job.status} /></td>
                      <td style={{ color: "#64748b", fontSize: ".85rem" }}>{job.upload_filename || "-"}</td>
                      <td style={{ fontSize: ".85rem" }}>{job.created_at ? new Date(job.created_at).toLocaleString('en-GB') : "-"}</td>
                      <td style={{ fontSize: ".85rem" }}>{job.processing_started_at ? new Date(job.processing_started_at).toLocaleString('en-GB') : "-"}</td>
                      <td>
                        <button className="btn-danger btn-sm" onClick={() => deleteJob(job)} title="Delete">
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={8}>
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
              <div style={{ display: "flex", gap: 10, width: "100%", maxWidth: "340px" }}>
                <div className="filter-group" style={{ marginBottom: 0, flex: 1 }}>
                  <label style={{ marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}><Calendar size={14} /> Month</label>
                  <CustomSelect
                    options={MONTHS.slice(1).map((m, i) => ({ label: m, value: i + 1 }))}
                    value={reportMonth}
                    onChange={setReportMonth}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="filter-group" style={{ marginBottom: 0, flex: 1 }}>
                  <label style={{ marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}><Calendar size={14} /> Year</label>
                  <CustomSelect
                    options={yearOptions.map(y => ({ label: String(y), value: y }))}
                    value={reportYear}
                    onChange={setReportYear}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="generate-btn-wrapper">
                <button className="btn-primary btn-sm" onClick={loadStoneReport}>
                  <Filter size={14} /> Load Report
                </button>
              </div>
            </div>

            {/* Report summary cards */}
            {stoneReport.length > 0 && (
              <div className="report-summary">
                <div className="report-stat">
                  <span className="report-stat-label">Total Stones</span>
                  <span className="report-stat-value">{reportTotals.count}</span>
                </div>
                <div className="report-stat">
                  <span className="report-stat-label">Total Weight</span>
                  <span className="report-stat-value">{reportTotals.weight.toFixed(2)} ct</span>
                </div>
                <div className="report-stat highlight">
                  <span className="report-stat-label">Total Amount</span>
                  <span className="report-stat-value">₹{reportTotals.amount.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Stone detail table */}
            <div className="table-container" style={{ marginTop: 16 }}>
              <table>
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
                  {stoneReport.length ? stoneReport.map((s, i) => (
                    <tr key={s.job_id}>
                      <td>{i + 1}</td>
                      <td><strong>{s.stone_id}</strong></td>
                      <td>{Number(s.weight).toFixed(2)}</td>
                      <td style={{ fontSize: ".85rem" }}>{s.completed_at ? new Date(s.completed_at).toLocaleDateString('en-GB') : "-"}</td>
                      <td style={{ textAlign: "right", fontWeight: 600 }}>₹{Number(s.amount).toFixed(2)}</td>
                    </tr>
                  )) : (
                    <tr><td colSpan={5}>
                      <div className="empty-state">
                        <FileSpreadsheet size={32} />
                        <p>No completed stones found in {MONTHS[reportMonth]} {reportYear}</p>
                      </div>
                    </td></tr>
                  )}
                  {stoneReport.length > 0 && (
                    <tr className="total-row">
                      <td colSpan={2}><strong>TOTAL</strong></td>
                      <td><strong>{reportTotals.weight.toFixed(2)}</strong></td>
                      <td><strong>{reportTotals.count} stones</strong></td>
                      <td style={{ textAlign: "right" }}><strong>₹{reportTotals.amount.toFixed(2)}</strong></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* ── TAB: Billing & Invoices ── */}
      {activeTab === "billing" && (
        <>
          {/* Revenue Trend Chart */}
          <div className="panel chart-panel">
            <div className="panel-header">
              <div className="panel-title">
                <div className="panel-icon purple"><TrendingUp size={18} /></div>
                <h3>Revenue Trends</h3>
              </div>
            </div>
            <div style={{ height: 250, width: '100%', marginTop: 10 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueTrendData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--text-secondary)', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--text-secondary)', fontSize: 12}} />
                  <ChartTooltip 
                    contentStyle={{ 
                      borderRadius: 12, 
                      border: "none", 
                      background: "var(--bg-card)",
                      boxShadow: "var(--shadow-lg)",
                      color: "var(--text)"
                    }}
                    itemStyle={{ color: "var(--text)", fontWeight: 600 }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Billing overview */}
          {billing.length > 0 && (
            <div className="report-summary" style={{ marginBottom: 16 }}>
              <div className="report-stat">
                <span className="report-stat-label">Total Invoices</span>
                <span className="report-stat-value">{billing.length}</span>
              </div>
              <div className="report-stat">
                <span className="report-stat-label">Total Stones</span>
                <span className="report-stat-value">{billingTotals.stones}</span>
              </div>
              <div className="report-stat">
                <span className="report-stat-label">Total Weight</span>
                <span className="report-stat-value">{billingTotals.weight.toFixed(2)} ct</span>
              </div>
              <div className="report-stat highlight">
                <span className="report-stat-label">Total Amount</span>
                <span className="report-stat-value">₹{billingTotals.amount.toFixed(2)}</span>
              </div>
            </div>
          )}

          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <div className="panel-icon blue"><Receipt size={18} /></div>
                <h3>Invoice History</h3>
              </div>
              <span className="panel-badge blue">{billing.length}</span>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: 150 }}>Month</th>
                    <th style={{ width: 100 }}>Stones</th>
                    <th style={{ width: 120 }}>Weight (ct)</th>
                    <th style={{ width: 150, textAlign: "right" }}>Amount (₹)</th>
                    <th style={{ width: 150, textAlign: "center" }}>Generated</th>
                    <th style={{ width: 180, textAlign: "center" }}>Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {billing.length ? billing.map((b) => (
                    <tr key={b.id}>
                      <td style={{ width: 150 }}><strong>{b.month}</strong></td>
                      <td style={{ width: 100 }}>{b.total_stones}</td>
                      <td style={{ width: 120 }}>{Number(b.total_weight).toFixed(2)}</td>
                      <td style={{ width: 150, textAlign: "right", fontWeight: 600, color: "var(--primary)" }}>₹{Number(b.total_amount).toFixed(2)}</td>
                      <td style={{ width: 150, textAlign: "center", fontSize: ".85rem" }}>{b.created_at ? new Date(b.created_at).toLocaleDateString('en-GB') : "-"}</td>
                      <td style={{ width: 180, textAlign: "center" }}>
                        <div style={{ display: "flex", justifyContent: "center", gap: 5 }}>
                          <button className="btn-ghost btn-sm" onClick={() => viewInvoice(b.month)} title="Quick View">
                            <Eye size={13} /> View
                          </button>
                          <button className="btn-primary btn-sm" onClick={() => openReportModal(b.month)} title="Download">
                            <Download size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={7}>
                      <div className="empty-state">
                        <Receipt size={32} />
                        <p>No invoices generated yet</p>
                      </div>
                    </td></tr>
                  )}
                  {billing.length > 0 && (
                    <tr className="total-row">
                      <td><strong>TOTAL</strong></td>
                      <td><strong>{billingTotals.stones}</strong></td>
                      <td><strong>{billingTotals.weight.toFixed(2)}</strong></td>
                      <td style={{ textAlign: "right" }}><strong>₹{billingTotals.amount.toFixed(2)}</strong></td>
                      <td colSpan={2}></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* ── TAB: Pay & Pending ── */}
      {activeTab === "pay_pending" && (
        <div className="fade-in">
          {/* Period Filter */}
          <div className="panel" style={{ marginBottom: 20 }}>
            <div className="panel-header">
              <div className="panel-title">
                <div className="panel-icon blue"><Calendar size={18} /></div>
                <h3>Select Period</h3>
              </div>
              <button className="btn-ghost btn-sm" onClick={() => { setAccProfitMonth("all"); setAccProfitYear("all"); }}>
                View All
              </button>
            </div>
            <div className="filter-row" style={{ display: "flex", gap: 10, width: "100%", maxWidth: "340px" }}>
              <div className="filter-group" style={{ marginBottom: 0, flex: 1 }}>
                <label style={{ marginBottom: 4 }}>Month</label>
                <CustomSelect 
                  options={[{ label: "All Months", value: "all" }, ...MONTHS.slice(1).map((m, i) => ({ label: m, value: i + 1 }))]}
                  value={accProfitMonth}
                  onChange={setAccProfitMonth}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="filter-group" style={{ marginBottom: 0, flex: 1 }}>
                <label style={{ marginBottom: 4 }}>Year</label>
                <CustomSelect 
                  options={[{ label: "All Years", value: "all" }, ...yearOptions.map(y => ({ label: String(y), value: y }))]}
                  value={accProfitYear}
                  onChange={setAccProfitYear}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* Account Summary Cards */}
          <div className="stats-grid" style={{ marginBottom: 25 }}>
            <div className="stat-card" style={{ borderColor: 'rgba(108, 63, 227, 0.2)', background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(108, 63, 227, 0.03) 100%)' }}>
              <div className="stat-icon purple"><TrendingUp size={20} /></div>
              <div className="stat-content">
                <div className="stat-label">Total Revenue</div>
                <div className="stat-value" style={{ color: 'var(--primary)' }}>₹{accProfitTotals.revenue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
              </div>
            </div>
            <div className="stat-card" style={{ borderColor: 'rgba(16, 185, 129, 0.2)', background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(16, 185, 129, 0.03) 100%)' }}>
              <div className="stat-icon green"><CheckCircle2 size={20} /></div>
              <div className="stat-content">
                <div className="stat-label">Total Paid</div>
                <div className="stat-value" style={{ color: 'var(--success)' }}>₹{accProfitTotals.received.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
              </div>
            </div>
            <div className="stat-card" style={{ borderColor: 'rgba(239, 68, 68, 0.2)', background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(239, 68, 68, 0.03) 100%)' }}>
              <div className="stat-icon red"><AlertCircle size={20} /></div>
              <div className="stat-content">
                <div className="stat-label">Pending Balance</div>
                <div className="stat-value" style={{ color: 'var(--failed)' }}>₹{accProfitTotals.pending.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
              </div>
            </div>
          </div>

          {/* Recent Records */}
          <div className="panel">
            <div className="panel-header pricing-panel-header">
              <div className="panel-title">
                <div className="panel-icon purple"><Receipt size={18} /></div>
                <h3>Recent Recorded Entries</h3>
                <span className="panel-badge purple" style={{ marginLeft: 8 }}>{filteredReceivedTotals.length}</span>
              </div>
              <div className="panel-controls">
                <button className="btn-primary btn-sm" onClick={handleDownloadStatement}>
                  <Download size={14} /> Download Statement (PDF)
                </button>
              </div>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th style={{ textAlign: "right" }}>Amount</th>
                    <th style={{ textAlign: "center" }}>Mode</th>
                    <th>Date & Time</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReceivedTotals.length ? filteredReceivedTotals.map((p, i) => (
                    <tr key={p.id}>
                      <td>{i + 1}</td>
                      <td style={{ textAlign: "right", fontWeight: 700, color: "var(--success)" }}>
                        ₹{Number(p.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className={`status-badge ${p.payment_mode === "Cheque" ? "purple" : p.payment_mode === "UPI" ? "blue" : "green"}`}>
                          {p.payment_mode || "Cash"}
                        </span>
                      </td>
                      <td style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        {new Date(p.created_at).toLocaleString('en-GB')}
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={4}>
                      <div className="empty-state">
                        <Receipt size={32} />
                        <p>No payment records found for this period</p>
                      </div>
                    </td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Account info (Always visible bottom of Billing/Pay tabs) */}
      {(activeTab === "billing" || activeTab === "pay_pending") && profile && (
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
              <span className="account-value">{completed.length} stones</span>
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
                <XCircle size={20} />
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
                    onClick={() => setReportConfig(p => ({ ...p, format: "PDF" }))}
                  >
                    <FileText size={16} /> PDF
                  </button>
                  <button 
                    className={`btn ${reportConfig.format === "EXCEL" ? "btn-success" : "btn-outline"}`}
                    onClick={() => setReportConfig(p => ({ ...p, format: "EXCEL" }))}
                  >
                    <FileSpreadsheet size={16} /> Excel
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Report Type</label>
                <CustomSelect 
                  options={[
                    { label: "Full Report", value: "FULL" },
                    { label: "Carat Vise Full Report", value: "CARAT" },
                    ...availableRanges.map(r => ({ label: r.range, value: `RANGE:${r.id}` }))
                  ]}
                  value={reportConfig.type}
                  onChange={(val) => setReportConfig(p => ({ ...p, type: val }))}
                />
              </div>

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
                <XCircle size={20} />
              </button>
            </div>
            <div className="modal-body" style={{ padding: 0, overflow: 'hidden', height: '100%' }}>
              <iframe 
                src={previewUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }}
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
