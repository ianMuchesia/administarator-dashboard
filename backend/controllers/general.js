import {StatusCodes} from 'http-status-codes'
import User from '../models/User.js'

export const getUser = async(req, res)=>{
try {
    const {id: userID} = req.params
    const user = await User.findOne({_id:userID})
    if(!user){
        return res.status(StatusCodes.NOT_FOUND).json({msg:`no user found with id:${userID}`})
    }
    res.status(StatusCodes.OK).json({success:true, user})
} catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        msg:error.message
    })
}
   
} 


export const getAllUser = async(req, res)=>{
    try {
        const users = await User.find({})
        res.status(StatusCodes.OK).json({success: true , data:users})
    } catch (error) {
        console.log(error)
    }
}
