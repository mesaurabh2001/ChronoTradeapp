import React from "react";

const SidebarGettingStarted = () => {
  const checklist = [
    "Complete your profile",
    "List two skills you can offer",
    "Add at least one skill you need",
    "Send a hello message to a nearby trader",
  ];

  return (
    <section className="sidebar-page">
      <h1>Getting Started</h1>
      <p>Quick onboarding steps to unlock the best matches.</p>
      <ol>
        {checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
};

export default SidebarGettingStarted;
