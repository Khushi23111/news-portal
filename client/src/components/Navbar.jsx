import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(localStorage.getItem("token"));

  // 🔄 IMPORTANT FIX: auto update check
  useEffect(() => {
    const checkUser = () => {
      setUser(localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkUser);

    return () => {
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  // 🚪 logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#111",
        color: "white",
      }}
    >
      {/* LOGO */}
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        📰 NewsPortal
      </h2>

      {/* MENU */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/news")}>News</span>

        {user && (
          <span onClick={() => navigate("/add-news")}>
            Add News
          </span>
        )}

        {!user ? (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
}