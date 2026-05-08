import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddNews from "./pages/AddNews";
import SingleNews from "./pages/SingleNews";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <>
      {/* 🔝 NAVBAR */}
      <Navbar />

      {/* 📌 MAIN ROUTES */}
      <Routes>
        {/* 🏠 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<h1>📰 News Page</h1>} />
        <Route path="/news/:id" element={<SingleNews />} />

        {/* 🔐 AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🚨 PROTECTED ROUTE */}
        <Route
          path="/add-news"
          element={
            <ProtectedRoute>
              <AddNews />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* 🔻 FOOTER */}
      <Footer />
    </>
  );
}