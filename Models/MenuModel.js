import mongoose from "mongoose";

const menuSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;