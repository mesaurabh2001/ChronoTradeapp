import React from "react";

const SidebarSettings = () => {
  const toggles = [
    { label: "Email notifications", value: true },
    { label: "Weekly digest", value: false },
    { label: "Two-factor sign in", value: true },
  ];

  return (
    <section className="sidebar-page">
      <h1>Settings</h1>
      <p>These toggles are placeholders until real preferences hook up.</p>
      <ul>
        {toggles.map((toggle) => (
          <li key={toggle.label}>
            <strong>{toggle.label}</strong>: {toggle.value ? "On" : "Off"}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SidebarSettings;
