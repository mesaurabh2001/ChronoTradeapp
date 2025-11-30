import React from "react";

const SidebarWishList = () => {
  const wishes = [
    { skill: "Photography Basics", urgency: "Soon" },
    { skill: "Spanish Practice", urgency: "Flexible" },
  ];

  return (
    <section className="sidebar-page">
      <h1>Wish List</h1>
      <p>Snapshot of the skills you are currently hunting for.</p>
      <div className="card">
        {wishes.map((wish) => (
          <div key={wish.skill} className="wish-item">
            <strong>{wish.skill}</strong>
            <span>{wish.urgency}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SidebarWishList;
