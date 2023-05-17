import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'
import connectDB from './database/connectDB.js'


//data imports

import User from './models/User.js'
import {dataUser} from './data/index.js'

/* CONFIGURATION */
dotenv.config()

const app = express()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());



/* ROUTES */
app.use('/api/v1/client', clientRoutes)
app.use('/api/v1/general', generalRoutes)
app.use('/management', managementRoutes)
app.use('/sales', salesRoutes)

/* MoNGOOSE */


//data 


const port = process.env.PORT || 3000

const start =async()=>{
    try {
        connectDB(process.env.MONGO_URI)
        
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
      
        
    } catch (error) {
        console.log(error)
    }
}

start()