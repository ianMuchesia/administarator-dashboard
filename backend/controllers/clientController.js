import { StatusCodes } from "http-status-codes"
import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"
import User from "../models/User.js"
import Transaction from "../models/Transaction.js"



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


const getTransactions = async(req ,res)=>{
    //sort should look like this : {"field": "userId", "sort":"desc"}
    const {page  = 1 , pageSize = 20, sort = null, search = ""}= req.query

    //formatted sort should look like { userId:-1}

    const generateSort = ()=>{
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
            [sortParsed.field]:sortParsed.sort = "asc"?1:-1
        }
        return sortFormatted
    }
    const sortFormatted = Boolean(sort)?generateSort():{};

    const transactions = await Transaction.find({
        $or:[
            {cost:{$regex:new RegExp(search, "i")}},
            {userId:{$regex:new RegExp(search, "i")}},
        ],
    }).sort(sortFormatted).skip(page * pageSize).limit(pageSize)


    const total = await Transaction.countDocuments({
        name: {$regex: search , $options: "i"}
    });
    res.status(StatusCodes.OK).json({success:true, transactions, total})
}
export {
    getProducts, getCustomers, getTransactions
}