import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bar, BarChart, CartesianGrid, Pie, PieChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis, Cell,
} from "recharts";
import {
  Users, Package, Clock, Loader2, CheckCircle2, XCircle,
  DollarSign, FolderOpen, Activity, FileText, Search,
  Download, Play, Upload, AlertCircle, RefreshCw,
  Gem, BarChart3, Receipt, Trash2, Filter, Eye, EyeOff,
  Calendar, IndianRupee, FileSpreadsheet, TrendingUp, Weight,
  User as UserIcon, UserPlus, Plus, Check, Database,
} from "lucide-react";
import api, { billingApi } from "../api";
import LogoutButton from "../components/LogoutButton";
import Shell from "../components/Shell";
import StatCard from "../components/StatCard";
import ThemeToggle from "../components/ThemeToggle";
import CustomSelect from "../components/CustomSelect";
import CustomDatePicker from "../components/CustomDatePicker";

const STATUS_CONFIG = {
  Uploaded: { cls: "uploaded", icon: <Upload size={14} /> },
  Queued: { cls: "queued", icon: <Clock size={14} /> },
  Processing: { cls: "processing", icon: <Loader2 size={14} /> },
  Completed: { cls: "completed", icon: <CheckCircle2 size={14} /> },
  Failed: { cls: "failed", icon: <XCircle size={14} /> },
};

const PIE_COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#3b82f6", "#a855f7", "#ec4899"];
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

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [jobSummary, setJobSummary] = useState(null);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [logs, setLogs] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [logFilter, setLogFilter] = useState({
    type: "DEFAULT",
    dates: [],
    startDate: "",
    endDate: ""
  });
  const [loadingLogs, setLoadingLogs] = useState(false);
  const [driveStatus, setDriveStatus] = useState([]);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("all");
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem("adminActiveTab") || "queue");
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const msgTimer = useRef(null);

  // Billing state
  const now = new Date();
  const [billingYear, setBillingYear] = useState(now.getFullYear());
  const [billingMonth, setBillingMonth] = useState(now.getMonth() + 1);
  const [billingOverview, setBillingOverview] = useState([]);
  const [allInvoices, setAllInvoices] = useState([]);
  const [adminStoneReport, setAdminStoneReport] = useState([]);
  const [stoneReportUserId, setStoneReportUserId] = useState("all");
  const [userAccount, setUserAccount] = useState(null);
  const [viewAccountUserId, setViewAccountUserId] = useState(null);
  const [billingSubTab, setBillingSubTab] = useState("overview"); // overview | invoices | stones | account
  const [generatingInvoice, setGeneratingInvoice] = useState(false);

  const [weightPrices, setWeightPrices] = useState([]);
  const [priceConfigUserId, setPriceConfigUserId] = useState("global");
  const [retroactiveDate, setRetroactiveDate] = useState("");
  const [editingPrices, setEditingPrices] = useState(null);
  const [loadingPrices, setLoadingPrices] = useState(false);
  const [savingPrices, setSavingPrices] = useState(false);

  // Add Client Modal state
  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    company_name: "",
    username: "",
    password: "",
    rate_per_carat: 0.0
  });
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  const [showRegPwd, setShowRegPwd] = useState(false);

  // Custom Report Modal state
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportConfig, setReportConfig] = useState({
    user_id: null,
    company_name: "",
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

  // Accounts Profit state
  const [profitUserId, setProfitUserId] = useState("");
  const [profitAmount, setProfitAmount] = useState("");
  const [profitPaymentMode, setProfitPaymentMode] = useState("Cash");
  const [recordedProfits, setRecordedProfits] = useState([]);
  const [submittingProfit, setSubmittingProfit] = useState(false);
  const [accProfitMonth, setAccProfitMonth] = useState("all");
  const [accProfitYear, setAccProfitYear] = useState("all");

  // Backup & Restore state
  const [backupFile, setBackupFile] = useState(null);
  const [backupLoading, setBackupLoading] = useState(false);
  const [importLoading, setImportLoading] = useState(false);
  const [showConfirmRestoreModal, setShowConfirmRestoreModal] = useState(false);
  const [importMode, setImportMode] = useState("merge"); // replace | merge | sync
  const [hasUndo, setHasUndo] = useState(false);

  // Custom Confirm Modal state for premium UI confirmations
  const [confirmModal, setConfirmModal] = useState({
    show: false,
    title: "",
    message: "",
    confirmLabel: "",
    onConfirm: null,
    isDanger: false
  });

  // Local Files Backup tab state
  const [localServiceAvail, setLocalServiceAvail] = useState(false);
  const [localBackupData, setLocalBackupData] = useState(null);
  const [syncingBackup, setSyncingBackup] = useState(false);
  
  const [localServerUrl, setLocalServerUrl] = useState("http://localhost:8000");
  const [localAdminUsername, setLocalAdminUsername] = useState("admin");
  const [localAdminPassword, setLocalAdminPassword] = useState("");
  const [savingLocalConfig, setSavingLocalConfig] = useState(false);
  
  const [backupCompanyFilter, setBackupCompanyFilter] = useState("all");
  const [backupDateFilter, setBackupDateFilter] = useState("");

  const loadLocalBackupStatus = useCallback(async () => {
    try {
      const healthRes = await fetch("http://localhost:3001/health");
      if (healthRes.ok) {
        setLocalServiceAvail(true);
        const statusRes = await fetch("http://localhost:3001/backup-status");
        if (statusRes.ok) {
          const data = await statusRes.json();
          setLocalBackupData(data);
          if (data.configured) {
            setLocalServerUrl(data.server_url || "http://localhost:8000");
            setLocalAdminUsername(data.username || "admin");
          }
        }
      } else {
        setLocalServiceAvail(false);
      }
    } catch {
      setLocalServiceAvail(false);
    }
  }, []);

  const handleTriggerLocalSync = async () => {
    setSyncingBackup(true);
    showMsg("Triggering instant local backup sync...");
    try {
      const res = await fetch("http://localhost:3001/sync-now", { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        showMsg(data.message || "✓ Sync completed!");
        await loadLocalBackupStatus();
      } else {
        showMsg("❌ Sync failed on local backup client");
      }
    } catch {
      showMsg("❌ Failed to communicate with local backup client");
    } finally {
      setSyncingBackup(false);
    }
  };

  const handleSaveLocalConfig = async (e) => {
    e.preventDefault();
    if (!localServerUrl || !localAdminUsername || !localAdminPassword) {
      showMsg("Please fill all fields!");
      return;
    }
    setSavingLocalConfig(true);
    showMsg("Connecting local service to server...");
    try {
      const res = await fetch("http://localhost:3001/configure-server", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          server_url: localServerUrl,
          username: localAdminUsername,
          password: localAdminPassword
        })
      });
      if (res.ok) {
        showMsg("✓ Connected successfully and started sync!");
        await loadLocalBackupStatus();
      } else {
        const err = await res.json();
        showMsg(`❌ Connection failed: ${err.detail || "Unknown error"}`);
      }
    } catch {
      showMsg("❌ Failed to communicate with local backup client on port 3001");
    } finally {
      setSavingLocalConfig(false);
    }
  };

  const getRateFromConfig = useCallback((weight, atTime = null) => {
    if (!weight) return 0;
    const w = Math.round(parseFloat(weight) * 100) / 100;
    if (isNaN(w)) return 0;
    
    let configs = [];
    if (atTime) {
      const t = new Date(atTime).getTime();
      configs = weightPrices.filter(r => {
        const from = new Date(r.valid_from).getTime();
        const to = r.valid_to ? new Date(r.valid_to).getTime() : Infinity;
        return t >= from && t < to;
      });
    } else {
      configs = weightPrices.filter(r => !r.valid_to);
    }

    if (!configs.length) configs = weightPrices.filter(r => !r.valid_to);

    for (const range of configs) {
      const label = range.weight.toUpperCase();
      if (label.includes("TO")) {
        const [min, max] = label.split("TO").map(s => parseFloat(s.replace(/[^0-9.]/g, "")));
        if (w >= min && w <= max) return parseFloat(range.price);
      } else if (label.includes("UP")) {
        const min = parseFloat(label.replace(/[^0-9.]/g, ""));
        if (w >= min) return parseFloat(range.price);
      }
    }
    return 0;
  }, [weightPrices]);

  const getCalculatedRate = useCallback((job) => {
    if (job.rate_per_carat !== null && job.rate_per_carat !== undefined) {
      return job.rate_per_carat;
    }
    return getRateFromConfig(job.weight, job.upload_time);
  }, [getRateFromConfig]);

  const filteredAccountData = useMemo(() => {
    const userStats = {};
    const nonAdmin = users.filter(u => !u.is_admin);
    
    nonAdmin.forEach(u => {
      userStats[u.id] = { user_id: u.id, company: u.company_name, revenue: 0 };
    });

    jobs.forEach(j => {
      if (j.status !== "Completed") return;
      const date = new Date(j.upload_time);
      const m = date.getMonth() + 1;
      const y = date.getFullYear();

      const monthMatch = accProfitMonth === "all" || m === Number(accProfitMonth);
      const yearMatch = accProfitYear === "all" || y === Number(accProfitYear);

      if (monthMatch && yearMatch) {
        // Find user ID by company name (matching backend logic)
        const user = nonAdmin.find(u => u.company_name === j.user);
        if (user && userStats[user.id]) {
          const rate = getCalculatedRate(j);
          userStats[user.id].revenue += (j.weight || 0) * rate;
        }
      }
    });

    return Object.values(userStats).sort((a, b) => b.revenue - a.revenue);
  }, [jobs, users, accProfitMonth, accProfitYear, getCalculatedRate]);

  const filteredReceivedTotals = useMemo(() => {
    const totals = {};
    recordedProfits.forEach(p => {
      const date = new Date(p.created_at);
      const m = date.getMonth() + 1;
      const y = date.getFullYear();

      const monthMatch = accProfitMonth === "all" || m === Number(accProfitMonth);
      const yearMatch = accProfitYear === "all" || y === Number(accProfitYear);

      if (monthMatch && yearMatch) {
        totals[p.user_id] = (totals[p.user_id] || 0) + p.amount;
      }
    });
    return totals;
  }, [recordedProfits, accProfitMonth, accProfitYear]);

  const accProfitTotals = useMemo(() => {
    const revenue = filteredAccountData.reduce((s, i) => s + i.revenue, 0);
    const received = Object.values(filteredReceivedTotals).reduce((s, v) => s + v, 0);
    return { revenue, received, pending: revenue - received };
  }, [filteredAccountData, filteredReceivedTotals]);

  const showMsg = (text) => {
    setMessage(text);
    clearTimeout(msgTimer.current);
    msgTimer.current = setTimeout(() => setMessage(""), 5000);
  };

  const load = useCallback(async () => {
    const [jobsRes, usersRes, statsRes, analyticsRes, jobSummaryRes, driveStatusRes] = await Promise.all([
      api.get("/admin/jobs"),
      api.get("/users/list"),
      api.get("/admin/dashboard"),
      api.get("/analytics/summary"),
      api.get("/admin/jobs/summary"),
      api.get("/admin/drive-sync-status"),
    ]);
    setJobs(jobsRes.data);
    setUsers(usersRes.data);
    setStats(statsRes.data);
    setAnalytics(analyticsRes.data);
    setJobSummary(jobSummaryRes.data);
    setDriveStatus(driveStatusRes.data);
  }, []);

  const loadLogs = useCallback(async () => {
    setLoadingLogs(true);
    try {
      const params = { filter_type: logFilter.type };
      if (logFilter.type === "DAYS" && logFilter.dates.length > 0) {
        params.dates = logFilter.dates.join(",");
      } else if (logFilter.type === "RANGE" && logFilter.startDate && logFilter.endDate) {
        params.start_date = logFilter.startDate;
        params.end_date = logFilter.endDate;
      }
      const res = await api.get("/admin/activity-logs", { params });
      setLogs(res.data);
    } catch (e) {
      console.error("Error loading logs", e);
    } finally {
      setLoadingLogs(false);
    }
  }, [logFilter]);

  useEffect(() => {
    if (activeTab === "logs") {
      loadLogs();
    }
  }, [activeTab, loadLogs]);

  const loadPriceConfig = useCallback(async (uid = priceConfigUserId) => {
    setLoadingPrices(true);
    try {
      const params = { include_history: true };
      if (uid !== "global") params.user_id = uid;
      const res = await api.get("/admin/price-config", { params });
      setWeightPrices(res.data);
    } catch { showMsg("Failed to load price configuration"); }
    finally { setLoadingPrices(false); }
  }, [priceConfigUserId]);

  useEffect(() => {
    if (activeTab === "pricing") {
      loadPriceConfig();
    }
  }, [activeTab, priceConfigUserId, loadPriceConfig]);

  const loadBillingData = useCallback(async () => {
    try {
      const [overviewRes, invoicesRes] = await Promise.all([
        billingApi.getAdminOverview(billingYear, billingMonth),
        billingApi.getAllInvoices(),
      ]);
      setBillingOverview(overviewRes.data);
      setAllInvoices(invoicesRes.data);
    } catch { showMsg("Failed to load billing data"); }
  }, [billingYear, billingMonth]);

  const loadAdminStoneReport = useCallback(async () => {
    try {
      const userId = stoneReportUserId === "all" ? undefined : Number(stoneReportUserId);
      const res = await billingApi.getAdminStoneReport(userId, billingYear, billingMonth);
      setAdminStoneReport(res.data);
    } catch { setAdminStoneReport([]); }
  }, [stoneReportUserId, billingYear, billingMonth]);

  const loadUserAccount = useCallback(async (uid) => {
    try {
      const res = await billingApi.getUserAccount(uid, billingYear, billingMonth);
      setUserAccount(res.data);
      setViewAccountUserId(uid);
      setBillingSubTab("account");
    } catch { showMsg("Failed to load user account"); }
  }, [billingYear, billingMonth]);

  const loadProfits = useCallback(async () => {
    try {
      const res = await api.get("/admin/profits");
      setRecordedProfits(res.data);
    } catch { console.error("Failed to load profits"); }
  }, []);

  const handleRecordProfit = async () => {
    if (!profitUserId || !profitAmount) {
      showMsg("Please select a user and enter amount");
      return;
    }
    setSubmittingProfit(true);
    try {
      await api.post("/admin/record-profit", {
        user_id: Number(profitUserId),
        amount: parseFloat(profitAmount),
        payment_mode: profitPaymentMode,
        remarks: "Manual entry"
      });
      showMsg("Profit recorded successfully");
      setProfitAmount("");
      loadProfits();
    } catch {
      showMsg("Failed to record profit");
    } finally {
      setSubmittingProfit(false);
    }
  };

  const handleDownloadAccountStatement = async (uid, company) => {
    try {
      showMsg("Generating Statement PDF...");
      const params = {};
      if (accProfitMonth !== "all") params.month = accProfitMonth;
      if (accProfitYear !== "all") params.year = accProfitYear;
      
      const res = await api.get(`/admin/user-account-pdf/${uid}`, { params, responseType: "blob" });
      saveBlob(res.data, `statement_${company}_${accProfitMonth}_${accProfitYear}.pdf`);
      showMsg("✓ Statement downloaded");
    } catch { showMsg("Failed to download statement"); }
  };

  const checkUndoStatus = useCallback(async () => {
    try {
      const res = await api.get("/admin/undo-status");
      setHasUndo(res.data.has_undo);
    } catch (e) {
      console.error("Failed to check undo status", e);
    }
  }, []);

  useEffect(() => {
    if (activeTab === "backup_restore") {
      checkUndoStatus();
    }
  }, [activeTab, checkUndoStatus]);

  const openReportModal = async (uid, company, month) => {
    setReportConfig(prev => ({
      ...prev,
      user_id: uid,
      company_name: company,
      month: month,
      filter: "MONTH"
    }));
    setShowReportModal(true);
    try {
      const [y, m] = month.split("-").map(Number);
      const [rangesRes, dateRes] = await Promise.all([
        api.get(`/billing/weight-ranges/${uid}?year=${y}&month=${m}`),
        api.get(`/billing/user-earliest-date/${uid}`)
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
        user_id: reportConfig.user_id,
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

      const res = await api.post("/billing/admin/report", payload, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      const ext = reportConfig.format === "PDF" ? "pdf" : "xlsx";
      link.setAttribute("download", `report_${reportConfig.company_name}_${reportConfig.month || "custom"}.${ext}`);
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

  // Re-load account details if they change the month/year while viewing
  useEffect(() => {
    if (billingSubTab === "account" && viewAccountUserId) {
      loadUserAccount(viewAccountUserId);
    }
  }, [billingYear, billingMonth, billingSubTab, viewAccountUserId]);

  const loadPending = useCallback(async () => {
    try {
      const res = await api.get("/admin/pending-requests");
      setPendingRequests(res.data);
    } catch { showMsg("Failed to load pending requests"); }
  }, []);

  // Bulk Weight Update State
  const [bulkUserId, setBulkUserId] = useState("");
  const [bulkFile, setBulkFile] = useState(null);
  const [bulkLoading, setBulkLoading] = useState(false);
  const [showMappingModal, setShowMappingModal] = useState(false);
  const [mapping, setMapping] = useState({
    tableField1: "Stone ID",
    tableField2: "Weight",
    excelCol1: "Column 1",
    excelCol2: "Column 2"
  });

  useEffect(() => {
    load().catch(() => showMsg("Failed to load admin dashboard"));
    loadPending();
    loadPriceConfig("global"); // Always load global prices for revenue calculations
    loadProfits(); // Load profits for the account tab
    loadLocalBackupStatus(); // Check local file service and status
    
    const iv = setInterval(() => {
      load().catch(() => { });
      loadPending().catch(() => { });
      loadProfits().catch(() => { });
      loadLocalBackupStatus().catch(() => { });
    }, 10000); // 10s auto-refresh
    return () => { clearInterval(iv); clearTimeout(msgTimer.current); };
  }, [load, loadPending, loadPriceConfig, loadProfits, loadLocalBackupStatus]);

  useEffect(() => {
    localStorage.setItem("adminActiveTab", activeTab);
    if (activeTab === "accounts_profit") {
      loadProfits();
      loadPriceConfig("global");
    } else if (activeTab === "files_backup") {
      loadLocalBackupStatus();
    }
  }, [activeTab, loadProfits, loadPriceConfig, loadLocalBackupStatus]);

  const handleBulkAction = async (action) => {
    if (selectedJobs.length === 0) return;
    
    setConfirmModal({
      show: true,
      title: "Confirm Bulk Action",
      message: `Are you sure you want to apply "${action}" to ${selectedJobs.length} selected items?`,
      confirmLabel: action,
      isDanger: action === "Delete",
      onConfirm: async () => {
        try {
          setLoading(true);
          if (action === "Delete") {
            for (const id of selectedJobs) await api.delete(`/jobs/${id}`);
            setSelectedJobs([]);
            load();
            showMsg(`Bulk Delete successful`);
          } else if (action === "Process") {
            const queueJobs = jobs.filter(j => selectedJobs.includes(j.id) && (j.status === "Uploaded" || j.status === "Queued"));
            let successCount = 0;
            let failedCount = 0;
            let skippedCount = selectedJobs.length - queueJobs.length;

            for (const j of queueJobs) {
              const fd = new FormData(); 
              fd.append("job_id", j.id);
              try {
                await api.post("/admin/process", fd);
                successCount++;
              } catch (err) {
                failedCount++;
              }
            }
            setSelectedJobs([]);
            load();
            showMsg(`Bulk Process: ${successCount} successful, ${skippedCount} skipped, ${failedCount} failed`);
          }
        } catch (err) { 
          showMsg("Bulk action failed"); 
        } finally { 
          setLoading(false); 
        }
      }
    });
  };

  const handleBulkCompleteUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    
    // Filter selected jobs to find only those in "Processing" status
    const processingJobs = jobs.filter(j => selectedJobs.includes(j.id) && j.status === "Processing");
    if (!processingJobs.length) {
      showMsg("No 'Processing' jobs are selected");
      e.target.value = "";
      return;
    }
    
    setLoading(true);
    let successCount = 0;
    let skippedCount = 0;
    let failedCount = 0;
    
    try {
      // Loop through all uploaded result files
      for (const file of files) {
        const filename = file.name;
        // Extract stone ID stem (e.g. "STONE123.adv" -> "stone123")
        const dotIdx = filename.lastIndexOf('.');
        const stem = dotIdx !== -1 ? filename.substring(0, dotIdx).trim().toLowerCase() : filename.trim().toLowerCase();
        
        // Find if there is a selected job in "Processing" status matching this stone ID stem
        const matchingJob = processingJobs.find(j => j.stone_id.trim().toLowerCase() === stem);
        
        if (matchingJob) {
          const fd = new FormData();
          fd.append("job_id", matchingJob.id);
          fd.append("file", file);
          try {
            await api.post("/admin/upload-result", fd);
            successCount++;
          } catch (err) {
            failedCount++;
          }
        } else {
          skippedCount++;
        }
      }
      
      showMsg(`Bulk Complete: ${successCount} successful, ${skippedCount} skipped, ${failedCount} failed`);
      setSelectedJobs([]);
      load();
    } catch (err) {
      showMsg("Bulk complete failed");
    } finally {
      setLoading(false);
      e.target.value = "";
    }
  };

  const toggleSelectAll = () => {
    if (selectedJobs.length > 0 && selectedJobs.length === filteredJobs.length) setSelectedJobs([]);
    else setSelectedJobs(filteredJobs.map(j => j.id));
  };

  const handleApprove = async (uid) => {
    try {
      await api.post(`/admin/approve-request/${uid}`);
      showMsg("User approved");
      loadPending();
      load();
    } catch { showMsg("Approval failed"); }
  };

  const handleReject = async (uid) => {
    try {
      await api.post(`/admin/reject-request/${uid}`);
      showMsg("User rejected");
      loadPending();
      load();
    } catch { showMsg("Rejection failed"); }
  };

  const handleDeleteUser = async (uid, username) => {
    setConfirmModal({
      show: true,
      title: "Delete User Account",
      message: `Are you sure you want to permanently delete user "${username}" and ALL their associated data, jobs, invoices, and folders? This cannot be undone.`,
      confirmLabel: "Delete User",
      isDanger: true,
      onConfirm: async () => {
        try {
          await api.post(`/admin/delete-user/${uid}`);
          showMsg(`User ${username} deleted`);
          load();
        } catch { showMsg("Deletion failed"); }
      }
    });
  };

  const handleRegisterClient = async (e) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess("");
    
    const uname = registerForm.username.trim();
    if (!uname) {
      setRegisterError("Username is required");
      return;
    }
    if (registerForm.password.length < 4) {
      setRegisterError("Password must be at least 4 characters long");
      return;
    }

    setRegisterLoading(true);
    try {
      await api.post("/auth/register", {
        company_name: registerForm.company_name.trim(),
        username: uname,
        password: registerForm.password,
        rate_per_carat: Number(registerForm.rate_per_carat) || 0.0
      });
      setRegisterSuccess("✓ Client account registered successfully!");
      setRegisterForm({
        company_name: "",
        username: "",
        password: "",
        rate_per_carat: 0.0
      });
      load(); // Reload users & dashboard stats
      setTimeout(() => {
        setShowAddClientModal(false);
        setRegisterSuccess("");
      }, 1500);
    } catch (err) {
      const detail = err.response?.data?.detail;
      setRegisterError(typeof detail === "string" ? detail : "Failed to register client");
    } finally {
      setRegisterLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "billing") loadBillingData();
  }, [activeTab, loadBillingData]);

  useEffect(() => {
    if (activeTab === "billing" && billingSubTab === "stones") loadAdminStoneReport();
    if (activeTab === "pricing") loadPriceConfig();
  }, [activeTab, billingSubTab, loadAdminStoneReport, loadPriceConfig]);

  const updatePriority = async (jobId, priority) => {
    try {
      await api.post("/admin/priority", { job_id: jobId, priority: Number(priority) });
      load();
    } catch (err) { showMsg(err.response?.data?.detail || "Priority update failed"); }
  };

  const updateWeight = async (jobId, weight) => {
    try {
      await api.post("/admin/update-weight", { job_id: jobId, weight: Number(weight) });
      load();
    } catch (err) { showMsg(err.response?.data?.detail || "Weight update failed"); }
  };

  const startProcessing = async (jobId) => {
    const fd = new FormData();
    fd.append("job_id", jobId);
    try {
      await api.post("/admin/process", fd);
      showMsg("Processing started");
      load();
    } catch (err) { showMsg(err.response?.data?.detail || "Start failed"); }
  };

  const uploadResult = async (jobId, file) => {
    const fd = new FormData();
    fd.append("job_id", jobId);
    fd.append("file", file);
    try {
      await api.post("/admin/upload-result", fd);
      showMsg("Result uploaded");
      load();
    } catch (err) { showMsg(err.response?.data?.detail || "Upload result failed"); }
  };

  const handleDeleteJob = async (jobId) => {
    setConfirmModal({
      show: true,
      title: "Delete Stone Job",
      message: "Are you sure you want to permanently delete this job record and all its files from the system?",
      confirmLabel: "Delete Job",
      isDanger: true,
      onConfirm: async () => {
        try {
          await api.delete(`/jobs/${jobId}`);
          showMsg("Job deleted successfully");
          load();
        } catch (err) {
          showMsg(err.response?.data?.detail || "Failed to delete job");
        }
      }
    });
  };

  const saveBlob = (data, filename) => {
    const url = URL.createObjectURL(data);
    const a = Object.assign(document.createElement("a"), { href: url, download: filename });
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const downloadFile = async (url, fallbackName) => {
    try {
      const res = await api.get(url, { responseType: "blob" });
      saveBlob(res.data, fallbackName);
    } catch { showMsg("Download failed"); }
  };

  const handleGenerateInvoices = async (uid = null) => {
    setGeneratingInvoice(true);
    try {
      await billingApi.generateInvoices(billingYear, billingMonth, uid);
      showMsg("Invoices Generated Successfully");
      
      // Refresh ALL billing-related data immediately
      await loadBillingData();
      await loadAdminStoneReport();
      
      // If we are currently viewing a specific user account, refresh that too
      if (viewAccountUserId) {
        await loadUserAccount(viewAccountUserId);
      }
      
      // Also refresh main dashboard stats just in case
      await load();
    } catch { 
      showMsg("Failed to generate invoices"); 
    } finally { 
      setGeneratingInvoice(false); 
    }
  };

  const downloadAdminInvoice = async (invoiceId, month, company) => {
    try {
      showMsg("Downloading PDF...");
      const res = await billingApi.adminDownloadInvoice(invoiceId);
      saveBlob(res.data, `invoice_${company}_${month}.pdf`);
      showMsg("✓ Invoice PDF downloaded");
    } catch { showMsg("Invoice download failed"); }
  };

  const downloadAdminInvoiceExcel = async (invoiceId, month, company) => {
    try {
      showMsg("Downloading Excel...");
      const res = await billingApi.adminDownloadInvoiceExcel(invoiceId);
      saveBlob(res.data, `invoice_${company}_${month}.xlsx`);
      showMsg("✓ Invoice Excel downloaded");
    } catch { showMsg("Excel download failed"); }
  };

  const handleBulkUpdate = async (e) => {
    e.preventDefault();
    if (!bulkUserId || !bulkFile) {
      showMsg("Please select a user and a file");
      return;
    }
    setShowMappingModal(true);
  };

  const confirmBulkUpdate = async () => {
    setShowMappingModal(false);
    setBulkLoading(true);
    const formData = new FormData();
    formData.append("user_id", bulkUserId);
    formData.append("file", bulkFile);
    
    // Determine which excel column belongs to which table field
    let sCol = "Stone ID";
    let wCol = "Weight";

    if (mapping.tableField1 === "Stone ID") sCol = mapping.excelCol1;
    else if (mapping.tableField1 === "Weight") wCol = mapping.excelCol1;

    if (mapping.tableField2 === "Stone ID") sCol = mapping.excelCol2;
    else if (mapping.tableField2 === "Weight") wCol = mapping.excelCol2;

    formData.append("stone_id_col", sCol);
    formData.append("weight_col", wCol);

    try {
      const res = await api.post("/admin/bulk-update-weights", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      showMsg(`Updated ${res.data.updated} weights. ${res.data.skipped} skipped.`);
      if (res.data.not_found.length > 0) {
        console.warn("Stones not found:", res.data.not_found);
      }
      setBulkFile(null);
      // Reset input
      const fileInput = document.getElementById("bulk-file-input");
      if (fileInput) fileInput.value = "";
      load(); // Refresh queue
    } catch (err) {
      showMsg(err.response?.data?.detail || "Bulk update failed");
    } finally {
      setBulkLoading(false);
    }
  };

  const handleDownloadBackup = async () => {
    setBackupLoading(true);
    showMsg("Preparing database backup...");
    try {
      const res = await api.get("/admin/backup", { responseType: "blob" });
      
      let filename = `diamond_backup_${new Date().toISOString().slice(0, 10)}.json`;
      const disposition = res.headers["content-disposition"];
      if (disposition && disposition.includes("filename=")) {
        filename = disposition.split("filename=")[1].replace(/["']/g, "");
      }
      
      saveBlob(res.data, filename);
      showMsg("✓ Database backup downloaded successfully");
    } catch (err) {
      console.error(err);
      showMsg("Failed to download database backup");
    } finally {
      setBackupLoading(false);
    }
  };

  const handleImportBackup = async () => {
    if (!backupFile) {
      showMsg("Please select a valid backup JSON file first");
      return;
    }
    
    setImportLoading(true);
    showMsg(`Importing backup in ${importMode.toUpperCase()} mode...`);
    const formData = new FormData();
    formData.append("file", backupFile);
    formData.append("mode", importMode); // Send the selected import mode parameter!
    
    try {
      const res = await api.post("/admin/import", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      showMsg(`✓ ${res.data.message || "Database restored successfully!"}`);
      setBackupFile(null);
      
      const fileInput = document.getElementById("backup-file-input");
      if (fileInput) fileInput.value = "";
      
      // Update undo availability immediately
      await checkUndoStatus();
      
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      const detail = err.response?.data?.detail || "Restore failed. Please make sure the JSON file is correct.";
      showMsg(`✗ Error: ${detail}`);
    } finally {
      setImportLoading(false);
      setShowConfirmRestoreModal(false);
    }
  };

  const handleUndoImport = async () => {
    setConfirmModal({
      show: true,
      title: "Undo Database Import",
      message: "WARNING: Are you sure you want to UNDO your last import? This will revert the database exactly to its state before the last import, deleting any records added since then!",
      confirmLabel: "Revert Import",
      isDanger: true,
      onConfirm: async () => {
        setImportLoading(true);
        showMsg("Reverting last import...");
        try {
          const res = await api.post("/admin/undo-import");
          showMsg(`✓ ${res.data.message || "Reverted successfully!"}`);
          setHasUndo(false);
          
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } catch (err) {
          const detail = err.response?.data?.detail || "Undo failed.";
          showMsg(`✗ Error: ${detail}`);
        } finally {
          setImportLoading(false);
        }
      }
    });
  };

  const uniqueUsers = useMemo(() => [...new Set(jobs.map(j => j.user))].sort(), [jobs]);
  const backupClients = useMemo(() => {
    const uploadJobs = jobs.filter(j => j.status !== "Failed" && j.upload_filename);
    return [...new Set(uploadJobs.map(j => j.user).filter(Boolean))].sort();
  }, [jobs]);
  const nonAdminUsers = useMemo(() => users.filter(u => !u.is_admin), [users]);

  const filteredJobs = useMemo(() => {
    let result = jobs;

    // 1. User Filter & Date Restriction
    if (userFilter === "all") {
      // Show jobs from today and yesterday (starting from 00:00 of yesterday)
      const now = new Date();
      const cutoff = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
      cutoff.setHours(0, 0, 0, 0);
      
      result = result.filter(j => {
        if (!j.upload_time) return false;
        const jobDate = new Date(j.upload_time);
        return jobDate >= cutoff;
      });
    } else {
      // If specific user selected, show all data for that user
      result = result.filter(j => j.user === userFilter);
    }

    // 2. Status Filter
    if (statusFilter !== "all") {
      result = result.filter(j => j.status === statusFilter);
    }

    // 3. Search Filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(j =>
        j.stone_id?.toLowerCase().includes(term) ||
        j.user?.toLowerCase().includes(term) ||
        j.upload_filename?.toLowerCase().includes(term)
      );
    }

    return result;
  }, [jobs, statusFilter, userFilter, searchTerm]);

  const filteredBackupJobs = useMemo(() => {
    let result = jobs.filter(j => j.status !== "Failed" && j.upload_filename);
    
    // 1. Company Filter
    if (backupCompanyFilter !== "all") {
      result = result.filter(j => j.user === backupCompanyFilter);
    }
    
    // 2. Date Filter
    if (backupDateFilter) {
      const selected = new Date(backupDateFilter).toDateString();
      result = result.filter(j => {
        if (!j.upload_time) return false;
        return new Date(j.upload_time).toDateString() === selected;
      });
    }
    
    return result;
  }, [jobs, backupCompanyFilter, backupDateFilter]);

  // Billing totals
  const billingTotals = useMemo(() => {
    const stones = billingOverview.reduce((s, b) => s + b.total_stones, 0);
    const weight = billingOverview.reduce((s, b) => s + b.total_weight, 0);
    const amount = billingOverview.reduce((s, b) => s + b.total_amount, 0);
    return { stones, weight, amount, users: billingOverview.length };
  }, [billingOverview]);

  const stoneReportTotals = useMemo(() => {
    const weight = adminStoneReport.reduce((s, r) => s + Number(r.weight), 0);
    const amount = adminStoneReport.reduce((s, r) => s + Number(r.amount), 0);
    return { weight, amount, count: adminStoneReport.length };
  }, [adminStoneReport]);

  const StatusBadge = ({ status }) => {
    const cfg = STATUS_CONFIG[status] || { cls: "uploaded", icon: null };
    return <span className={`status-badge ${cfg.cls}`}>{cfg.icon} {status}</span>;
  };

  const yearOptions = [];
  for (let y = now.getFullYear(); y >= now.getFullYear() - 3; y--) yearOptions.push(y);

  const tabs = [
    { key: "queue", label: "Job Queue", icon: <Package size={16} /> },
    { key: "users", label: "Users", icon: <Users size={16} /> },
    { key: "analytics", label: "Analytics", icon: <BarChart3 size={16} /> },
    { key: "billing", label: "Billing & Accounts", icon: <Receipt size={16} /> },
    { key: "pricing", label: "Weight & Price", icon: <DollarSign size={16} /> },
    { key: "accounts_profit", label: "Accounts Profit", icon: <TrendingUp size={16} /> },
    { key: "backup_restore", label: "Backup & Restore", icon: <Database size={16} /> },
    { key: "files_backup", label: "Files Backup", icon: <FolderOpen size={16} /> },
    { key: "logs", label: "System Logs", icon: <Activity size={16} /> },
  ];


  const handlePriceUpdate = () => {
    setEditingPrices([...weightPrices.filter(r => !r.valid_to)]);
  };

  const handleSavePrices = async () => {
    if (savingPrices) return;
    setSavingPrices(true);
    try {
      const payload = {
        items: editingPrices,
        user_id: priceConfigUserId === "global" ? null : Number(priceConfigUserId)
      };
      await api.post("/admin/price-config", payload);
      setWeightPrices([...editingPrices]);
      setEditingPrices(null);
      showMsg("Pricing configuration saved successfully");
      load(); // Refresh jobs to ensure displayed rates stay locked
    } catch {
      showMsg("Failed to save pricing configuration");
    } finally {
      setSavingPrices(false);
    }
  };

  const handleApplyRetroactivePricing = async (targetUserId) => {
    if (!retroactiveDate) {
      showMsg("Please select a date first");
      return;
    }
    const uid = targetUserId || priceConfigUserId;
    if (uid === "global" || !uid) {
      showMsg("Please select a specific client for retroactive update");
      return;
    }

    try {
      const res = await api.post("/admin/apply-pricing-retroactive", {
        user_id: Number(uid),
        from_date: new Date(retroactiveDate).toISOString()
      });
      showMsg(res.data.message);
      load(); // Refresh stats/jobs
    } catch (err) {
      const detail = err.response?.data?.detail || "Failed to apply retroactive pricing";
      showMsg(detail);
    }
  };

  const handleAddPriceRow = () => {
    setEditingPrices([...editingPrices, { weight: "", price: "" }]);
  };

  const handleDeletePriceRow = (index) => {
    setEditingPrices(editingPrices.filter((_, i) => i !== index));
  };

  const handlePriceChange = (index, field, value) => {
    const next = [...editingPrices];
    next[index][field] = value;
    setEditingPrices(next);
  };

  return (
    <Shell title="Admin Panel" subtitle="Diamond Processing Management" actions={
      <>
        <span className="refresh-dot" title="Auto-refresh active" />
        <button onClick={() => {
          setRegisterForm({
            company_name: "",
            username: "",
            password: "",
            rate_per_carat: 0.0
          });
          setRegisterError("");
          setRegisterSuccess("");
          setShowAddClientModal(true);
        }} className="btn-secondary" style={{ marginRight: "10px", display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UserPlus size={16} /> Add Client
        </button>
        <ThemeToggle />
        <LogoutButton />
      </>
    }>
      <div className="admin-main-content">
        {/* ── Stats ── */}
        {stats && (
          <section className="stats-grid">
            <StatCard label="Approved Users" value={stats.total_users}
              icon={<Users size={20} />} color="blue" />
            <StatCard label="Total Jobs" value={jobSummary?.total ?? stats.total_uploaded_jobs}
              icon={<Package size={20} />} color="purple" />
            <StatCard label="Pending" value={jobSummary?.pending ?? 0}
              icon={<Clock size={20} />} color="orange" />
            <StatCard label="Processing" value={stats.processing_jobs}
              icon={<Loader2 size={20} />} color="blue" />
            <StatCard label="Completed" value={jobSummary?.processed ?? stats.completed_jobs}
              icon={<CheckCircle2 size={20} />} color="green" />
            <StatCard label="Failed" value={jobSummary?.failed ?? 0}
              icon={<XCircle size={20} />} color="red" />
            <StatCard label="Revenue" value={`₹${Number(stats.monthly_revenue).toFixed(2)}`}
              icon={<DollarSign size={20} />} color="green" />
          </section>
        )}

        {/* ── Folder Monitor ── */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <div className="panel-icon orange"><FolderOpen size={18} /></div>
              <h3>Auto Folder Monitor</h3>
            </div>
            <span className="panel-badge orange">Live</span>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Username</th>
                  <th>Folder Key</th>
                  <th>Stone Files</th>
                  <th>Done Files</th>
                  <th>Path</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {driveStatus.length ? driveStatus.map((row, idx) => (
                  <tr key={`${row.user_id}-${row.folder_key}-${idx}`}>
                    <td 
                      style={{ cursor: "pointer" }} 
                      onClick={() => { setActiveTab("billing"); loadUserAccount(row.user_id); }}
                    >
                      <strong className="text-primary-hover">{row.company_name}</strong>
                    </td>
                    <td 
                      style={{ cursor: "pointer" }} 
                      onClick={() => { setActiveTab("billing"); loadUserAccount(row.user_id); }}
                      className="text-primary-hover"
                    >
                      {row.username}
                    </td>
                    <td><code style={{ background: "var(--border-light)", color: "var(--text)", padding: "2px 6px", borderRadius: 4, fontSize: ".82rem" }}>{row.folder_key}</code></td>
                    <td>
                      <span className={`status-badge ${row.stone_files > 0 ? "uploaded" : "completed"}`}>
                        {row.stone_files}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${row.done_files > 0 ? "processing" : "completed"}`}>
                        {row.done_files}
                      </span>
                    </td>
                    <td style={{ fontSize: ".82rem", color: "var(--text-secondary)" }}>{row.path}</td>
                    <td style={{ textAlign: "right" }}>
                      <button
                        onClick={() => handleDeleteUser(row.user_id, row.username)}
                        className="btn-icon red"
                        title="Delete User and Data"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={7}>
                    <div className="empty-state"><FolderOpen size={28} /><p>No folder data</p></div>
                  </td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="tab-bar">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`tab-btn ${activeTab === t.key ? "active" : ""}`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* ── Tab: Job Queue ── */}
        {activeTab === "queue" && (
          <div className="panel" style={{ marginBottom: 0 }}>
            <div className="panel-header">
              <div className="panel-title">
                <div className="panel-icon blue"><Package size={18} /></div>
                <h3>Job Queue</h3>
              </div>
              <div className="btn-group">
                {selectedJobs.length > 0 && (
                  <>
                    <span className="muted" style={{ marginRight: 10 }}>{selectedJobs.length} selected</span>
                    <button className="btn-success btn-sm" onClick={() => handleBulkAction("Process")}>
                      <Play size={14} /> Bulk Process
                    </button>
                    <label className="btn-primary btn-sm" style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px", margin: 0, padding: "6px 12px", borderRadius: "6px", fontSize: "0.82rem" }} title="Bulk Complete">
                      <Upload size={14} /> Bulk Complete
                      <input 
                        type="file" 
                        multiple 
                        style={{ display: "none" }} 
                        onChange={handleBulkCompleteUpload} 
                      />
                    </label>
                    <button className="btn-danger btn-sm" onClick={() => handleBulkAction("Delete")}>
                      <Trash2 size={14} /> Bulk Delete
                    </button>
                  </>
                )}
                <span className="panel-badge blue">{filteredJobs.length} / {jobs.length}</span>
              </div>
            </div>

            {/* Filters */}
            <div style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ position: "relative" }}>
                <Search size={16} style={{ position: "absolute", left: 10, top: 10, color: "var(--text-light)" }} />
                <input 
                  className="search-input"
                  placeholder="Search stone, user, file..." value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  style={{ paddingLeft: 34, marginBottom: 0 }} />
              </div>
              <CustomSelect
                options={[
                  { label: "All Status", value: "all" },
                  { label: "Uploaded", value: "Uploaded" },
                  { label: "Queued", value: "Queued" },
                  { label: "Processing", value: "Processing" },
                  { label: "Completed", value: "Completed" },
                  { label: "Failed", value: "Failed" },
                ]}
                value={statusFilter}
                onChange={setStatusFilter}
                style={{ flex: "0 0 150px" }}
              />
              <CustomSelect
                options={[
                  { label: "All Users", value: "all" },
                  ...uniqueUsers.map(u => ({ label: u, value: u }))
                ]}
                value={userFilter}
                onChange={setUserFilter}
                style={{ flex: "0 0 150px" }}
              />
            </div>
 
            {/* Premium Management Controls Panel */}
            <div style={{ 
              background: "var(--primary-bg)", 
              padding: "20px 24px", 
              borderRadius: "var(--radius)", 
              border: "1px solid var(--primary-light)",
              display: "flex", 
              flexDirection: "column",
              gap: 16,
              marginTop: 20,
              marginBottom: 24,
              boxShadow: "var(--shadow-sm)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--primary)", marginBottom: 4 }}>
                <TrendingUp size={20} />
                <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700 }}>Management Controls</h4>
              </div>

              <div className="management-controls-grid">
                {/* 1. Bulk Weight Update */}
                <div className="control-column bulk-update">
                  <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    1. Bulk Weight Update
                  </label>
                  <div className="responsive-stack">
                    <CustomSelect 
                      options={[
                        { label: "Choose Client...", value: "" },
                        ...nonAdminUsers.map(u => ({ label: `${u.company_name} (${u.username})`, value: u.id }))
                      ]}
                      value={bulkUserId} 
                      onChange={setBulkUserId}
                      style={{ flex: "1", minWidth: "220px" }}
                    />
                    
                    <div style={{ position: "relative", flex: "1" }}>
                      <input 
                        id="bulk-file-input"
                        type="file" 
                        accept=".csv,.xlsx,.xls" 
                        onChange={e => setBulkFile(e.target.files[0])}
                        style={{ display: "none" }}
                      />
                      <div style={{ display: 'flex', gap: '4px', width: '100%' }}>
                        <label 
                          htmlFor="bulk-file-input"
                          className="btn-ghost"
                          style={{ 
                            flex: 1,
                            justifyContent: "center", 
                            height: "38px", 
                            borderStyle: "dashed",
                            borderWidth: "2px",
                            borderColor: bulkFile ? "var(--success)" : "var(--primary-light)",
                            color: bulkFile ? "var(--success)" : "var(--primary)",
                            background: bulkFile ? "var(--success-bg)" : "var(--bg-card)",
                            padding: "0 14px",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            borderRadius: "var(--radius-sm)"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--primary)";
                            e.currentTarget.style.background = "var(--primary-bg)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = bulkFile ? "var(--success)" : "var(--primary-light)";
                            e.currentTarget.style.background = bulkFile ? "var(--success-bg)" : "var(--bg-card)";
                          }}
                        >
                          {bulkFile ? <CheckCircle2 size={16} /> : <FileSpreadsheet size={16} />}
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {bulkFile ? bulkFile.name : "Select CSV/Excel"}
                          </span>
                        </label>
                        {bulkFile && (
                          <button 
                            className="btn-icon red" 
                            style={{ height: '38px', width: '38px', borderRadius: 'var(--radius-sm)' }}
                            onClick={() => { setBulkFile(null); document.getElementById('bulk-file-input').value = ''; }}
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>

                    <button 
                      className="btn-primary" 
                      style={{ height: "38px", padding: "0 20px" }}
                      onClick={handleBulkUpdate}
                      disabled={bulkLoading || !bulkUserId || !bulkFile}
                    >
                      {bulkLoading ? <Loader2 size={16} className="spin" /> : <RefreshCw size={16} />}
                      Update
                    </button>
                  </div>
                </div>

                {/* 2. Retroactive Pricing */}
                <div className="control-column retroactive-pricing">
                  <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    2. Retroactive Pricing
                  </label>
                  <div className="responsive-stack">
                    <CustomDatePicker 
                      value={retroactiveDate}
                      onChange={setRetroactiveDate}
                      placeholder="SELECT DATE"
                    />
                    <button 
                      className="btn-success" 
                      style={{ height: "38px", padding: "0 20px" }}
                      onClick={() => handleApplyRetroactivePricing(bulkUserId)}
                      disabled={!bulkUserId || !retroactiveDate}
                    >
                      <CheckCircle2 size={16} />
                      Apply Pricing
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: 40 }}>
                      <div 
                        className={`custom-checkbox ${selectedJobs.length > 0 && selectedJobs.length === filteredJobs.length ? 'checked' : ''}`}
                        onClick={toggleSelectAll}
                        style={{ margin: '0 auto' }}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                    </th>
                    <th>User</th>
                    <th>Stone ID</th>
                    <th>Weight</th>
                    <th>Price/ct</th>
                    <th>Status</th>
                    <th>Received</th>
                    <th>Upload Time</th>
                    <th>Priority</th>
                    <th>Upload File</th>
                    <th>Completed File</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs.length ? filteredJobs.map(j => (
                    <tr key={j.id} className={selectedJobs.includes(j.id) ? "selected-row" : ""} style={{ transition: 'all 0.2s ease' }}>
                      <td>
                        <div 
                          className={`custom-checkbox ${selectedJobs.includes(j.id) ? 'checked' : ''}`}
                          onClick={() => {
                            if (selectedJobs.includes(j.id)) setSelectedJobs(selectedJobs.filter(id => id !== j.id));
                            else setSelectedJobs([...selectedJobs, j.id]);
                          }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                      </td>
                      <td><strong>{j.user}</strong></td>
                      <td style={{ fontWeight: 600, color: "var(--primary)" }}>{j.stone_id}</td>
                      <td>
                        <input 
                          key={`${j.id}-${j.weight}`}
                          type="number" 
                          step="0.01" 
                          className="small-input" 
                          defaultValue={j.weight}
                          disabled={j.status !== "Completed"}
                          onBlur={e => updateWeight(j.id, e.target.value)} 
                        />
                      </td>
                      <td style={{ fontWeight: 600, color: "var(--text)" }}>
                        ₹{getCalculatedRate(j)}
                      </td>
                      <td><StatusBadge status={j.status} /></td>
                      <td>
                        {j.upload_available
                          ? <span className="status-badge completed"><CheckCircle2 size={12} /> Yes</span>
                          : <span className="status-badge failed"><XCircle size={12} /> No</span>
                        }
                      </td>
                      <td style={{ fontSize: ".82rem" }}>{j.upload_time ? new Date(j.upload_time).toLocaleString('en-GB') : "-"}</td>
                      <td>
                        <input type="number" className="small-input" defaultValue={j.priority}
                          onBlur={e => updatePriority(j.id, e.target.value)} />
                      </td>
                      <td>
                        {j.upload_available ? (
                          <button className="btn-primary btn-sm"
                            onClick={() => downloadFile(`/admin/jobs/${j.id}/upload`, j.upload_filename || `upload_${j.id}`)}>
                            <Download size={13} /> {j.upload_filename || "File"}
                          </button>
                        ) : <span className="muted">—</span>}
                      </td>
                      <td>
                        {j.completed_available ? (
                          <button className="btn-success btn-sm"
                            onClick={() => downloadFile(`/admin/jobs/${j.id}/completed`, j.completed_filename || `result_${j.id}`)}>
                            <Download size={13} /> {j.completed_filename || "File"}
                          </button>
                        ) : <span className="muted">—</span>}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        <div className="btn-group" style={{ flexWrap: "nowrap", display: "inline-flex" }}>
                          {j.status !== "Completed" && j.status !== "Processing" && (
                            <button className="btn-primary btn-sm" onClick={() => startProcessing(j.id)} title="Start Processing">
                              <Play size={13} />
                            </button>
                          )}
                          {j.status === "Processing" && (
                            <label className="btn-success btn-sm" style={{ cursor: "pointer", marginBottom: 0 }} title="Upload Result">
                              <Upload size={13} /> Result
                              <input type="file" style={{ display: "none" }}
                                onChange={e => { const f = e.target.files?.[0]; if (f) uploadResult(j.id, f); }} />
                            </label>
                          )}
                          <button className="btn-danger btn-sm" onClick={() => handleDeleteJob(j.id)} title="Delete Job">
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={10}>
                      <div className="empty-state"><Package size={28} /><p>No jobs match filters</p></div>
                    </td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Tab: Users ── */}
        {activeTab === "users" && (
          <>
            <div className="panel" style={{ marginBottom: 0 }}>
              <div className="panel-header">
                <div className="panel-title">
                  <div className="panel-icon blue"><Users size={18} /></div>
                  <h3>Registered Users</h3>
                </div>
                <span className="panel-badge blue">{users.length}</span>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Company</th>
                      <th>Username</th>
                      <th>Status</th>
                      <th>Role</th>
                      <th>Stones</th>
                      <th>Joined</th>
                      <th>Account</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(u => {
                      const userJobs = jobs.filter(j => j.user === u.username);
                      const userCompleted = userJobs.filter(j => j.status === "Completed").length;
                      return (
                        <tr key={u.id}>
                          <td>{u.id}</td>
                          <td><strong>{u.company_name}</strong></td>
                          <td>
                            <div className="profile-bar" style={{ padding: "6px 10px", margin: 0, background: "transparent" }}>
                              <div className="profile-avatar" style={{ width: 30, height: 30, fontSize: ".8rem" }}>
                                {u.username?.charAt(0).toUpperCase()}
                              </div>
                              <span>{u.username}</span>
                            </div>
                          </td>
                          <td>
                            <span className={`status-badge ${u.status === "approved" ? "completed" : u.status === "rejected" ? "failed" : "queued"}`}>
                              {u.status || "approved"}
                            </span>
                          </td>
                          <td>
                            <span className={`status-badge ${u.is_admin ? "processing" : "uploaded"}`}>
                              {u.is_admin ? "Admin" : "User"}
                            </span>
                          </td>
                          <td>
                            <span style={{ fontSize: ".82rem" }}>{userCompleted}/{userJobs.length}</span>
                          </td>
                          <td style={{ fontSize: ".82rem" }}>{new Date(u.created_at).toLocaleDateString('en-GB')}</td>
                          <td>
                            {!u.is_admin && (
                              <button className="btn-ghost btn-sm" onClick={() => { setActiveTab("billing"); loadUserAccount(u.id); }}>
                                <Eye size={13} /> View
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* ── Tab: Analytics ── */}
        {activeTab === "analytics" && analytics && (
          <>
            <div className="panel-grid">
              <div className="panel chart-panel" style={{ marginBottom: 0 }}>
                <div className="panel-header">
                  <div className="panel-title">
                    <div className="panel-icon blue"><BarChart3 size={18} /></div>
                    <h3>Daily Uploads</h3>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={analytics.daily_uploads}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      cursor={false}
                      contentStyle={{ 
                        borderRadius: 12, 
                        border: "none", 
                        background: "var(--bg-card)",
                        boxShadow: "var(--shadow-lg)",
                        padding: "10px 14px",
                        color: "var(--text)"
                      }}
                      itemStyle={{ color: "var(--text)", fontWeight: 600 }}
                    />
                    <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="panel chart-panel" style={{ marginBottom: 0 }}>
                <div className="panel-header">
                  <div className="panel-title">
                    <div className="panel-icon green"><DollarSign size={18} /></div>
                    <h3>Revenue per User</h3>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={analytics.revenue_per_user} dataKey="revenue" nameKey="company"
                      outerRadius={100} innerRadius={50} paddingAngle={3}>
                      {analytics.revenue_per_user?.map((_, i) => (
                        <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(val) => [`₹${Number(val).toFixed(3)}`, "Revenue"]}
                      contentStyle={{ 
                        borderRadius: 12, 
                        border: "none", 
                        background: "var(--bg-card)",
                        boxShadow: "var(--shadow-lg)",
                        padding: "10px 14px",
                        color: "var(--text)"
                      }}
                      itemStyle={{ color: "var(--text)", fontWeight: 600 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Activity Logs */}
            <div className="panel">
              <div className="panel-header">
                <div className="panel-title">
                  <div className="panel-icon purple"><Activity size={18} /></div>
                  <h3>Recent Activity</h3>
                </div>
                <span className="panel-badge purple">{logs.length}</span>
              </div>
              <div className="log-list">
                {logs.slice(0, 12).map((log, idx) => (
                  <div key={idx} className="log-item">
                    <span className="log-action">{log.action}</span>
                    <span className="log-details">{log.details}</span>
                    {log.created_at && (
                      <span style={{ fontSize: ".75rem", color: "#94a3b8", whiteSpace: "nowrap" }}>
                        {new Date(log.created_at).toLocaleString()}
                      </span>
                    )}
                  </div>
                ))}
                {!logs.length && (
                  <div className="empty-state"><Activity size={28} /><p>No activity logs</p></div>
                )}
              </div>
            </div>
          </>
        )}

        {/* ── Tab: Billing & Accounts ── */}
        {activeTab === "billing" && (
          <div className="billing-tab">
            {/* Month/Year Selector + generate button */}
            <div className="panel">
              <div className="panel-header">
                <div className="panel-title">
                  <div className="panel-icon green"><Receipt size={18} /></div>
                  <h3>Billing Controls</h3>
                </div>
              </div>
              <div className="filter-row billing-controls-row">
                <div className="filter-group">
                  <label><Calendar size={14} /> Month</label>
                  <CustomSelect
                    options={MONTHS.slice(1).map((m, i) => ({ label: m, value: i + 1 }))}
                    value={billingMonth}
                    onChange={setBillingMonth}
                    style={{ width: "160px" }}
                  />
                </div>
                <div className="filter-group">
                  <label><Calendar size={14} /> Year</label>
                  <CustomSelect
                    options={yearOptions.map(y => ({ label: String(y), value: y }))}
                    value={billingYear}
                    onChange={setBillingYear}
                    style={{ width: "120px" }}
                  />
                </div>
                <div className="generate-btn-wrapper">
                  <button className="btn-primary" onClick={() => handleGenerateInvoices()} disabled={generatingInvoice}>
                    <FileText size={16} />
                    {generatingInvoice ? "Generating..." : `Generate Invoices — ${MONTHS[billingMonth]} ${billingYear}`}
                  </button>
                </div>
              </div>
            </div>

            {/* Billing sub-tabs */}
            <div className="tab-bar sub">
              <button className={`tab-btn ${billingSubTab === "overview" ? "active" : ""}`}
                onClick={() => setBillingSubTab("overview")}>
                <TrendingUp size={14} /> Monthly Overview
              </button>
              <button className={`tab-btn ${billingSubTab === "invoices" ? "active" : ""}`}
                onClick={() => setBillingSubTab("invoices")}>
                <FileText size={14} /> All Invoices
              </button>
              <button className={`tab-btn ${billingSubTab === "stones" ? "active" : ""}`}
                onClick={() => setBillingSubTab("stones")}>
                <FileSpreadsheet size={14} /> Stone Report
              </button>
              {userAccount && (
                <button className={`tab-btn ${billingSubTab === "account" ? "active" : ""}`}
                  onClick={() => setBillingSubTab("account")}>
                  <UserIcon size={14} /> {userAccount.company_name}
                </button>
              )}
            </div>

            {/* Sub-tab: Overview */}
            {billingSubTab === "overview" && (
              <>
                {billingOverview.length > 0 && (
                  <div className="report-summary" style={{ marginBottom: 16 }}>
                    <div className="report-stat">
                      <span className="report-stat-label">Users</span>
                      <span className="report-stat-value">{billingTotals.users}</span>
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
                      <span className="report-stat-label">Total Revenue</span>
                      <span className="report-stat-value">₹{billingTotals.amount.toFixed(2)}</span>
                    </div>
                  </div>
                )}

                <div className="panel">
                  <div className="panel-header">
                    <div className="panel-title">
                      <div className="panel-icon blue"><TrendingUp size={18} /></div>
                      <h3>Per-User Billing — {MONTHS[billingMonth]} {billingYear}</h3>
                    </div>
                  </div>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th style={{ width: 150 }}>Company</th>
                          <th style={{ width: 120 }}>Username</th>
                          <th style={{ width: 80 }}>Stones</th>
                          <th style={{ width: 100 }}>Weight (ct)</th>
                          <th style={{ width: 100 }}>AVG RATE (₹/CT)</th>
                          <th style={{ width: 120, textAlign: "right" }}>Amount (₹)</th>
                          <th style={{ width: 200, textAlign: "center" }}>Account</th>
                        </tr>
                      </thead>
                      <tbody>
                        {billingOverview.length ? billingOverview.map((b) => (
                          <tr key={b.user_id}>
                            <td style={{ width: 150 }}><strong>{b.company_name}</strong></td>
                            <td style={{ width: 120 }}>{b.username}</td>
                            <td style={{ width: 80 }}>{b.total_stones}</td>
                            <td style={{ width: 100 }}>{Number(b.total_weight).toFixed(2)}</td>
                            <td style={{ width: 100 }}>₹{Number(b.rate_per_carat).toFixed(2)}</td>
                            <td style={{ width: 120, textAlign: "right", fontWeight: 600, color: "var(--accent)" }}>₹{Number(b.total_amount).toFixed(2)}</td>
                            <td style={{ width: 200, textAlign: "center" }}>
                              <div className="btn-group" style={{ justifyContent: "center" }}>
                                <button className="btn-ghost btn-sm" onClick={() => loadUserAccount(b.user_id)}>
                                  <Eye size={13} /> Details
                                </button>
                                <button className="btn-primary btn-sm" onClick={() => openReportModal(b.user_id, b.company_name, b.month)}>
                                  <Download size={13} /> Download File
                                </button>
                              </div>
                            </td>
                          </tr>
                        )) : (
                          <tr><td colSpan={7}>
                            <div className="empty-state">
                              <Receipt size={28} />
                              <p>No billing data found for {MONTHS[billingMonth]} {billingYear}</p>
                            </div>
                          </td></tr>
                        )}
                        {billingOverview.length > 0 && (
                          <tr className="total-row">
                            <td colSpan={2}><strong>TOTAL</strong></td>
                            <td><strong>{billingTotals.stones}</strong></td>
                            <td><strong>{billingTotals.weight.toFixed(2)}</strong></td>
                            <td></td>
                            <td style={{ textAlign: "right" }}><strong>₹{billingTotals.amount.toFixed(2)}</strong></td>
                            <td></td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* Sub-tab: All Invoices */}
            {billingSubTab === "invoices" && (
              <div className="panel">
                <div className="panel-header">
                  <div className="panel-title">
                    <div className="panel-icon purple"><FileText size={18} /></div>
                    <h3>All Generated Invoices</h3>
                  </div>
                  <span className="panel-badge purple">{allInvoices.length}</span>
                </div>
                <div className="table-container">
                  <table style={{ tableLayout: "fixed", width: "100%" }}>
                    <thead>
                      <tr>
                        <th style={{ width: "50px" }}>ID</th>
                        <th style={{ width: "160px" }}>Company</th>
                        <th style={{ width: "120px" }}>Username</th>
                        <th style={{ width: "110px" }}>Month</th>
                        <th style={{ width: "80px" }}>Stones</th>
                        <th style={{ width: "90px" }}>Weight</th>
                        <th style={{ width: "90px" }}>Rate</th>
                        <th style={{ width: "110px", textAlign: "right" }}>Amount</th>
                        <th style={{ width: "130px", textAlign: "center" }}>Generated</th>
                        <th style={{ width: "180px", textAlign: "center" }}>Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allInvoices.length ? allInvoices.map((inv) => (
                        <tr key={inv.id}>
                          <td>{inv.id}</td>
                          <td style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}><strong>{inv.company_name}</strong></td>
                          <td>{inv.username}</td>
                          <td><strong>{inv.month}</strong></td>
                          <td>{inv.total_stones}</td>
                          <td>{Number(inv.total_weight).toFixed(2)}</td>
                          <td>₹{Number(inv.rate_per_carat).toFixed(2)}</td>
                          <td style={{ textAlign: "right", fontWeight: 600, color: "var(--accent)" }}>₹{Number(inv.total_amount).toFixed(2)}</td>
                          <td style={{ width: "130px", textAlign: "center", fontSize: ".82rem" }}>{inv.created_at ? new Date(inv.created_at).toLocaleDateString('en-GB') : "-"}</td>
                          <td style={{ textAlign: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button className="btn-primary btn-sm" style={{ width: "140px", justifyContent: "center" }} onClick={() => openReportModal(inv.user_id, inv.company_name, inv.month)}>
                                <Download size={13} /> Download File
                              </button>
                            </div>
                          </td>
                        </tr>
                      )) : (
                        <tr><td colSpan={10}>
                          <div className="empty-state"><FileText size={28} /><p>No invoices generated yet</p></div>
                        </td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Sub-tab: Stone Report */}
            {billingSubTab === "stones" && (
              <div className="panel">
                <div className="panel-header">
                  <div className="panel-title">
                    <div className="panel-icon blue"><FileSpreadsheet size={18} /></div>
                    <h3>Stone Report — {MONTHS[billingMonth]} {billingYear}</h3>
                  </div>
                </div>
                <div className="filter-row" style={{ marginBottom: 16 }}>
                  <div className="filter-group">
                    <label><UserIcon size={14} /> User</label>
                    <CustomSelect 
                      options={[
                        { label: "All Users", value: "all" },
                        ...nonAdminUsers.map(u => ({ label: `${u.company_name} (${u.username})`, value: u.id }))
                      ]}
                      value={stoneReportUserId}
                      onChange={setStoneReportUserId}
                      style={{ minWidth: "220px" }}
                    />
                  </div>
                  <button className="btn-primary btn-sm" onClick={loadAdminStoneReport} style={{ alignSelf: "flex-end" }}>
                    <Filter size={14} /> Refresh
                  </button>
                </div>

                {adminStoneReport.length > 0 && (
                  <div className="report-summary" style={{ marginBottom: 16 }}>
                    <div className="report-stat">
                      <span className="report-stat-label">Total Stones</span>
                      <span className="report-stat-value">{stoneReportTotals.count}</span>
                    </div>
                    <div className="report-stat">
                      <span className="report-stat-label">Total Weight</span>
                      <span className="report-stat-value">{stoneReportTotals.weight.toFixed(2)} ct</span>
                    </div>
                    <div className="report-stat highlight">
                      <span className="report-stat-label">Total Amount</span>
                      <span className="report-stat-value">₹{stoneReportTotals.amount.toFixed(2)}</span>
                    </div>
                  </div>
                )}

                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Company</th>
                        <th>Stone ID</th>
                        <th>Weight (ct)</th>
                        <th>Completed</th>
                        <th>Rate (₹)</th>
                        <th style={{ textAlign: "right" }}>Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adminStoneReport.length ? adminStoneReport.map((s, i) => (
                        <tr key={s.job_id}>
                          <td>{i + 1}</td>
                          <td><strong>{s.company_name}</strong></td>
                          <td>{s.stone_id}</td>
                          <td>{Number(s.weight).toFixed(2)}</td>
                          <td style={{ fontSize: ".82rem" }}>{s.completed_at ? new Date(s.completed_at).toLocaleDateString('en-GB') : "-"}</td>
                          <td>₹{Number(s.rate_per_carat).toFixed(2)}</td>
                          <td style={{ textAlign: "right", fontWeight: 600 }}>₹{Number(s.amount).toFixed(2)}</td>
                        </tr>
                      )) : (
                        <tr><td colSpan={7}>
                          <div className="empty-state">
                            <FileSpreadsheet size={28} />
                            <p>No stones for selected period</p>
                          </div>
                        </td></tr>
                      )}
                      {adminStoneReport.length > 0 && (
                        <tr className="total-row">
                          <td colSpan={3}><strong>TOTAL</strong></td>
                          <td><strong>{stoneReportTotals.weight.toFixed(2)}</strong></td>
                          <td><strong>{stoneReportTotals.count} stones</strong></td>
                          <td></td>
                          <td style={{ textAlign: "right" }}><strong>₹{stoneReportTotals.amount.toFixed(2)}</strong></td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Sub-tab: User Account Detail */}
            {billingSubTab === "account" && userAccount && (
              <>
                <div className="panel">
                  <div className="panel-header">
                    <div className="panel-title">
                      <div className="panel-icon purple"><UserIcon size={18} /></div>
                      <h3>{userAccount.company_name} — Account Details</h3>
                    </div>
                    <button className="btn-ghost btn-sm" onClick={() => { setBillingSubTab("overview"); setUserAccount(null); }}>
                      ← Back
                    </button>
                  </div>

                  <div className="account-grid">
                    <div className="account-item">
                      <div className="account-icon blue"><Gem size={16} /></div>
                      <div>
                        <span className="account-label">Company</span>
                        <span className="account-value">{userAccount.company_name}</span>
                      </div>
                    </div>
                    <div className="account-item">
                      <div className="account-icon purple"><UserIcon size={16} /></div>
                      <div>
                        <span className="account-label">Username</span>
                        <span className="account-value">@{userAccount.username}</span>
                      </div>
                    </div>

                    <div className="account-item">
                      <div className="account-icon green"><Package size={16} /></div>
                      <div>
                        <span className="account-label">Total Stones</span>
                        <span className="account-value">{userAccount.total_stones}</span>
                      </div>
                    </div>
                    <div className="account-item">
                      <div className="account-icon blue"><Weight size={16} /></div>
                      <div>
                        <span className="account-label">Total Weight</span>
                        <span className="account-value">{Number(userAccount.total_weight).toFixed(2)} ct</span>
                      </div>
                    </div>
                    <div className="account-item highlight">
                      <div className="account-icon"><TrendingUp size={16} /></div>
                      <div>
                        <span className="account-label">Total Revenue</span>
                        <span className="account-value">₹{Number(userAccount.total_revenue).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="account-item">
                      <div className="account-icon orange"><Clock size={16} /></div>
                      <div>
                        <span className="account-label">Active Stones</span>
                        <span className="account-value">{userAccount.active_stones}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monthly breakdown */}
                <div className="panel">
                  <div className="panel-header">
                    <div className="panel-title">
                      <div className="panel-icon blue"><BarChart3 size={18} /></div>
                      <h3>Monthly Breakdown</h3>
                    </div>
                  </div>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th style={{ width: 150 }}>Month</th>
                          <th style={{ width: 100 }}>Stones</th>
                          <th style={{ width: 120 }}>Weight (ct)</th>
                          <th style={{ width: 150, textAlign: "right" }}>Amount (₹)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userAccount.monthly_breakdown?.length ? userAccount.monthly_breakdown.map((m) => (
                          <tr key={m.month}>
                            <td><strong>{m.month}</strong></td>
                            <td>{m.stones}</td>
                            <td>{Number(m.weight).toFixed(2)}</td>
                            <td style={{ textAlign: "right", fontWeight: 600, color: "var(--accent)" }}>₹{Number(m.amount).toFixed(2)}</td>
                          </tr>
                        )) : (
                          <tr><td colSpan={4}><div className="empty-state"><p>No data</p></div></td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* User invoices */}
                {userAccount.invoices?.length > 0 && (
                  <div className="panel">
                    <div className="panel-header">
                      <div className="panel-title">
                        <div className="panel-icon green"><FileText size={18} /></div>
                        <h3>Invoices</h3>
                      </div>
                    </div>
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th style={{ width: 150 }}>Month</th>
                            <th style={{ width: 100 }}>Stones</th>
                            <th style={{ width: 120 }}>Weight</th>
                            <th style={{ width: 150, textAlign: "right" }}>Amount</th>
                            <th style={{ width: 180, textAlign: "center" }}>Download</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userAccount.invoices.map((inv) => (
                            <tr key={inv.id}>
                              <td><strong>{inv.month}</strong></td>
                              <td>{inv.total_stones}</td>
                              <td>{Number(inv.total_weight).toFixed(2)}</td>
                              <td style={{ textAlign: "right", fontWeight: 600 }}>₹{Number(inv.total_amount).toFixed(2)}</td>
                              <td style={{ width: 180, textAlign: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                  <button className="btn-primary btn-sm" style={{ width: "140px", justifyContent: "center" }} onClick={() => openReportModal(userAccount.user_id, userAccount.company_name, inv.month)}>
                                    <Download size={13} /> Download File
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* ── Tab: Weight & Price ── */}
        {activeTab === "pricing" && (
          <div className="panel">
            <div className="panel-header pricing-panel-header">
              <div className="panel-title">
                <div className="panel-icon green"><DollarSign size={18} /></div>
                <h3>Weight & Price Configuration</h3>
              </div>
              <div className="panel-controls">
                {!editingPrices && (
                  <div className="control-group">
                    <span className="control-label">Select Client:</span>
                    <CustomSelect
                      options={[
                        { label: "Global Default", value: "global" },
                        ...users.filter(u => !u.is_admin).map(u => ({ label: u.company_name, value: u.id }))
                      ]}
                      value={priceConfigUserId}
                      onChange={setPriceConfigUserId}
                      style={{ width: "200px" }}
                    />
                  </div>
                )}
                {!editingPrices && (
                  <button className="btn-primary btn-sm" onClick={handlePriceUpdate}>
                    <RefreshCw size={14} /> Update Table
                  </button>
                )}
              </div>
            </div>

            <div className="table-container pricing-table-container">
              {loadingPrices && (
                <div className="table-loading-overlay">
                  <div className="loading-spinner-wrapper">
                    <Loader2 size={32} className="spin" style={{ color: "var(--primary)" }} />
                    <span>Updating Prices...</span>
                  </div>
                </div>
              )}
              
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th style={{ width: "40%" }}>Weight</th>
                    <th style={{ width: "25%" }}>Price Per Carat</th>
                    <th style={{ width: "25%" }}>Last Updated</th>
                    {editingPrices && <th style={{ width: "10%", textAlign: "right" }}>Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {loadingPrices && !(editingPrices || weightPrices.filter(r => !r.valid_to)).length ? (
                    Array.from({ length: 9 }).map((_, idx) => (
                      <tr key={`skeleton-${idx}`} className="skeleton-row">
                        <td><div className="skeleton-line" style={{ width: "65%" }}></div></td>
                        <td><div className="skeleton-line" style={{ width: "45%" }}></div></td>
                        <td><div className="skeleton-line" style={{ width: "50%" }}></div></td>
                        {editingPrices && <td></td>}
                      </tr>
                    ))
                  ) : (
                    (editingPrices || weightPrices.filter(r => !r.valid_to)).map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          {editingPrices ? (
                            <input
                              type="text"
                              value={item.weight}
                              onChange={(e) => handlePriceChange(idx, "weight", e.target.value)}
                              placeholder="e.g. 0.50 TO 0.99"
                              style={{ marginBottom: 0 }}
                            />
                          ) : (
                            <strong>{item.weight}</strong>
                          )}
                        </td>
                        <td>
                          {editingPrices ? (
                            <input
                              type="text"
                              value={item.price}
                              onChange={(e) => handlePriceChange(idx, "price", e.target.value)}
                              placeholder="Price"
                              style={{ marginBottom: 0 }}
                            />
                          ) : (
                            <span style={{ color: "var(--accent)", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                              <IndianRupee size={14} /> {item.price}
                            </span>
                          )}
                        </td>
                        <td>
                          <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                            {item.updated_at ? new Date(item.updated_at).toLocaleString('en-GB') : "Never"}
                          </span>
                        </td>
                        {editingPrices && (
                          <td style={{ textAlign: "right" }}>
                            <button className="btn-icon red" onClick={() => handleDeletePriceRow(idx)}>
                              <Trash2 size={16} />
                            </button>
                          </td>
                        )}
                      </tr>
                    ))
                  )}
                  {!(loadingPrices || editingPrices || weightPrices.filter(r => !r.valid_to).length) && (
                    <tr>
                      <td colSpan={editingPrices ? 4 : 3}>
                        <div className="empty-state">
                          <DollarSign size={28} />
                          <p>No pricing data defined</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {editingPrices && (
              <div className="pricing-edit-actions">
                <button className="btn-secondary" onClick={handleAddPriceRow}>
                  <Plus size={16} /> Add Row
                </button>
                <div className="action-buttons">
                  <button className="btn-ghost" onClick={() => setEditingPrices(null)}>Cancel</button>
                  <button className="btn-primary" onClick={handleSavePrices} disabled={savingPrices}>
                    {savingPrices ? "Saving..." : "Submit Changes"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Tab: Accounts Profit ── */}
        {activeTab === "accounts_profit" && (
          <div className="accounts-profit-tab">
            {/* Filter Bar */}
            <div className="panel" style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", gap: 15, alignItems: "center", flexWrap: "wrap" }}>
                <div className="filter-group" style={{ marginBottom: 0 }}>
                  <label style={{ marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>
                    <Calendar size={14} /> Month
                  </label>
                  <CustomSelect
                    options={[
                      { label: "All Months", value: "all" },
                      ...MONTHS.slice(1).map((m, i) => ({ label: m, value: i + 1 }))
                    ]}
                    value={accProfitMonth}
                    onChange={setAccProfitMonth}
                    style={{ width: "160px" }}
                  />
                </div>
                <div className="filter-group" style={{ marginBottom: 0 }}>
                  <label style={{ marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>
                    <Calendar size={14} /> Year
                  </label>
                  <CustomSelect
                    options={[
                      { label: "All Years", value: "all" },
                      ...yearOptions.map(y => ({ label: String(y), value: y }))
                    ]}
                    value={accProfitYear}
                    onChange={setAccProfitYear}
                    style={{ width: "120px" }}
                  />
                </div>
                <button 
                  className={`btn ${accProfitMonth === "all" && accProfitYear === "all" ? "btn-primary" : "btn-outline"}`}
                  style={{ alignSelf: "flex-end", height: 38 }}
                  onClick={() => { setAccProfitMonth("all"); setAccProfitYear("all"); }}
                >
                  Show All (Lifetime)
                </button>
              </div>
            </div>

            {/* Global Summary Stats */}
            <div className="stats-grid" style={{ marginBottom: "20px" }}>
               <div className="panel" style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                 <span className="muted" style={{ fontSize: "0.85rem", fontWeight: 600 }}>REVENUE ({accProfitMonth === "all" ? "ALL" : MONTHS[accProfitMonth]})</span>
                 <h2 style={{ color: "var(--primary)", margin: "8px 0 0 0" }}>
                   ₹{accProfitTotals.revenue.toFixed(2)}
                 </h2>
               </div>
               <div className="panel" style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                 <span className="muted" style={{ fontSize: "0.85rem", fontWeight: 600 }}>RECEIVED</span>
                 <h2 style={{ color: "var(--success)", margin: "8px 0 0 0" }}>
                   ₹{accProfitTotals.received.toFixed(2)}
                 </h2>
               </div>
               <div className="panel" style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                 <span className="muted" style={{ fontSize: "0.85rem", fontWeight: 600 }}>PENDING</span>
                 <h2 style={{ color: "var(--failed)", margin: "8px 0 0 0" }}>
                   ₹{accProfitTotals.pending.toFixed(2)}
                 </h2>
               </div>
            </div>

            <div className="panel-grid">
              {/* Revenue Chart */}
              <div className="panel" style={{ marginBottom: 0 }}>
                <div className="panel-header">
                  <div className="panel-title">
                    <div className="panel-icon green"><BarChart3 size={18} /></div>
                    <h3>Revenue Distribution</h3>
                  </div>
                </div>
                <div style={{ height: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {filteredAccountData.some(d => d.revenue > 0) ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie 
                          data={filteredAccountData.filter(d => d.revenue > 0)} 
                          dataKey="revenue" 
                          nameKey="company"
                          outerRadius={100} 
                          innerRadius={60} 
                          paddingAngle={3}
                        >
                          {filteredAccountData.filter(d => d.revenue > 0).map((_, i) => (
                            <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(val) => [`₹${Number(val).toFixed(2)}`, "Revenue"]}
                          contentStyle={{ 
                            borderRadius: 12, 
                            border: "none", 
                            background: "var(--bg-card)",
                            boxShadow: "var(--shadow-lg)",
                            padding: "10px 14px"
                          }}
                          itemStyle={{ color: "var(--text)", fontWeight: 500 }}
                          labelStyle={{ color: "var(--text)", fontWeight: 700, marginBottom: 4 }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="empty-state">
                      <BarChart3 size={32} />
                      <p>No revenue data for this period</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Add Profit Form */}
              <div className="panel" style={{ marginBottom: 0 }}>
                <div className="panel-header">
                  <div className="panel-title">
                    <div className="panel-icon blue"><Plus size={18} /></div>
                    <h3>Record Entry</h3>
                  </div>
                </div>
                <div style={{ padding: "10px 0" }}>
                  <div className="form-group">
                    <label>Select Client</label>
                    <CustomSelect 
                      options={[
                        { label: "Choose Client...", value: "" },
                        ...nonAdminUsers.map(u => ({ label: `${u.company_name} (${u.username})`, value: u.id }))
                      ]}
                      value={profitUserId}
                      onChange={setProfitUserId}
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: "15px" }}>
                    <label>Amount</label>
                    <textarea 
                      placeholder="Amount" 
                      value={profitAmount}
                      onChange={(e) => setProfitAmount(e.target.value)}
                      style={{ 
                        width: "100%", 
                        minHeight: "60px", 
                        padding: "12px", 
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border)",
                        background: "var(--bg-card)",
                        color: "var(--text)",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: "15px" }}>
                    <label>Payment Mode</label>
                    <CustomSelect 
                      options={[
                        { label: "Cash", value: "Cash" },
                        { label: "UPI", value: "UPI" },
                        { label: "Cheque", value: "Cheque" }
                      ]}
                      value={profitPaymentMode}
                      onChange={setProfitPaymentMode}
                    />
                  </div>
                  <button 
                    className="btn-primary" 
                    style={{ 
                      width: "100%", 
                      marginTop: "10px", 
                      height: "45px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onClick={handleRecordProfit}
                    disabled={submittingProfit}
                  >
                    {submittingProfit ? <Loader2 size={18} className="spin" /> : "Submit Profit"}
                  </button>
                </div>
              </div>
            </div>

            {/* User-wise Revenue Table */}
            <div className="panel" style={{ marginTop: "20px" }}>
              <div className="panel-header">
                <div className="panel-title">
                  <div className="panel-icon purple"><BarChart3 size={18} /></div>
                  <h3>User-wise Revenue Details</h3>
                </div>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th style={{ textAlign: "right" }}>Total Revenue</th>
                      <th style={{ textAlign: "right" }}>Received</th>
                      <th style={{ textAlign: "right" }}>Pending</th>
                      <th style={{ textAlign: "center", width: "80px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAccountData.map((item, idx) => {
                      const received = filteredReceivedTotals[item.user_id] || 0;
                      const pending = item.revenue - received;
                      return (
                        <tr key={idx}>
                          <td><strong>{item.company}</strong></td>
                          <td style={{ textAlign: "right" }}>₹{Number(item.revenue).toFixed(2)}</td>
                          <td style={{ textAlign: "right", color: "var(--success)" }}>₹{Number(received).toFixed(2)}</td>
                          <td style={{ textAlign: "right", color: pending > 0 ? "var(--failed)" : "var(--success)", fontWeight: 700 }}>
                            ₹{Number(pending).toFixed(2)}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <button 
                              className="btn-icon blue" 
                              title="Download Statement"
                              onClick={() => handleDownloadAccountStatement(item.user_id, item.company)}
                            >
                              <Download size={14} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    {!filteredAccountData.length && (
                      <tr><td colSpan={5}><div className="empty-state"><Package size={28} /><p>No data available</p></div></td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Recorded Profits */}
            <div className="panel" style={{ marginTop: "20px" }}>
              <div className="panel-header">
                <div className="panel-title">
                  <div className="panel-icon orange"><Clock size={18} /></div>
                  <h3>Recent Recorded Entries</h3>
                </div>
                <span className="panel-badge orange">{recordedProfits.length}</span>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Amount</th>
                      <th>Mode</th>
                      <th>Date</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recordedProfits.map((p) => (
                      <tr key={p.id}>
                        <td><strong>{p.company}</strong></td>
                        <td style={{ fontWeight: 600, color: "var(--success)" }}>₹{p.amount.toFixed(2)}</td>
                        <td>
                          <span className={`status-badge ${p.payment_mode === 'Cash' ? 'completed' : p.payment_mode === 'UPI' ? 'processing' : 'queued'}`} style={{ fontSize: '0.75rem' }}>
                            {p.payment_mode}
                          </span>
                        </td>
                        <td>{new Date(p.created_at).toLocaleString()}</td>
                        <td>{p.remarks}</td>
                      </tr>
                    ))}
                    {!recordedProfits.length && (
                      <tr><td colSpan={4}><div className="empty-state"><Clock size={28} /><p>No entries recorded yet</p></div></td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab: Logs ── */}
        {activeTab === "logs" && (
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <div className="panel-icon purple"><Activity size={18} /></div>
                <h3>System Activity Logs</h3>
              </div>
              <div className="refresh-dot"></div>
            </div>

            <div className="filter-row" style={{ marginBottom: 20, flexWrap: 'wrap', gap: 15, alignItems: 'flex-end' }}>
              <div className="filter-group">
                <label>Filter Type</label>
                <CustomSelect 
                  options={[
                    { label: "Today & Yesterday", value: "DEFAULT" },
                    { label: "Multiple Dates", value: "DAYS" },
                    { label: "Date Range", value: "RANGE" }
                  ]}
                  value={logFilter.type}
                  onChange={(val) => setLogFilter(p => ({ ...p, type: val }))}
                  style={{ width: 220 }}
                />
              </div>

              {logFilter.type === "DAYS" && (
                <div className="filter-group">
                  <label>Select Dates</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CustomDatePicker 
                      value=""
                      placeholder="ADD DATE"
                      onChange={(d) => {
                        if (d && !logFilter.dates.includes(d)) {
                          setLogFilter(p => ({ ...p, dates: [...p.dates, d] }));
                        }
                      }}
                    />
                    <HorizontalScrollContainer 
                      style={{ 
                        display: "flex", 
                        gap: 8, 
                        overflowX: "auto", 
                        width: "400px", 
                        minHeight: "38px",
                        alignItems: "center",
                        whiteSpace: 'nowrap',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        cursor: 'ew-resize'
                      }} className="no-scrollbar">
                      {logFilter.dates.map(d => {
                        const [y, m, day] = d.split("-");
                        return (
                          <span key={d} className="status-badge queued" style={{ display: 'inline-flex', gap: 8, alignItems: 'center', flexShrink: 0, padding: '6px 12px' }}>
                            {`${day}/${m}/${y}`} <XCircle size={14} style={{ cursor: 'pointer', opacity: 0.7 }} onClick={() => setLogFilter(p => ({ ...p, dates: p.dates.filter(x => x !== d) }))} />
                          </span>
                        );
                      })}
                    </HorizontalScrollContainer>
                  </div>
                </div>
              )}

              {logFilter.type === "RANGE" && (
                <>
                  <div className="filter-group">
                    <label>From</label>
                    <CustomDatePicker value={logFilter.startDate} onChange={(d) => setLogFilter(p => ({ ...p, startDate: d }))} />
                  </div>
                  <div className="filter-group">
                    <label>To</label>
                    <CustomDatePicker value={logFilter.endDate} onChange={(d) => setLogFilter(p => ({ ...p, endDate: d }))} />
                  </div>
                </>
              )}

              <div style={{ display: 'flex', gap: 10, alignSelf: 'flex-end' }}>
                <button className="btn-primary" onClick={loadLogs} disabled={loadingLogs} style={{ height: 38 }}>
                  {loadingLogs ? <Loader2 size={16} className="spin" /> : <RefreshCw size={16} />} Submit
                </button>
                <button className="btn-secondary" onClick={() => {
                  const reset = { type: "DEFAULT", dates: [], startDate: "", endDate: "" };
                  setLogFilter(reset);
                  // We need to call loadLogs with the reset state immediately
                  api.get("/admin/activity-logs", { params: { filter_type: "DEFAULT" } })
                     .then(res => setLogs(res.data));
                }} style={{ height: 38 }}>
                  Logs Refresh
                </button>
              </div>
            </div>

            <div className="log-list" style={{ 
              maxHeight: '580px', 
              overflowY: 'auto', 
              paddingRight: '6px',
              borderRadius: '8px'
            }}>
              {logs.length > 0 ? logs.map((l, i) => (
                <div key={i} className="log-item" style={{ padding: '12px 16px', marginBottom: 10, border: '1px solid var(--border-light)' }}>
                  <div className="log-action" style={{ 
                    padding: '4px 8px', 
                    borderRadius: 4, 
                    fontSize: '.7rem',
                    background: l.action?.includes('admin') ? 'var(--primary-bg)' : 'var(--success-bg)',
                    color: l.action?.includes('admin') ? 'var(--primary)' : 'var(--success)'
                  }}>
                    {String(l.action || 'LOG').toUpperCase()}
                  </div>
                  <div className="log-details">
                    <p style={{ fontWeight: 500, color: 'var(--text)' }}>{l.details}</p>
                    <span className="muted" style={{ fontSize: '.75rem' }}>
                      {new Date(l.created_at).toLocaleString('en-GB')}
                    </span>
                  </div>
                </div>
              )) : (
                <div className="empty-state">
                  <Activity size={32} />
                  <p>No activity recorded yet for the selected period</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Tab: Backup & Restore ── */}
        {activeTab === "backup_restore" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="panel-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              
              {/* Backup Card */}
              <div className="panel" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "280px" }}>
                <div>
                  <div className="panel-header" style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "12px", marginBottom: "16px" }}>
                    <div className="panel-title">
                      <div className="panel-icon blue"><Database size={18} /></div>
                      <h3>Backup System Database</h3>
                    </div>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "20px" }}>
                    Download a full, secure, and portable JSON backup containing all database records. This includes all registered clients, pricing configurations, invoices, account payments/profits, and system activity logs.
                  </p>
                  <div style={{ background: "var(--primary-bg)", border: "1px solid var(--primary-light)", padding: "12px 16px", borderRadius: "var(--radius-sm)", marginBottom: "20px", display: "flex", gap: "10px", alignItems: "center" }}>
                    <CheckCircle2 size={16} className="blue" />
                    <span style={{ fontSize: "0.82rem", color: "var(--primary)", fontWeight: 600 }}>Exclude Files: Physical stone or image folders are not backed up.</span>
                  </div>
                </div>
                <button 
                  className="btn-primary" 
                  onClick={handleDownloadBackup} 
                  disabled={backupLoading}
                  style={{ width: "100%", height: "42px", display: "flex", justifyContent: "center", gap: "10px" }}
                >
                  {backupLoading ? <Loader2 size={18} className="spin" /> : <Download size={18} />}
                  {backupLoading ? "Generating Backup..." : "Download Backup File"}
                </button>
              </div>

              {/* Restore Card */}
              <div className="panel" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "350px" }}>
                <div>
                  <div className="panel-header" style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "12px", marginBottom: "16px" }}>
                    <div className="panel-title">
                      <div className="panel-icon orange"><AlertCircle size={18} /></div>
                      <h3>Merge & Import Database</h3>
                    </div>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "20px" }}>
                    Upload a previously exported `.json` backup file to restore or merge with your database. Select your preferred import behavior below:
                  </p>

                  {/* Mode Dropdown Selector */}
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ fontSize: "0.76rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "8px", display: "block" }}>
                      Choose Import Mode
                    </label>
                    <CustomSelect 
                      options={[
                        { label: "Merge All Data (Backup + Purana side-by-side)", value: "merge" },
                        { label: "Smart Sync (Match aur jo nahi hai sirf wahi add karein)", value: "sync" },
                        { label: "Replace Entire Database (Wipe Purana)", value: "replace" }
                      ]}
                      value={importMode}
                      onChange={setImportMode}
                    />
                  </div>

                  <div style={{ position: "relative", marginBottom: "20px" }}>
                    <input 
                      id="backup-file-input"
                      type="file" 
                      accept=".json" 
                      onChange={e => setBackupFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                    <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                      <label 
                        htmlFor="backup-file-input"
                        className="btn-ghost"
                        style={{ 
                          flex: 1,
                          justifyContent: "center", 
                          height: "42px", 
                          borderStyle: "dashed",
                          borderWidth: "2px",
                          borderColor: backupFile ? "var(--success)" : "var(--primary-light)",
                          color: backupFile ? "var(--success)" : "var(--primary)",
                          background: backupFile ? "var(--success-bg)" : "var(--bg-card)",
                          padding: "0 14px",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          borderRadius: "var(--radius-sm)"
                        }}
                      >
                        {backupFile ? <CheckCircle2 size={16} /> : <FileText size={16} />}
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: "220px" }}>
                          {backupFile ? backupFile.name : "Select Backup JSON File"}
                        </span>
                      </label>
                      {backupFile && (
                        <button 
                          className="btn-icon red" 
                          style={{ height: '42px', width: '42px', borderRadius: 'var(--radius-sm)' }}
                          onClick={() => { setBackupFile(null); document.getElementById('backup-file-input').value = ''; }}
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                  <button 
                    className="btn-danger" 
                    disabled={!backupFile || importLoading}
                    onClick={() => setShowConfirmRestoreModal(true)}
                    style={{ width: "100%", height: "42px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}
                  >
                    <RefreshCw size={18} className={importLoading ? "spin" : ""} />
                    {importLoading ? "Restoring Database..." : "Import Database"}
                  </button>

                  {/* Conditionally rendered Undo button */}
                  {hasUndo && (
                    <button 
                      className="btn-ghost" 
                      onClick={handleUndoImport}
                      disabled={importLoading}
                      style={{ 
                        width: "100%", 
                        height: "42px", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        gap: "10px", 
                        border: "1px dashed var(--warning)", 
                        color: "var(--warning)", 
                        background: "var(--warning-bg)", 
                        fontWeight: 600 
                      }}
                    >
                      <RefreshCw size={16} className={importLoading ? "spin" : ""} />
                      Undo Last Import (Revert State)
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── Tab: Files Backup ── */}
        {activeTab === "files_backup" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Backup Engine Health Status Card */}
            <div className="panel" style={{ padding: "20px 24px" }}>
              <div className="panel-header" style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "12px", marginBottom: "16px" }}>
                <div className="panel-title">
                  <div className={`panel-icon ${localServiceAvail ? "green" : "red"}`}><FolderOpen size={18} /></div>
                  <h3>Local Backup Sync Client Status</h3>
                </div>
                <span className={`status-badge ${localServiceAvail ? "completed" : "failed"}`}>
                  {localServiceAvail ? "CONNECTED" : "DISCONNECTED"}
                </span>
              </div>
              
              {!localServiceAvail ? (
                <div style={{ padding: "10px 0", textAlign: "center" }}>
                  <div style={{ color: "var(--failed)", background: "var(--failed-bg)", border: "1px solid var(--failed-light)", padding: "16px", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", margin: "10px 0 20px 0" }}>
                    <AlertCircle size={32} />
                    <h4 style={{ margin: 0, fontWeight: 700 }}>Local File Service is Not Running</h4>
                    <p style={{ margin: 0, fontSize: "0.88rem", maxWidth: "500px", lineHeight: "1.6" }}>
                      Aapke computer par local sync and file service chalu nahi hai. Backup ticks aur automatic local directory folder updates dekhne ke liye, please local machine ke terminal par niche di gayi command run karein:
                    </p>
                    <code style={{ background: "rgba(0,0,0,0.15)", color: "var(--text)", padding: "6px 12px", borderRadius: "4px", fontSize: "0.9rem", fontWeight: 700, marginTop: "8px", fontFamily: "monospace" }}>
                      python backend/local_file_service.py
                    </code>
                  </div>
                  <button className="btn-primary" onClick={loadLocalBackupStatus} style={{ height: "40px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <RefreshCw size={16} /> Recheck Connection
                  </button>
                </div>
              ) : !localBackupData?.configured ? (
                <div style={{ padding: "10px 0" }}>
                  <div style={{ color: "var(--warning)", background: "var(--warning-bg)", border: "1px solid var(--warning-light)", padding: "16px", borderRadius: "8px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px" }}>
                    <AlertCircle size={20} />
                    <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>Backup sync is not configured yet. Please link your local backup script to the server by entering the details below:</span>
                  </div>
                  
                  <form onSubmit={handleSaveLocalConfig} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", alignItems: "flex-end" }}>
                    <div className="filter-group">
                      <label>AWS Server/Local URL</label>
                      <input 
                        type="text" 
                        value={localServerUrl} 
                        onChange={(e) => setLocalServerUrl(e.target.value)} 
                        placeholder="e.g. http://localhost:8000"
                        style={{ marginBottom: 0 }}
                      />
                    </div>
                    <div className="filter-group">
                      <label>Admin Username</label>
                      <input 
                        type="text" 
                        value={localAdminUsername} 
                        onChange={(e) => setLocalAdminUsername(e.target.value)} 
                        placeholder="admin"
                        style={{ marginBottom: 0 }}
                      />
                    </div>
                    <div className="filter-group">
                      <label>Admin Password</label>
                      <input 
                        type="password" 
                        value={localAdminPassword} 
                        onChange={(e) => setLocalAdminPassword(e.target.value)} 
                        placeholder="Password"
                        style={{ marginBottom: 0 }}
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="btn-primary" 
                      disabled={savingLocalConfig} 
                      style={{ height: "38px", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}
                    >
                      {savingLocalConfig ? <Loader2 size={16} className="spin" /> : <Check size={16} />}
                      Save & Connect
                    </button>
                  </form>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      <div>💾 <strong>Backup Directory:</strong> <code style={{ background: "var(--border-light)", padding: "2px 6px", borderRadius: "4px" }}>{localBackupData?.backup_root || "D:\\Diamond_Backup_Files"}</code></div>
                      <div style={{ marginTop: "6px" }}>🔄 <strong>Last Sync Status:</strong> <span style={{ color: "var(--primary)", fontWeight: 600 }}>{localBackupData?.status_log || "Checking..."}</span></div>
                    </div>
                    <button 
                      className="btn-primary" 
                      onClick={handleTriggerLocalSync} 
                      disabled={syncingBackup}
                      style={{ height: "40px", display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      {syncingBackup ? <Loader2 size={16} className="spin" /> : <RefreshCw size={16} />}
                      {syncingBackup ? "Synchronizing..." : "Sync & Refresh Ticks"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Client Backup Details Grid */}
            {localServiceAvail && (
              <div className="panel" style={{ marginTop: "0" }}>
                <div className="panel-header" style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "12px", marginBottom: "16px" }}>
                  <div className="panel-title">
                    <div className="panel-icon purple"><Users size={18} /></div>
                    <h3>Client Folders & Backup Files (D:\Diamond_Backup_Files)</h3>
                  </div>
                </div>
                
                {/* Backup Filters Row */}
                <div style={{ display: "flex", gap: "20px", padding: "0 24px 20px 24px", borderBottom: "1px solid var(--border-light)", marginBottom: "20px", flexWrap: "wrap", alignItems: "center" }}>
                  <div className="filter-group" style={{ margin: 0, flex: "0 0 220px" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "6px", display: "block" }}>Filter by Client</label>
                    <CustomSelect 
                      options={[
                        { label: "All Clients", value: "all" },
                        ...backupClients.map(u => ({ label: u, value: u }))
                      ]}
                      value={backupCompanyFilter}
                      onChange={setBackupCompanyFilter}
                    />
                  </div>
                  
                  <div className="filter-group" style={{ margin: 0, flex: "0 0 220px" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "6px", display: "block" }}>Filter by Date</label>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <CustomDatePicker 
                        value={backupDateFilter}
                        onChange={setBackupDateFilter}
                        placeholder="ALL DATES"
                      />
                      {backupDateFilter && (
                        <button 
                          className="btn-ghost btn-sm" 
                          onClick={() => setBackupDateFilter("")}
                          style={{ padding: "8px 12px", border: "1px solid var(--border)", height: "38px" }}
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Client / Company</th>
                        <th>Stone ID</th>
                        <th>File Name</th>
                        <th>Upload Time</th>
                        <th style={{ textAlign: "center" }}>Backup Status</th>
                        <th style={{ textAlign: "right" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBackupJobs.map((j, idx) => {
                        const clientName = j.user || "unknown";
                        const filename = j.upload_filename || "";
                        
                        // Sanitize client name for matching local_files keys (exactly as Python does)
                        const safeClientName = clientName.trim().replace(/[^a-zA-Z0-9 ._-]/g, "_");
                        
                        // Check if file exists in local sync client list
                        const isBackedUp = localBackupData?.local_files?.[safeClientName]?.includes(filename) || false;
                        
                        return (
                          <tr key={`${j.id}-${idx}`}>
                            <td><strong>{clientName}</strong></td>
                            <td style={{ fontWeight: 600, color: "var(--primary)" }}>{j.stone_id}</td>
                            <td>
                              <span style={{ fontSize: "0.85rem", opacity: 0.85 }}>{filename || "no_file.adv"}</span>
                            </td>
                            <td style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                              {j.upload_time ? new Date(j.upload_time).toLocaleString('en-GB') : "-"}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {isBackedUp ? (
                                <span className="status-badge completed" style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                                  <CheckCircle2 size={12} /> Backed Up ✅
                                </span>
                              ) : (
                                <span className="status-badge queued" style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                                  <Clock size={12} /> Pending Backup ⏳
                                </span>
                              )}
                            </td>
                            <td style={{ textAlign: "right" }}>
                              {j.upload_available ? (
                                <button className="btn-primary btn-sm"
                                  onClick={() => downloadFile(`/admin/jobs/${j.id}/upload`, filename || `upload_${j.id}`)}>
                                  <Download size={13} /> Download
                                </button>
                              ) : <span className="muted">—</span>}
                            </td>
                          </tr>
                        );
                      })}
                      {!filteredBackupJobs.length && (
                        <tr><td colSpan={6}><div className="empty-state"><Package size={28} /><p>No matching files found</p></div></td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
          </div>
        )}

        {/* ── Double Confirmation Restore Modal ── */}
        {showConfirmRestoreModal && (
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center",
            justifyContent: "center", zIndex: 1100, backdropFilter: "blur(6px)"
          }}>
            <div className="panel" style={{ width: "500px", maxWidth: "90%", padding: "24px", border: "1px solid var(--border)", background: "var(--bg-card)", borderRadius: "var(--radius)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--danger)", marginBottom: "16px" }}>
                <AlertCircle size={28} />
                <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 700 }}>
                  Confirm {importMode === "replace" ? "Database Replacement" : importMode === "sync" ? "Smart Sync Action" : "Merge Action"}
                </h3>
              </div>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.6", color: "var(--text)", marginBottom: "16px" }}>
                You are about to import backup file <strong>{backupFile?.name}</strong> using <strong>{importMode.toUpperCase()}</strong> mode.
              </p>
              <div style={{ background: "rgba(239, 68, 68, 0.04)", border: "1px solid rgba(239, 68, 68, 0.15)", padding: "12px 16px", borderRadius: "8px", marginBottom: "20px" }}>
                {importMode === "replace" ? (
                  <p style={{ margin: 0, color: "var(--danger)", fontSize: "0.85rem", fontWeight: 600, lineHeight: "1.5" }}>
                    CRITICAL WARNING: This will completely WIPE and OVERWRITE all existing clients, pricing configuration history, active jobs, monthly invoices, recorded profits, and system activity logs! This action is irreversible (unless you use Undo right after).
                  </p>
                ) : importMode === "sync" ? (
                  <p style={{ margin: 0, color: "var(--danger)", fontSize: "0.85rem", fontWeight: 600, lineHeight: "1.5" }}>
                    INFORMATION: This will perform a smart sync. The system will match data and only insert items (users, jobs, invoices, profits) that do not already exist in your active database. No existing data will be overwritten or duplicated.
                  </p>
                ) : (
                  <p style={{ margin: 0, color: "var(--danger)", fontSize: "0.85rem", fontWeight: 600, lineHeight: "1.5" }}>
                    INFORMATION: This will safely MERGE and ADD the backup data (clients, jobs, configurations, profits, and invoices) alongside your existing data. Duplicate clients will be mapped cleanly, and all backup rows will be appended side-by-side without deleting any active database records!
                  </p>
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                <button className="btn-ghost" onClick={() => setShowConfirmRestoreModal(false)} disabled={importLoading}>
                  Cancel
                </button>
                <button 
                  className="btn-danger" 
                  onClick={handleImportBackup} 
                  disabled={importLoading}
                  style={{ padding: "0 20px", display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {importLoading ? <Loader2 size={16} className="spin" /> : <RefreshCw size={16} />} 
                  Yes, {importMode === "replace" ? "Overwrite & Replace" : importMode === "sync" ? "Sync & Import" : "Merge & Import"} Data
                </button>
              </div>
            </div>
          </div>
        )}

        {message && <div className="toast">{message}</div>}
      </div>
      {/* ── Mapping Modal ── */}
      {showMappingModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center",
          justifyContent: "center", zIndex: 1000, backdropFilter: "blur(4px)"
        }}>
          <div className="panel" style={{ width: "600px", maxWidth: "90%", padding: "24px", position: "relative" }}>
            <h3 style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <FileSpreadsheet size={24} className="blue" /> Column Mapping
            </h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {/* Left Side: Table */}
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--primary)", marginBottom: "16px", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>
                  Select From Table
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="filter-group">
                    <label>Field 1</label>
                    <CustomSelect 
                      options={[
                        { label: "Stone ID", value: "Stone ID" },
                        { label: "Weight", value: "Weight" },
                        { label: "User", value: "User" }
                      ]}
                      value={mapping.tableField1}
                      onChange={(val) => setMapping(prev => ({ ...prev, tableField1: val }))}
                    />
                  </div>
                  <div className="filter-group">
                    <label>Field 2</label>
                    <CustomSelect 
                      options={[
                        { label: "Stone ID", value: "Stone ID" },
                        { label: "Weight", value: "Weight" },
                        { label: "User", value: "User" }
                      ]}
                      value={mapping.tableField2}
                      onChange={(val) => setMapping(prev => ({ ...prev, tableField2: val }))}
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Excel */}
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--success)", marginBottom: "16px", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>
                  Select From Excel
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="filter-group">
                    <label>Excel Column</label>
                    <CustomSelect 
                      options={Array.from({ length: 10 }, (_, i) => ({ label: `Column ${i + 1}`, value: `Column ${i + 1}` }))}
                      value={mapping.excelCol1}
                      onChange={(val) => setMapping(prev => ({ ...prev, excelCol1: val }))}
                    />
                  </div>
                  <div className="filter-group">
                    <label>Excel Column</label>
                    <CustomSelect 
                      options={Array.from({ length: 10 }, (_, i) => ({ label: `Column ${i + 1}`, value: `Column ${i + 1}` }))}
                      value={mapping.excelCol2}
                      onChange={(val) => setMapping(prev => ({ ...prev, excelCol2: val }))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end", gap: "12px" }}>
              <button className="btn-ghost" onClick={() => setShowMappingModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={confirmBulkUpdate}>
                Confirm & Update
              </button>
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
                Generating report for <strong>{reportConfig.company_name}</strong>
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

      {/* ── Add Client Modal ── */}
      {showAddClientModal && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: 460 }}>
            <div className="modal-header">
              <div className="panel-title">
                <UserPlus size={20} className="text-primary" />
                <h3>Add New Client</h3>
              </div>
              <button onClick={() => setShowAddClientModal(false)} className="btn-icon">
                <XCircle size={20} />
              </button>
            </div>
            
            <form onSubmit={handleRegisterClient}>
              <div className="modal-body">
                <p style={{ marginBottom: 20, color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Create a secure, dedicated client portal account. The client will be able to log in to view their processing statement, real-time jobs, and invoices.
                </p>

                {registerError && (
                  <div style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: "var(--failed-bg)",
                    color: "var(--failed)",
                    fontSize: "0.85rem",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <AlertCircle size={16} />
                    <span>{registerError}</span>
                  </div>
                )}

                {registerSuccess && (
                  <div style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: "var(--completed-bg)",
                    color: "var(--completed)",
                    fontSize: "0.85rem",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <CheckCircle2 size={16} />
                    <span>{registerSuccess}</span>
                  </div>
                )}

                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Surat Gems & Co."
                    value={registerForm.company_name}
                    onChange={(e) => setRegisterForm({ ...registerForm, company_name: e.target.value })}
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. suratgems"
                    value={registerForm.username}
                    onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div style={{ position: "relative", width: "100%" }}>
                    <input
                      type={showRegPwd ? "text" : "password"}
                      required
                      placeholder="Enter safe password"
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                      autoComplete="new-password"
                      style={{ paddingRight: 42 }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegPwd(!showRegPwd)}
                      style={{
                        position: "absolute", right: 8, top: 11,
                        background: "none", border: "none", padding: 4,
                        color: "var(--text-light)", cursor: "pointer",
                        display: "flex", alignItems: "center"
                      }}
                    >
                      {showRegPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setShowAddClientModal(false)} className="btn-outline">Cancel</button>
                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={registerLoading}
                >
                  {registerLoading ? <Loader2 className="spin" size={16} /> : <UserPlus size={16} />}
                  {registerLoading ? "Saving..." : "Add Client"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Shell>
  );
}

