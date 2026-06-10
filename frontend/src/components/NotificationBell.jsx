import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Bell, Check, Loader2 } from "lucide-react";
import api from "../api";

export default function NotificationBell() {
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState([]);
  const dropdownRef = useRef(null);
  const isFirstFetchRef = useRef(true);
  const notifiedIdsRef = useRef(new Set());

  // Fetch count and list
  const fetchData = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const countRes = await api.get("/notifications/unread-count");
      const listRes = await api.get("/notifications");

      const newCount = countRes.data.count;
      const listData = listRes.data;

      // On initial fetch, just record all existing IDs so we don't toast them
      if (isFirstFetchRef.current) {
        listData.forEach(n => {
          notifiedIdsRef.current.add(n.id);
        });
        isFirstFetchRef.current = false;
      } else {
        // Find newly arrived unread notifications that we haven't toasted yet
        const newUnreadItems = listData.filter(
          n => !n.is_read && !notifiedIdsRef.current.has(n.id)
        );

        newUnreadItems.forEach(item => {
          showToast(item.title, item.message);
          notifiedIdsRef.current.add(item.id); // Mark as toasted
        });
      }

      setUnreadCount(newCount);
      setNotifications(listData);
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
    } finally {
      if (!silent) setLoading(false);
    }
  };

  const showToast = (title, message) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, title, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  };

  // Mark all as read
  const handleMarkAllRead = async () => {
    try {
      await api.post("/notifications/mark-read");
      setUnreadCount(0);
      setNotifications(prev => prev.map(n => ({ ...n, is_read: true })));
    } catch (err) {
      console.error("Failed to mark notifications read:", err);
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Poll for notifications
  useEffect(() => {
    fetchData(true); // Initial silent fetch
    const interval = setInterval(() => {
      fetchData(true);
    }, 20000); // every 20 seconds
    return () => clearInterval(interval);
  }, []);

  // Format timestamp relative
  const formatTime = (isoString) => {
    try {
      const date = new Date(isoString);
      const diffMs = Date.now() - date.getTime();
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMins / 60);
      
      if (diffMins < 1) return "Just now";
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
    } catch (e) {
      return "";
    }
  };

  return (
    <div className="notification-bell-container" ref={dropdownRef}>
      {/* Bell Button */}
      <button 
        className={`btn-icon bell-btn ${isOpen ? "active" : ""}`}
        onClick={() => {
          setIsOpen(!isOpen);
          fetchData(true);
        }}
        title="Notifications"
        style={{ position: "relative" }}
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="bell-badge">{unreadCount}</span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="notification-dropdown">
          <div className="dropdown-header">
            <h4>Notifications</h4>
            {unreadCount > 0 && (
              <button className="mark-read-btn" onClick={handleMarkAllRead}>
                <Check size={12} /> Mark read
              </button>
            )}
          </div>
          
          <div className="dropdown-list">
            {loading ? (
              <div className="dropdown-loading">
                <Loader2 size={16} className="spin" />
              </div>
            ) : notifications.length === 0 ? (
              <div className="dropdown-empty">
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map((n) => (
                <div key={n.id} className={`notification-item ${n.is_read ? "read" : "unread"}`}>
                  <div className="item-dot" />
                  <div className="item-content">
                    <div className="item-title">{n.title}</div>
                    <div className="item-msg">{n.message}</div>
                    <div className="item-time">{formatTime(n.created_at)}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Float Toasts */}
      {createPortal(
        <div className="toast-notifications-container">
          {toasts.map(t => (
            <div key={t.id} className="toast-notification">
              <div className="toast-title">{t.title}</div>
              <div className="toast-message">{t.message}</div>
            </div>
          ))}
        </div>,
        document.body
      )}
    </div>
  );
}
