const express = require("express");
const router = express.Router();
const fetchUser = require("../middlewares/fetchUser");
const Ticket = require("../models/Ticket");

router.post("/getall", async (req, res) => {
  try {
    const userId = req.body.user_id;
    const tickets = await Ticket.find({ email: userId });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
