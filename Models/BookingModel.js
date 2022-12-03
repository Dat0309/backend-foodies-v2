import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    table_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Table",
    },
    table_code: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    user_name: {
      type: String,
      required: true,
    },
    restaurant_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Restaurant",
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    booking_items: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    payment_method: {
      type: String,
      required: true,
      default: "Paypal",
    },
    payment_result: {
      id: {
        type: String,
      },
      status: {
        type: String,
      },
      update_time: {
        type: String,
      },
      email_address: {
        type: String,
      },
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
      default: 0.0,
    },
    is_paid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paid_at: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
