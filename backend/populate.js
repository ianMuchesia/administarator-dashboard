
import dotenv from 'dotenv'
dotenv.config()

import User from './models/User.js'
import {dataProduct , dataProductStat} from './data/index.js'
import connectDB from './database/connectDB.js';
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';




const start = async()=>{
    try {
       
        connectDB(process.env.MONGO_URI)
        /*  await 
         Product.deleteMany();
        await 
        Product.create(dataProduct) */
 
     /*     await 
        ProductStat.deleteMany();
       await 
       ProductStat.create(dataProductStat) 
 */
        console.log('success!!!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

start()