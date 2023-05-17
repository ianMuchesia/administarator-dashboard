import { StatusCodes } from "http-status-codes"
import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"



const getProducts = async(req , res)=>{
    const products = await ProductStat.find({}).populate({
        path:"product",
        select:"name rating  _id supply category description"
    })


    res.status(StatusCodes.OK).json({success:true , products})
}


export {
    getProducts
}