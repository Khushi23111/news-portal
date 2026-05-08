import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function SingleNews() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await api.get(`/news/${id}`);
      setNews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!news) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{news.title}</h1>
      <p>{news.description}</p>
      <small>{news.category}</small>
    </div>
  );
}