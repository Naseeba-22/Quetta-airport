import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import FlightCard from "../components/FlightCard";
import { flights } from "../data/mockData";

function Flights() {
  const [tab, setTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("today");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [visibleCount, setVisibleCount] = useState(5);
  const [quickFilter, setQuickFilter] = useState("all");

  // Date navigation functions
  const goToYesterday = () => {
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    setCurrentDate(yesterday);
    setSelectedDate("yesterday");
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate("today");
  };

  const goToTomorrow = () => {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCurrentDate(tomorrow);
    setSelectedDate("tomorrow");
  };

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Format date for comparison (YYYY-MM-DD)
  const formatDateForCompare = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Short date format
  const formatShortDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    });
  };

  // Filter flights
  const filteredFlights = flights.filter((flight) => {
    // Tab filter (Arrival/Departure)
    const matchesTab = tab === "All" || flight.type === tab;

    // Search filter
    const matchesSearch =
      flight.flight.toLowerCase().includes(search.toLowerCase()) ||
      flight.airline.toLowerCase().includes(search.toLowerCase()) ||
      flight.to.toLowerCase().includes(search.toLowerCase()) ||
      flight.from.toLowerCase().includes(search.toLowerCase());

    // Date filter
    const flightDate = flight.date;
    const selectedDateFormatted = formatDateForCompare(currentDate);
    const matchesDate = flightDate === selectedDateFormatted;

    // Quick filter (Domestic/International/Status)
    let matchesQuickFilter = true;
    if (quickFilter === "domestic") {
      matchesQuickFilter = flight.category === "Domestic";
    } else if (quickFilter === "international") {
      matchesQuickFilter = flight.category === "International";
    } else if (quickFilter === "on-time") {
      matchesQuickFilter = flight.status === "On Time";
    } else if (quickFilter === "delayed") {
      matchesQuickFilter = flight.status === "Delayed";
    } else if (quickFilter === "cancelled") {
      matchesQuickFilter = flight.status === "Cancelled";
    }

    return matchesTab && matchesSearch && matchesDate && matchesQuickFilter;
  });

  const visibleFlights = filteredFlights.slice(0, visibleCount);
  const hasMore = filteredFlights.length > visibleCount;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">FLIGHT INFORMATION</span>
          <h1>Arrivals & Departures</h1>
          <p>Check flight information at Quetta Airport.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Date Navigation */}
          <div className="date-navigation">
            <button
              className={`date-nav-btn ${selectedDate === "yesterday" ? "active" : ""}`}
              onClick={goToYesterday}
            >
              <ChevronLeft size={16} />
              <span>Yesterday</span>
              <span className="date-label">
                {formatShortDate(new Date(currentDate.getTime() - 86400000))}
              </span>
            </button>

            <button
              className={`date-nav-btn today ${selectedDate === "today" ? "active" : ""}`}
              onClick={goToToday}
            >
              <span>Today</span>
              <span className="date-label">{formatShortDate(new Date())}</span>
            </button>

            <button
              className={`date-nav-btn ${selectedDate === "tomorrow" ? "active" : ""}`}
              onClick={goToTomorrow}
            >
              <span>Tomorrow</span>
              <span className="date-label">
                {formatShortDate(new Date(currentDate.getTime() + 86400000))}
              </span>
              <ChevronRight size={16} />
            </button>
          </div>

          <SectionTitle
            title={`Flights - ${formatDate(currentDate)}`}
            description="Search and filter available flight information."
          />

          {/* Quick Filters */}
          <div className="quick-filters">
            <button
              className={`quick-filter-btn ${quickFilter === "all" ? "active" : ""}`}
              onClick={() => setQuickFilter("all")}
            >
              All Flights
            </button>
            <button
              className={`quick-filter-btn ${quickFilter === "domestic" ? "active" : ""}`}
              onClick={() => setQuickFilter("domestic")}
            >
              Domestic
            </button>
            <button
              className={`quick-filter-btn ${quickFilter === "international" ? "active" : ""}`}
              onClick={() => setQuickFilter("international")}
            >
              International
            </button>
            <button
              className={`quick-filter-btn ${quickFilter === "on-time" ? "active" : ""}`}
              onClick={() => setQuickFilter("on-time")}
            >
              On Time
            </button>
            <button
              className={`quick-filter-btn ${quickFilter === "delayed" ? "active" : ""}`}
              onClick={() => setQuickFilter("delayed")}
            >
              Delayed
            </button>
            <button
              className={`quick-filter-btn ${quickFilter === "cancelled" ? "active" : ""}`}
              onClick={() => setQuickFilter("cancelled")}
            >
              Cancelled
            </button>
          </div>

          <div className="flight-controls">
            <div className="tabs">
              {["All", "Arrival", "Departure"].map((item) => (
                <button
                  key={item}
                  className={tab === item ? "active" : ""}
                  onClick={() => setTab(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="table-search">
              <Search size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search flights..."
              />
            </div>
          </div>

          <div className="flight-board">
            <div className="flight-board-head">
              <span>Flight</span>
              <span>Airline</span>
              <span>Route</span>
              <span>Time</span>
              <span>Status</span>
            </div>

            {visibleFlights.length > 0 ? (
              visibleFlights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))
            ) : (
              <div className="empty-state">No flights found.</div>
            )}
          </div>

          {/* View All Flights Button */}
          {hasMore && (
            <div className="center-btn">
              <button className="btn-view-all" onClick={loadMore}>
                View All Flights
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Flights;