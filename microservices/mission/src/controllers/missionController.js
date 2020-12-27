const {
  getMissionById,
  getMissions,
  getMissionByAstronautId
} = require("../services/missionService");

module.exports = {
  getMissionById: (req, res) => {
    getMissionById(req.params, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Database connection error.",
        });
      }
      return res.status(200).json(result);
    });
  },
  getMissions: (req, res) => {
    getMissions((err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Database connection error.",
        });
      }
      return res.status(200).json(result);
    });
  },
  getMissionByAstronautId: (req, res) => {
    getMissionByAstronautId(req.params, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Database connection error.",
        });
      }
      return res.status(200).json(result);
    });
  }
};
