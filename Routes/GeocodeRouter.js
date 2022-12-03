import express from "express";
import asyncHandler from "express-async-handler";
import { admin, protect, updater } from "../Middleware/AuthMiddleware.js";
import fetch from 'cross-fetch';

const geocodeRoute = express.Router();

geocodeRoute.get(
    "/",
    asyncHandler(async(req, res) => {
        const lat = req.query.lat;
        const long = req.query.long;
        const key = req.query.key;

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${key}`);
        var location = await response.json();

        res.json({ location });
    })
);

export default geocodeRoute;