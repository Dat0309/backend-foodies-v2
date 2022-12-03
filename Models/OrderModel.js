import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    orderItems: [
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
    shipping_address: {
        address: {
            province: {
                type: String,
                required: true,
            },
            district: {
                type: String,
                required: true,
            },
            ward: {
                type: String,
                required: true,
            },
            street: {
                type: String,
                required: true,
            },
        },
    },
    payment_method: {
        type: String,
        required: true,
        default: "ShipCOD",
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
    phone_number:{
        type: String,
        required: true,
    },
    items_price:{
        type: Number,
        required: true,
        default: 0,
    },
    tax_price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shipping_price: {
        type: Number,
        required: true,
        default: 0.0,
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
    is_delivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    delivere_at: {
        type: Date,
    }
}, {
    timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;