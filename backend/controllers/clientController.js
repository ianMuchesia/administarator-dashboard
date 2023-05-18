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

     const { search , sort , page , pageSize} = req.query

     console.log("search is" + search ,"page is"+page,"sort is"+ sort ,"pageSize is"+ pageSize )
    let queryObject = {}

    let total = await Transaction.countDocuments({});
    if (search) {
        queryObject = {
          
            cost: { $regex: new RegExp(search, "i") } 
         
        };
        total = await Transaction.countDocuments(queryObject);
      }
    let result = Transaction.find(queryObject);
  
    const generateSort = () => {
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
          [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        };
  
        return sortFormatted;
      };

      const sortFormatted = Boolean(sort) ? generateSort() : {};
    if (sort!=={}) {
        result = result.sort(sortFormatted)
    } else {
      result = result.sort("createdAt");
    }
  
    if (page) {
        let pagination = Number(page)
        
        if(pagination <1){
            pagination +=1
        }
     
      const limit = Number(pageSize);
      const skip = (pagination - 1) * limit;
  
      result = result.skip(skip).limit(limit)
    }
  
    const transactions = await result.exec();
   
     

  
    res.status(StatusCodes.OK).json({success:true,total,transactions })
}



const getGeography = async(req, res)=>{
  try {
    const users = await User.find({})

  
    res.status(StatusCodes.OK).json(users)
  } catch (error) {
    console.log(error)
  }
}
export {
    getGeography,getProducts, getCustomers, getTransactions
}