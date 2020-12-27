const {
  getAstronautById,
  getAstronauts,
} = require("../services/astronautService");

module.exports = {
  getAstronautById: (req, res) => {
    getAstronautById(req.params, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Database connection error.",
        });
      }
      return res.status(200).json(result);
    });
  },
  getAstronauts: (req, res) => {
    getAstronauts((err, result) => {
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
