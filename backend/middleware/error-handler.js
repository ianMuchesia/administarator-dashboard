import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleWare = (err, req, res, next) => {
  let customError = {
    //set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:err.message || 'Something went wrong try again later'
  }

/*   if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message }); 

  }*/

  if(err.name === 'ValidationError'){
    customError.msg = Object.values(err.errors).map((item)=>item.message).join(',');
    customError.statusCode = 400
  }
  if(err.code && err.code === 11000){
    customError.msg = `Duplicate value enterd for ${Object.keys(err.keyValue)} field, please choose another value`
    customError.statusCode = 400
  }
  if(err.name === 'CastError'){
    customError.msg = `No Item found with  id: ${err.value}`
    customError.statusCode = 404
  }
  //return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandlerMiddleWare;