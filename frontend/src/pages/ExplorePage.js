// frontend/src/pages/ExplorePage.js
import React, { useEffect, useState } from "react";
import TopNavbar from "../components/Navbar/TopNavbar";
import SkillCard from "../components/SkillCard/SkillCard";
import api from "../api";
import { useAuth } from "../context/AuthContext";

const ExplorePage = () => {
  const [skills, setSkills] = useState([]);
  const [query, setQuery] = useState("");
  const { refreshUser } = useAuth();

  const loadSkills = async (search = "") => {
    // done by chat: added try/catch to handle API errors
    try {
      const res = await api.get("/skills/search", {
        params: { q: search }
      });
      setSkills(res.data);
    } catch (err) {
      console.error("Failed to load skills", err);
      setSkills([]);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const handleWatchlist = async (skill) => {
    await api.post(`/skills/${skill._id}/watchlist`);
    await refreshUser();
    alert("Added to wishlist");
  };

  const handleStart = async (skill) => {
    try {
      await api.post(`/skills/${skill._id}/start`, { hours: 1 });
      await refreshUser();
      alert("Session completed! Credits transferred.");
    } catch (err) {
      alert(err.response?.data?.message || "Unable to start session");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    loadSkills(query);
  };

  return (
    <div className="page explore-page">
      <TopNavbar />
      <div className="explore-header">
        <button className="hamburger">☰</button>
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search skills..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
        <button className="icon-btn">❤️</button>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill._id}
            skill={skill}
            onWatchlist={handleWatchlist}
            onStart={handleStart}
          />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
