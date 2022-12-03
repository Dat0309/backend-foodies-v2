import mongoose from "mongoose";

const tableSchema = mongoose.Schema(
    {
        restaurant_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Restaurant",
        },
        code: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: false,
        },
        capacity: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Table = mongoose.model("Table", tableSchema);

export default Table;