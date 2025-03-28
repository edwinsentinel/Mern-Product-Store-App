import Product from '../models/Product.model.js';
import mongoose from "mongoose";


//get all products
export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});
    } catch (error) {
        console.error("Error getting products:", error.message);
        res.status(500).json({success:false,message:"Server error"});
        
    }
};
//create a product
export const createProduct = async(req,res)=>{
    const product = req.body;//user will send the product data in the body of the request

    if(!product.name || !product.price || !product.description || !product.image){
        return res.status(400).json({success:false,message:"Please fill all the fields"});
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct});
    } catch (error) {
        console.error("Error creating product:", error.message);
        res.status(500).json({success:false,message:"Server error"});
    }

};

//update a product
export const updateProduct = async(req,res)=>{
    const {id}=req.params;
    const product = req.body;
    //check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`); //if the id is not valid

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedProduct});
    } catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({success:false,message:"Server error"});
    }
};

//delete a product
export const deleteProduct = async(req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`); //if the id is not valid
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product deleted successfully"});
    } catch (error) {
        res.status(500).json({success:false,message:"Server error"});
        
    }
        
};