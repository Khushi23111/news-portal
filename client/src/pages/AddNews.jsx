import { useState } from "react";
import api from "../services/api";

export default function AddNews() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await api.post(
        "/news",
        {
          title,
          description,
          category,
          isTopNews: false
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("SUCCESS:", res.data);
      alert("News added successfully");

      setTitle("");
      setDescription("");
      setCategory("");
    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
      alert("News add failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📰 Add News</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add News</button>
      </form>
    </div>
  );
}