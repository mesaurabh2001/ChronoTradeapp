// frontend/src/components/SkillCard.js
import React from "react";

const SkillCard = ({ skill, onWatchlist, onStart }) => {
  return (
    <div className="skill-card">
      <div className="skill-illustration" />
      <div className="skill-info">
        <h3>{skill.name}</h3>
        <p className="skill-teacher">by {skill.teacher?.name || "Tutor"}</p>
        <p className="skill-credit">
          {skill.timeCredit} time credit{skill.timeCredit > 1 ? "s" : ""}
        </p>
      </div>
      <div className="skill-actions">
        <button className="btn-outline" onClick={() => onWatchlist(skill)}>
          Watchlist
        </button>
        <button className="btn-primary" onClick={() => onStart(skill)}>
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
