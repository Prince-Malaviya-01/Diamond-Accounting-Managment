import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

const CustomDatePicker = ({ value, onChange, placeholder = "SELECT DATE", min = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState('days'); // 'days' | 'months' | 'years'
  const [viewDate, setViewDate] = useState(value ? new Date(value) : new Date());
  const containerRef = useRef(null);

  const minDateObj = min ? new Date(min) : null;
  if (minDateObj) minDateObj.setHours(0, 0, 0, 0);

  const isBeforeMin = (day) => {
    if (!minDateObj) return false;
    const current = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    current.setHours(0, 0, 0, 0);
    return current < minDateObj;
  };

  const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const years = [];
  const startYear = viewDate.getFullYear() - 10;
  for (let i = 0; i < 20; i++) years.push(startYear + i);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setViewMode('days');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = (e) => {
    e.stopPropagation();
    if (viewMode === 'days') {
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1));
    } else if (viewMode === 'years') {
      setViewDate(new Date(viewDate.getFullYear() - 20, viewDate.getMonth()));
    }
  };

  const handleNextMonth = (e) => {
    e.stopPropagation();
    if (viewMode === 'days') {
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1));
    } else if (viewMode === 'years') {
      setViewDate(new Date(viewDate.getFullYear() + 20, viewDate.getMonth()));
    }
  };

  const handleDateClick = (day) => {
    if (isBeforeMin(day)) return;
    const selectedDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    const y = selectedDate.getFullYear();
    const m = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const d = String(selectedDate.getDate()).padStart(2, '0');
    const formattedDate = `${y}-${m}-${d}`;
    onChange(formattedDate);
    setIsOpen(false);
  };

  const handleMonthSelect = (monthIdx) => {
    setViewDate(new Date(viewDate.getFullYear(), monthIdx));
    setViewMode('days');
  };

  const handleYearSelect = (year) => {
    setViewDate(new Date(year, viewDate.getMonth()));
    setViewMode('days');
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      viewDate.getMonth() === today.getMonth() &&
      viewDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day) => {
    if (!value) return false;
    const d = new Date(value);
    return (
      day === d.getDate() &&
      viewDate.getMonth() === d.getMonth() &&
      viewDate.getFullYear() === d.getFullYear()
    );
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth());
    const firstDay = getFirstDayOfMonth(viewDate.getFullYear(), viewDate.getMonth());
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const disabled = isBeforeMin(d);
      days.push(
        <div
          key={d}
          className={`calendar-day ${isToday(d) ? 'today' : ''} ${isSelected(d) ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
          onClick={() => handleDateClick(d)}
        >
          {d}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="custom-datepicker-container" ref={containerRef}>
      <div 
        className={`datepicker-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CalendarIcon size={14} className="trigger-icon" />
        <span className="trigger-value">
          {value ? new Date(value).toLocaleDateString('en-GB').toUpperCase() : placeholder}
        </span>
      </div>

      {isOpen && (
        <div className="calendar-popup animate-fade-in-up">
          <div className="calendar-header">
            <button onClick={handlePrevMonth} className="nav-btn"><ChevronLeft size={18} /></button>
            <div className="current-month">
              <span className="month-label" onClick={() => setViewMode(viewMode === 'months' ? 'days' : 'months')}>
                {months[viewDate.getMonth()]}
              </span>
              {" "}
              <span className="year-label" onClick={() => setViewMode(viewMode === 'years' ? 'days' : 'years')}>
                {viewDate.getFullYear()}
              </span>
            </div>
            <button onClick={handleNextMonth} className="nav-btn"><ChevronRight size={18} /></button>
          </div>
          
          {viewMode === 'days' && (
            <>
              <div className="days-header">
                {daysOfWeek.map(d => <div key={d} className="day-name">{d}</div>)}
              </div>
              <div className="days-grid">
                {renderDays()}
              </div>
            </>
          )}

          {viewMode === 'months' && (
            <div className="selection-grid month">
              {months.map((m, i) => (
                <div 
                  key={m} 
                  className={`selection-item ${viewDate.getMonth() === i ? 'selected' : ''}`}
                  onClick={() => handleMonthSelect(i)}
                >
                  {m.substring(0, 3)}
                </div>
              ))}
            </div>
          )}

          {viewMode === 'years' && (
            <div className="selection-grid year">
              {years.map(y => (
                <div 
                  key={y} 
                  className={`selection-item ${viewDate.getFullYear() === y ? 'selected' : ''}`}
                  onClick={() => handleYearSelect(y)}
                >
                  {y}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-datepicker-container {
          position: relative;
          width: 100%;
          user-select: none;
        }

        .datepicker-trigger {
          display: flex;
          align-items: center;
          gap: 12px;
          height: 38px;
          padding: 0 14px;
          background-color: var(--bg-card); /* Opaque background */
          border: 2px solid var(--primary-light);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .datepicker-trigger:hover {
          border-color: var(--primary);
          background-color: var(--primary-bg);
        }

        .datepicker-trigger.active {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
          background-color: var(--bg-card);
        }

        .trigger-icon {
          color: var(--primary);
        }

        .trigger-value {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text);
          letter-spacing: 0.05em;
        }

        .calendar-popup {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 280px;
          background-color: #ffffff; /* Solid White for Light Mode */
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow-lg);
          z-index: 10001;
          padding: 16px;
          animation: fadeInUp 0.3s ease;
        }

        /* Dark Mode Override */
        [data-theme='dark'] .calendar-popup {
          background-color: #1e293b; /* Solid Dark for Dark Mode */
        }

        /* Selection Items also need solid background to match */
        .selection-item, .calendar-day {
           background-color: transparent;
        }

        [data-theme='dark'] .datepicker-trigger {
          background-color: #1e293b;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .nav-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-btn:hover {
          background: var(--primary-bg);
          color: var(--primary);
        }

        .current-month {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text);
          letter-spacing: 0.05em;
        }

        .days-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          margin-bottom: 8px;
        }

        .day-name {
          text-align: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-secondary);
          padding: 4px 0;
        }

        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 2px;
        }

        .calendar-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.2s;
          color: var(--text);
        }

        .calendar-day:hover:not(.empty) {
          background: var(--primary-bg);
          color: var(--primary);
        }

        .calendar-day.today {
          color: var(--primary);
          font-weight: 700;
          background: var(--primary-bg);
        }

        .calendar-day.selected {
          background: var(--primary) !important;
          color: white !important;
          font-weight: 700;
        }

        .calendar-day.disabled {
          opacity: 0.3;
          cursor: not-allowed;
          background: transparent !important;
          color: var(--text-light) !important;
        }

        .calendar-day.empty {
          cursor: default;
        }

        .selection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          padding: 8px 0;
        }

        .selection-item {
          padding: 10px;
          text-align: center;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 8px;
          color: var(--text);
          transition: all 0.2s;
        }

        .selection-item:hover {
          background: var(--primary-bg);
          color: var(--primary);
        }

        .selection-item.selected {
          background: var(--primary);
          color: white;
        }

        .month-label, .year-label {
          cursor: pointer;
          padding: 2px 6px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .month-label:hover, .year-label:hover {
          background: var(--primary-bg);
          color: var(--primary);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default CustomDatePicker;
