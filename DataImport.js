import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import asyncHandler from "express-async-handler";
import Table from "./Models/TableModel.js";
import tables from "./data/table.js";
import Restaurant from "./Models/RestaurantModel.js";
import restaurants from "./data/restaurant.js";
import Product from "./Models/ProductModel.js";
import products from "./data/product.js";
import Menu from "./Models/MenuModel.js";
import menues from "./data/menu.js";
import Categories from "./Models/CategoryModel.js";
import types from "./data/type.js";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/table",
  asyncHandler(async (req, res) => {
    await Table.deleteMany({});
    const importTable = await Table.insertMany(tables);
    res.send({ importTable });
  })
);

ImportData.post(
  "/restaurant",
  asyncHandler(async (req, res) => {
    await Restaurant.deleteMany({});
    const importRes = await Restaurant.insertMany(restaurants);
    res.send({ importRes });
  })
);

ImportData.post(
  "/product",
  asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const importRes = await Product.insertMany(products);
    res.send({ importRes });
  })
);

ImportData.post(
  "/menu",
  asyncHandler(async (req, res) => {
    await Menu.deleteMany({});
    const importRes = await Menu.insertMany(menues);
    res.send({ importRes });
  })
);

ImportData.post(
  "/categories",
  asyncHandler(async (req, res) => {
    await Categories.deleteMany({});
    const importCat = await Categories.insertMany(types);
    res.send({importCat});
  })
);

export default ImportData;
