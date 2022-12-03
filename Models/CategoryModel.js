import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Categories = mongoose.model("Categories", categoriesSchema);

export default Categories;