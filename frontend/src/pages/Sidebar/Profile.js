import React from "react";

const SidebarProfile = () => {
  const mockProfile = {
    name: "Alex Doe",
    role: "Full-stack barter expert",
    badges: ["Top Mentor", "Fast Responder"],
  };

  return (
    <section className="sidebar-page">
      <h1>Profile</h1>
      <p>Review and polish how other traders see you.</p>
      <div className="card">
        <h2>{mockProfile.name}</h2>
        <p>{mockProfile.role}</p>
        <h3>Badges</h3>
        <ul>
          {mockProfile.badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SidebarProfile;
