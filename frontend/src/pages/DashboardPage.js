// frontend/src/pages/DashboardPage.js
import React, { useEffect, useState } from "react";
import Sidebar from "../components/SideBar/Sidebar";
import TopNavbar from "../components/Navbar/TopNavbar";
import { useAuth } from "../context/AuthContext.js";
import api from "../api";

const DashboardPage = () => {
  const { user, refreshUser } = useAuth();
  const [ledger, setLedger] = useState([]);
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    const load = async () => {
      // done by chat: added try/catch to handle API errors when loading ledger
      try {
        const res = await api.get("/skills/ledger/me");
        setWalletBalance(res.data.walletBalance);
        setLedger(res.data.transactions);
        await refreshUser();
      } catch (err) {
        console.error("Failed to load ledger", err);
      }
    };
    load();
  }, [refreshUser]);

  if (!user) return null;

  return (
    <div className="page dashboard-page">
      <TopNavbar />
      <div className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-main">
          <h1>Dashboard</h1>

          <div className="dashboard-content">
            <div className="skills-section">
              <h2>Skills Offered</h2>
              <div className="chip-row">
                {user.skillsOffered?.map((s) => (
                  <span key={s._id || s.name} className="chip">
                    {s.name}
                  </span>
                ))}
              </div>

              <h2>Skills Needed</h2>
              <div className="chip-row">
                {user.skillsNeeded?.map((s, idx) => (
                  <span key={idx} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar-circle">{user.name[0]}</div>
                <div>
                  <h3>{user.name}</h3>
                  <p>I love exchanging skills on ChronoTrade</p>
                </div>
              </div>
              <hr />
              <div className="wallet">
                <span>Wallet Balance</span>
                <h2>{walletBalance} hrs</h2>
              </div>
            </div>
          </div>

          <div className="dashboard-actions">
            <button className="btn-primary">Find Skills</button>
            <button className="btn-outline">Offer Skill</button>
            <button className="btn-outline">Request Exchange</button>
          </div>

          <div className="ledger-section">
            <h2>Recent Transactions</h2>
            {ledger.length === 0 && <p>No transactions yet.</p>}
            {ledger.map((tx) => (
              <div key={tx._id} className="ledger-item">
                <div>
                  <strong>{tx.skill?.name}</strong>
                  <div className="ledger-meta">
                    {tx.hours} hrs • {new Date(tx.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
