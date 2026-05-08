const News = require("../models/News");

// 🟢 CREATE NEWS
exports.createNews = async (req, res) => {
  try {
    const { title, description, category, image, isTopNews } = req.body;

    const news = await News.create({
      title,
      description,
      category,
      image,
      isTopNews,
    });

    res.status(201).json({
      message: "News created successfully",
      news,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 GET ALL NEWS
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 GET SINGLE NEWS
exports.getSingleNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 DELETE NEWS
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};