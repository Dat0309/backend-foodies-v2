import express from "express";
import asyncHandler from "express-async-handler";
import {
  admin,
  owners,
  protect,
  updater,
} from "../Middleware/AuthMiddleware.js";
import Product from "../Models/ProductModel.js";

const productRoute = express.Router();

//Get all product
productRoute.get(
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
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: 1 });
    res.json({ products, count, page, pages: Math.ceil(count / pageSize) });
  })
);

// ADMIN GET ALL PRODUCT WITHOUT SEARCH AND PEGINATION
productRoute.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ _id: -1 });
    res.json(products);
  })
);

// GET SINGLE PRODUCT
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

// GET ALL PRODUCT BY CATEGORYID
productRoute.get(
  "/category-id/:categoryId",
  asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const categoryId = req.params.categoryId;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ categories_id: categoryId })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

productRoute.get(
  "/recomment/:categoryId",
  asyncHandler(async (req, res) => {
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    const categoryId = req.params.categoryId;
    const ketword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ categories_id: categoryId })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: 1 });
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

// GET ALL PRODUCT BY RESTAURANT
productRoute.get(
  "/menu-id/:menuId",
  asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const menuId = req.params.menuId;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ menu_id: menuId })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

// PRODUCT REVIEW
productRoute.post(
  "/:id/review",
  protect,
  asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);
    const user_name = req.user.last_name + " " + req.user.first_name;

    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );
      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Product already Reviewed");
      }
      const review = {
        name: user_name,
        image: req.user.avatar,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };

      product.reviews.push(review);
      product.num_reviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      res.status(201).json({ message: "Reviewed Added" });
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

// DELETE PRODUCT
productRoute.delete(
  "/:id",
  protect,
  owners,
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: "Product deleted" });
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

// CREATE PRODUCT
productRoute.post(
  "/",
  protect,
  owners,
  asyncHandler(async (req, res) => {
    const { name, image, categories_id, menu_id, description, price, unit } =
      req.body;

    const product = new Product({
      name,
      image,
      categories_id,
      menu_id,
      description,
      price,
      unit,
      user: req.user._id,
    });
    if (product) {
      const createdproduct = await product.save();
      res.status(201).json(createdproduct);
    } else {
      res.status(400);
      throw new Error("Invalid product data");
    }
  })
);

// UPDATE PRODUCT
productRoute.put(
  "/:id",
  protect,
  updater,
  asyncHandler(async (req, res) => {
    const { name, image, categories_id, menu_id, description, price, unit } =
      req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.image = image || product.image;
      product.categories_id = categories_id || product.categories_id;
      product.menu_id = menu_id || product.menu_id;
      product.description = description || product.description;
      product.price = price || product.price;
      product.unit = unit || product.unit;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default productRoute;
