import React from "react";

const SidebarCourses = () => {
  const upcoming = [
    { title: "Time Banking 101", date: "Dec 02" },
    { title: "Advanced Skill Swaps", date: "Dec 08" },
  ];

  return (
    <section className="sidebar-page">
      <h1>Courses</h1>
      <p>Keep learning new tricks to trade more efficiently.</p>
      <div className="card">
        <h3>Upcoming sessions</h3>
        <ul>
          {upcoming.map((course) => (
            <li key={course.title}>
              <strong>{course.title}</strong> — {course.date}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SidebarCourses;
