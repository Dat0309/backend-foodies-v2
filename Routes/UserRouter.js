import express from "express";
import asyncHandler from "express-async-handler";
import { protect, admin } from "../Middleware/AuthMiddleware.js";
import generateToken from "../utils/generateToken.js";
import User from "./../Models/UserModel.js";

const userRouter = express.Router();

// LOGIN
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);

// REGISTER
userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      username,
      password,
      avatar,
      thumb,
      province,
      district,
      ward,
      street,
      longitude,
      latitude,
      role,
    } = req.body;

    const userExists = await User.findOne({ username });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      first_name,
      last_name,
      email,
      phone_number,
      username,
      password,
      avatar,
      thumb,
      province,
      district,
      ward,
      street,
      longitude,
      latitude,
      role,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        username: user.username,
        password: user.password,
        avatar: user.avatar,
        thumb: user.thumb,
        province: user.province,
        district: user.district,
        ward: user.ward,
        street: user.street,
        longitude: user.longitude,
        latitude: user.latitude,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  })
);

// PROFILE
userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        username: user.username,
        password: user.password,
        avatar: user.avatar,
        thumb: user.thumb,
        province: user.province,
        district: user.district,
        ward: user.ward,
        street: user.street,
        longitude: user.longitude,
        latitude: user.latitude,
        role: user.role,
        favoriteProducts: user.favoriteProducts,
        favoriteRestaurants: user.favoriteRestaurants,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// UPDATE PROFILE
userRouter.put(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.username = req.body.username || user.username;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        first_name: updatedUser.first_name,
        last_name: updatedUser.last_name,
        email: updatedUser.email,
        phone_number: updatedUser.phone_number,
        username: updatedUser.username,
        password: updatedUser.password,
        avatar: updatedUser.avatar,
        thumb: updatedUser.thumb,
        province: updatedUser.province,
        district: updatedUser.district,
        ward: updatedUser.ward,
        street: updatedUser.street,
        longitude: updatedUser.longitude,
        latitude: updatedUser.latitude,

        role: updatedUser.role,
        createdAt: updatedUser.createdAt,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// GET ALL USER ADMIN
userRouter.get(
  "/",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          username: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await User.countDocuments({ ...keyword });
    const users = await User.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ users, count, page, pages: Math.ceil(count / pageSize) });
  })
);

userRouter.get(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("User not Found");
    }
  })
);

userRouter.put(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      user.first_name = req.body.first_name || user.first_name;
      user.last_name = req.body.last_name || user.last_name;
      user.email = req.body.email || user.email;
      user.phone_number = req.body.phone_number || user.phone_number;
      user.username = req.body.username || user.username;
      if (req.body.password) {
        user.password = req.body.password;
      }
      user.avatar = req.body.avatar || user.avatar;
      user.thumb = req.body.thumb || user.thumb;
      user.province = req.body.province || user.province;
      user.district = req.body.district || user.district;
      user.ward = req.body.ward || user.ward;
      user.street = req.body.street || user.street;
      user.longitude = req.body.longitude || user.longitude;
      user.latitude = req.body.latitude || user.latitude;
      user.role = req.body.role || user.role;

      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        first_name: updatedUser.first_name,
        last_name: updatedUser.last_name,
        email: updatedUser.email,
        phone_number: updatedUser.phone_number,
        username: updatedUser.username,
        password: updatedUser.password,
        avatar: updatedUser.avatar,
        thumb: updatedUser.thumb,
        province: updatedUser.province,
        district: updatedUser.district,
        ward: updatedUser.ward,
        street: updatedUser.street,
        longitude: updatedUser.longitude,
        latitude: updatedUser.latitude,
        role: updatedUser.role,
        createdAt: updatedUser.createdAt,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

userRouter.post(
  "/favoriteProduct",
  protect,
  asyncHandler(async (req, res) => {
    const { name, image, price, product } = req.body;

    const favProduct = {
      name: name,
      image: image,
      price: price,
      product: product,
    };

    req.user.favoriteProducts.push(favProduct);

    await req.user.save();
    res.status(201).json({ message: "Favorite added" });
  })
);

userRouter.post(
  "/favoriteRetaurant",
  protect,
  asyncHandler(async (req, res) => {
    const { name, image, thumb, restaurant } = req.body;

    const favRestaurant = {
      name: name,
      image: image,
      thumb: thumb,
      restaurant: restaurant,
    };

    req.user.favoriteRestaurants.push(favRestaurant);

    await req.user.save();
    res.status(201).json({ message: "Favorite added" });
  })
);

userRouter.post(
  "/delete-favoriteProduct",
  protect,
  asyncHandler(async (req, res) => {
    const { id } = req.body;

    req.user.favoriteProducts.remove({ _id: id });

    await req.user.save();
    res.status(201).json({ message: "Favorite deleted" });
  })
);

userRouter.post(
  "/delete-favoriteRestaurant",
  protect,
  asyncHandler(async (req, res) => {
    const { id } = req.body;

    req.user.favoriteRestaurants.remove({ _id: id });

    await req.user.save();
    res.status(201).json({ message: "Favorite deleted" });
  })
);

export default userRouter;
