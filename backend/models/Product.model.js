import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        maxLength: [100, "Name can not exceed 100 characters"],
    },
    price: {
        type: Number,
        required: [true, "Please provide a price"],
        maxLength: [5, "Name can not exceed 5 characters"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    image: {
        type: String,
        required: [true, "Please provide a image"],
    },
}, { timestamps: true });//created at and updated at

const Product = mongoose.model("Product", ProductSchema);
export default Product;