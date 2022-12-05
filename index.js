import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import productRoute from "./Routes/ProductRouter.js";
import userRouter from "./Routes/UserRouter.js";
import bookingRouter from "./Routes/BookingRouter.js";
import cartRouter from "./Routes/CartRouter.js";
import menuRoute from "./Routes/MenuRouter.js";
import orderRouter from "./Routes/OrderRouter.js";
import restaurantRoute from "./Routes/RestaurantRouter.js";
import tableRoute from "./Routes/TableRouter.js";
import categoriesRoute from "./Routes/CategoriesRouter.js";
import geocodeRoute from "./Routes/GeocodeRouter.js";
import adRoute from "./Routes/AdRouter.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Content-Length, Authorization, Accept, yourHeaderField"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// API
app.use("/api/import", ImportData);
app.use("/api/product", productRoute);
app.use("/api/users", userRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/carts", cartRouter);
app.use("/api/categories", categoriesRoute);
app.use("/api/menu", menuRoute);
app.use("/api/orders", orderRouter);
app.use("/api/restaurants", restaurantRoute);
app.use("/api/tables", tableRoute);
app.use("/api/ad", adRoute);
app.use("/api/config/geocode", geocodeRoute);

app.get("/api/config/paypal", (req, res) => {
  res.send(
    "AfEEBH8yO1b1MiaE-b6MhwdqQne68F5rzZdDWWH0GI-6bCx6sQlfB2Zg_tchgzusJh9yzHTaYJ49DVHN"
  );
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server run in port ${PORT}`));
