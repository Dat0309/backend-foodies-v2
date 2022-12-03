import express from "express";
import asyncHandler from "express-async-handler";
import Menu from "../Models/MenuModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const menuRoute = express.Router();

// GET ALL MENU
menuRoute.get(
    "/",
    asyncHandler(async (req, res) => {
      const pageSize = 12;
      const page = Number(req.query.pageNumber) || 1;
      const keyword = req.query.keyword
        ? {
            title: {
              $regex: req.query.keyword,
              $options: "i",
            },
          }
        : {};
      const count = await Menu.countDocuments({ ...keyword });
      const menues = await Menu.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ _id: -1 });
      res.json({ menues, count,page, pages: Math.ceil(count / pageSize) });
    })
  );

// ADMIN GET ALL MENU WITHOUT SEARCH AND PAGINATION
menuRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const menu = await Menu.find({}).sort({ _id: -1 });
      res.json(menu);
    })
  );

  // GET SINGLE Menu
  menuRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const menu = await Menu.findById(req.params.id);
      if (menu) {
        res.json(menu);
      } else {
        res.status(404);
        throw new Error("Menu not Found");
      }
    })
  );
  
  // DELETE Menu
  menuRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const menu = await  Menu.findById(req.params.id);
      if (menu) {
        await menu.remove();
        res.json({ message: " Menu deleted" });
      } else {
        res.status(404);
        throw new Error("Menu not Found");
      }
    })
  );
  
  // CREATE Menu
  menuRoute.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const { title } = req.body;
      const menuExist = await Menu.findOne({ title });
      if (menuExist) {
        res.status(400);
        throw new Error("Menu name already exist");
      } else {
        const menu = new Menu({
          title,
          user: req.user._id,
        });
        if (menu) {
          const createdMenu = await menu.save();
          res.status(201).json(createdMenu);
        } else {
          res.status(400);
          throw new Error("Invalid menu data");
        }
      }
    })
  );
  
  // UPDATE MENU
  menuRoute.put(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const { title } = req.body;
      const menu = await Menu.findById(req.params.id);
      if (menu) {
        menu.title = title || menu.title;
  
        const updatedMenu = await  menu.save();
        res.json(updatedMenu);
      } else {
        res.status(404);
        throw new Error("Menu not found");
      }
    })
  );

  export default menuRoute;