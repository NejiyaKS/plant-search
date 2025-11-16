const express = require("express");
const router = express.Router();
const plants = require("../data/plants");

// GET /api
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Plant API!" });
});

// GET /api/plants
router.get("/plants", (req, res) => {
  const { name, type, price } = req.query;
  let filtered = plants;

  if (name) filtered = filtered.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  if (type) filtered = filtered.filter(p => p.type.toLowerCase() === type.toLowerCase());
  if (price) filtered = filtered.filter(p => p.price <= parseInt(price));

  res.json(filtered);
});

// GET /api/plants/:id
router.get("/plants/:id", (req, res) => {
  const plant = plants.find(p => p.id === parseInt(req.params.id));
  plant ? res.json(plant) : res.status(404).json({ error: "Plant not found" });
});

module.exports = router;