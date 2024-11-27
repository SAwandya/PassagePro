const express = require("express");
const router = express.Router();
const { Route, validate } = require("../models/route");

// Create a new route
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let route = new Route({
    from: req.body.from,
    to: req.body.to,
    distance: req.body.distance,
    estimatedTime: req.body.estimatedTime,
  });

  try {
    route = await route.save();
    res.send(route);
  } catch (ex) {
    res.status(500).send("Something went wrong.");
  }
});

// Get all routes
router.get("/", async (req, res) => {
  try {
    const routes = await Route.find().sort("from");
    res.send(routes);
  } catch (ex) {
    res.status(500).send("Something went wrong.");
  }
});

// Get a single route by ID
router.get("/:id", async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);
    if (!route) return res.status(404).send("Route not found.");
    res.send(route);
  } catch (ex) {
    res.status(500).send("Something went wrong.");
  }
});

// Update a route by ID
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const route = await Route.findByIdAndUpdate(
      req.params.id,
      {
        from: req.body.from,
        to: req.body.to,
        distance: req.body.distance,
        estimatedTime: req.body.estimatedTime,
      },
      { new: true }
    );

    if (!route) return res.status(404).send("Route not found.");
    res.send(route);
  } catch (ex) {
    res.status(500).send("Something went wrong.");
  }
});

// Delete a route by ID
router.delete("/:id", async (req, res) => {
  try {
    const route = await Route.findByIdAndRemove(req.params.id);
    if (!route) return res.status(404).send("Route not found.");
    res.send(route);
  } catch (ex) {
    res.status(500).send("Something went wrong.");
  }
});

module.exports = router;
