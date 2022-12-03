import express from "express";
import asyncHandler from "express-async-handler";
import { admin, guest, protect } from "../Middleware/AuthMiddleware.js";
import Order from "./../Models/OrderModel.js";

const orderRouter = express.Router();

// CREATE ORDER
orderRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shipping_address,
      phone_number,
      payment_method,
      items_price,
      tax_price,
      shipping_price,
      total_price,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
      return;
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        phone_number,
        shipping_address,
        payment_method,
        items_price,
        tax_price,
        shipping_price,
        total_price,
      });

      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }
  })
);

// ADMIN GET ALL ORDERS
orderRouter.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const orders = await Order.find({})
      .sort({ _id: -1 })
      .populate("user", "id name email");
    res.json(orders);
  })
);
// USER LOGIN ORDERS
orderRouter.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(order);
  })
);

// GET USER ORDER
orderRouter.get(
  "/user/:uid",
  protect,
  guest,
  asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req. query.pageNumber) || 1;
    const uid = req.params.uid;
    const order = await Order.find({"user": uid})
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ _id: 1});

    res.json({order, page});
  })
);

// GET ORDER BY ID
orderRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

// ORDER IS PAID
orderRouter.put(
  "/:id/pay",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.is_paid = true;
      order.paid_at = Date.now();
      order.payment_result = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

// ORDER IS DELIVERY
orderRouter.put(
  "/:id/delivered",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.is_delivered = true;
      order.delivere_at = Date.now();

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

export default orderRouter;