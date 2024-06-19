require("dotenv").config();
const express = require("express");
// const crypto = require("crypto");
const router = express.Router();
const Ticket = require("../models/Ticket");
const MovieShow = require("../models/MovieShow");

function generateOrderID() {
  const pad = (num, size) => String(num).padStart(size, '0');
  const randomNumber = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
  return pad(randomNumber, 8); // Pad to 8 digits if necessary
}

router.post("/success", async (req, res) => {
  try {
    const {
      user_id,
      show_id,
      show_date,
      movie,
    } = req.body;


    await Ticket.create({
      user_id,
      show_id,
      order_id: generateOrderID(),
      show_date,
      movie,
    });

    const movieShow = await MovieShow.findById(show_id);
    if (movieShow.seats - 1 >= 0) {
      let seatsLeft = movieShow.seats - 1;
      movieShow.seats = seatsLeft;
      movieShow.save();
    }

    res.json({
      msg: "success",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
