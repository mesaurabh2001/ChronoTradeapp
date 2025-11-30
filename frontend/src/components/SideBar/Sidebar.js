// frontend/src/components/Sidebar.js
import React from "react";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className="sidebar-card">
      <ul>
        <li>👤 Profile</li>
        <li>📚 Courses</li>
        <li>❤️ Wish List</li>
        <li>📊 Report</li>
        <li>🚀 Getting Started</li>
        <li>⚙️ Settings</li>
        <li>↩️ Log Out (top right)</li>
      </ul>
      {user && (
        <div className="sidebar-user">
          <div className="avatar-circle">{user.name[0]}</div>
          <div>
            <div className="sidebar-username">{user.name}</div>
            <div className="sidebar-email">{user.email}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
