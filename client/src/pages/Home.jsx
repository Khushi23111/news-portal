import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await api.get("/news");
      setNews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px", background: "#f5f6fa", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        📰 Latest News Portal
      </h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {news.map((item) => (
          <div
            key={item._id}
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            {/* CATEGORY BADGE */}
            <span
              style={{
                background: "#007bff",
                color: "white",
                padding: "3px 8px",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              {item.category}
            </span>

            {/* TITLE */}
            <h2 style={{ marginTop: "10px" }}>{item.title}</h2>

            {/* DESCRIPTION */}
            <p style={{ color: "#555" }}>
              {item.description.substring(0, 100)}...
            </p>

            {/* BUTTON */}
            <button
              style={{
                marginTop: "10px",
                background: "#28a745",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = `/news/${item._id}`)}
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}