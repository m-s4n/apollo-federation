const express = require("express");
const {
  getMissionById,
  getMissions,
  getMissionByAstronautId
 } = require("../../controllers/missionController");

const router = express.Router();
router.get("/missions/:id", getMissionById);
router.get("/missions",getMissions);
router.get("/missions/astronaut/:astronautId",getMissionByAstronautId);


module.exports = router;
