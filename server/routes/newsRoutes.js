const express = require("express");
const router = express.Router();

const {
  createNews,
  getAllNews,
  getSingleNews,
  deleteNews,
} = require("../controllers/newsController");

const authMiddleware = require("../middleware/authMiddleware");

// 🟢 PUBLIC ROUTES
router.get("/", getAllNews);
router.get("/:id", getSingleNews);

// 🔐 PROTECTED ROUTES
router.post("/", authMiddleware, createNews);
router.delete("/:id", authMiddleware, deleteNews);

module.exports = router;