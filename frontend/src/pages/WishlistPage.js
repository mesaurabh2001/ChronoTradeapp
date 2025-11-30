// frontend/src/pages/WishlistPage.js
import React, { useEffect, useState } from "react";
import TopNavbar from "../components/Navbar/TopNavbar";
import { useAuth } from "../context/AuthContext";
import api from "../api";

const WishlistPage = () => {
  const { user, refreshUser } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const load = async () => {
      await refreshUser();
      const res = await api.get("/auth/me");
      setWishlist(res.data.user.wishlist || []);
    };
    load();
  }, [refreshUser]);

  return (
    <div className="page wishlist-page">
      <TopNavbar />
      <div className="wishlist-header">
        <button className="hamburger">☰</button>
        <h1>Wishlist</h1>
        <div className="wishlist-icons">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn">🏠</button>
        </div>
      </div>

      <div className="wishlist-list">
        {wishlist.length === 0 && <p>No items in wishlist.</p>}
        {wishlist.map((s) => (
          <div key={s._id} className="wishlist-item">
            <div className="avatar-circle">{s.name[0]}</div>
            <div className="wishlist-info">
              <h3>{s.name}</h3>
              <p>{s.timeCredit} hr credit</p>
            </div>
            <button className="btn-primary">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
