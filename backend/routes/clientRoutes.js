import express from 'express'
import { getCustomers, getProducts, getTransactions } from '../controllers/clientController.js'


const router = express.Router()

router.get("/products", getProducts)
router.get("/customers", getCustomers)
router.get("/", getTransactions)

export default router