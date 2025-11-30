import React from "react";

const SidebarReport = () => {
  const stats = [
    { label: "Completed exchanges", value: 12 },
    { label: "Hours earned", value: 37 },
    { label: "Hours spent", value: 21 },
  ];

  return (
    <section className="sidebar-page">
      <h1>Report</h1>
      <p>High-level look at how your time credits move around.</p>
      <div className="card">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-row">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SidebarReport;
