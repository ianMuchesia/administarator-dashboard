import { StatusCodes } from "http-status-codes"
import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"
import User from "../models/User.js"



const getProducts = async(req , res)=>{
    const products = await ProductStat.find({}).populate({
        path:"product",
        select:"name rating price  _id supply category description"
    })


    res.status(StatusCodes.OK).json({success:true , products})
}


const getCustomers = async(req, res)=>{
    const customers = await User.find({role:"user"}).select('-password')

    res.status(StatusCodes.OK).json({success:true, customers})
}

export {
    getProducts, getCustomers
}