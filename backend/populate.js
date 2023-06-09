
import dotenv from 'dotenv'
dotenv.config()

import User from './models/User.js'
import {dataOverallStat, dataProduct , dataProductStat, dataTransaction} from './data/index.js'
import connectDB from './database/connectDB.js';
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';
import Transaction from './models/Transaction.js';
import OverallStat from './models/OverallStat.js';




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

       /* await Transaction.deleteMany()
       await Transaction.create(dataTransaction)  */
       /*  await OverallStat.deleteMany()
        await OverallStat.create(dataOverallStat) */
        console.log('success!!!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

start()