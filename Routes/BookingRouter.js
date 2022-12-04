import express from "express";
import asyncHandler from "express-async-handler";
import { admin, owners, protect } from "../Middleware/AuthMiddleware.js";
import Booking from "../Models/BookingModel.js";
import Table from "../Models/TableModel.js";

const bookingRouter = express.Router();

//CREATE BOOKING
bookingRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      table_code,
      booking_items,
      table_id,
      restaurant_id,
      itemPrice,
      totalPrice,
      paymentMethod,
      date,
      time,
    } = req.body;

    const user_name = req.user.last_name + " " + req.user.first_name;

    if (booking_items && booking_items.length == 0) {
      res.status(400);
      throw new Error("No booking items");
      return;
    } else {
      const booking = new Booking({
        booking_items,
        user_id: req.user._id,
        table_id,
        restaurant_id,
        itemPrice,
        totalPrice,
        paymentMethod,
        date,
        time,
        table_code,
        user_name,
      });

      const createBooking = await booking.save();
      res.status(201).json({ createBooking });
    }
  })
);

// ADMIN GET ALL BOOKING
bookingRouter.get(
  "/all",
  protect,
  admin,

  asyncHandler(async (req, res) => {
    const bookings = await Booking.find({})
      .sort({ _id: -1 })
      .populate("user_id", "id name email");
    res.json({ bookings });
  })
);

// USER LOGIN BOOKING
bookingRouter.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const booking = await Booking.find({ user: req.user._id }).sort({
      _id: -1,
    });
    res.json({ booking });
  })
);

// GET BOOKING BY ID
bookingRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id).populate(
      "user_id",
      "name email"
    );

    if (booking) {
      res.json({ booking });
    } else {
      res.status(404);
      throw new Error("Booking Not Found");
    }
  })
);

// BOOKING IS PAID
bookingRouter.put(
  "/:id/pay",
  protect,
  asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
      booking.is_paid = true;
      booking.paid_at = Date.now();
      booking.payment_result = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };

      const updatedBooking = await booking.save();
      res.json({ updatedBooking });
    } else {
      res.status(404);
      throw new Error("Booking not found");
    }
  })
);

// Get all booking of restaurant
bookingRouter.get(
  "/restaurant-id/:id",
  protect,
  owners,
  asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const id = req.params.id;

    const bookings = await Booking.find({ restaurant_id: id })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ bookings, page });
  })
);

//GET BY DATE TIME
bookingRouter.get(
  "/date/:date",
  protect,
  asyncHandler(async (req, res) => {
    const date = req.params.date;
    var tables = [];

    const bookings = await Booking.find({ date: date }).sort({ _id: -1 });
    bookings.forEach(async (e) => {
      var table = await Table.findById(e.table_id);
      tables.push(table);
    });

    res.json(tables);
  })
);

export default bookingRouter;
