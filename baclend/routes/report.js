const express = require("express");
const router = express.Router();
const reports = require("../models/reports");
const reportReasons = require("../config/report_reasons.json");

router.post("/", (req, res) => {
  const { targetUsername, reason } = req.body;
  const reporterUsername = req.user.username;
  if (!reportReasons.includes(reason)) {
    return res.status(400).json({ message: "無効な報告理由です" });
  }
  reports.push({
    target: targetUsername,
    reporter: reporterUsername,
    reason,
    date: new Date().toISOString()
  });
  res.json({ message: "報告を受け付けました" });
});
module.exports = router;
