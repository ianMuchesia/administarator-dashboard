import express from 'express'
import {getAllUser , getUser } from '../controllers/general.js'


const router = express.Router()


router.get("/users", getAllUser)
router.get("/users/:id", getUser) 




export default router