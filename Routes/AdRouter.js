import express from "express";
import asyncHandler from "express-async-handler";
import Ad from "../Models/AdModel.js";
import { admin, owners, protect } from "./../Middleware/AuthMiddleware.js";

const adRoute = express.Router();

//GET ALL TABLE
adRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const count = await Ad.countDocuments({ ...keyword });
    const ads = await Ad.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });

    res.json({ ads, count, page, pages: Math.ceil(count / pageSize) });
  })
);

// ADMIN GET ALL TABLE WITHOUT SEARCH AND PEGINATION
adRoute.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const ads = await Ad.find({}).sort({ _id: -1 });
    res.json(ads);
  })
);

// GET SINGLE TABLE
adRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const ad = await Ad.findById(req.params.id);
    if (ad) {
      res.json(ad);
    } else {
      res.status(404);
      throw new Error("Ad not found");
    }
  })
);

// DELETE TABLE
adRoute.delete(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const table = await Table.findById(req.params.id);
    if (table) {
      await table.remove();
      res.json({ message: "Table deleted" });
    } else {
      res.status(404);
      throw new Error("Table not found");
    }
  })
);

// CREATE AD
adRoute.post(
  "/",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { name, image, description } = req.body;
    const adExits = await Ad.findOne({ name });
    if (adExits) {
      res.status(400);
      throw new Error("Ad name already exits in restaurant");
    } else {
      const ad = new Ad({
        name,
        image,
        description,
      });
      if (ad) {
        const createdAd = await ad.save();
        res.status(201).json(createdAd);
      } else {
        res.status(400);
        throw new Error("Invalid ad data");
      }
    }
  })
);

// UPDATE TABLE
adRoute.put(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { name, image, description } = req.body;
    const ad = await Ad.findById(req.params.id);
    if (ad) {
      ad.name = name || ad.name;
      ad.image = image || ad.image;
      ad.description = description || ad.description;

      const updateAd = await ad.save();
      res.json(updateAd);
    } else {
      res.status(404);
      throw new Error("Ad not found");
    }
  })
);

export default adRoute;
