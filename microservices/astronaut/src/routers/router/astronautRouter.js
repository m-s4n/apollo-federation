const express = require("express");
const {
  getAstronautById,
  getAstronauts
 } = require("../../controllers/astronautController");

const router = express.Router();
router.get("/astronauts/:id", getAstronautById);
router.get("/astronauts",getAstronauts);


module.exports = router;
