class CustomAPIError extends Error {
    constructor(message){
        super(message)
    }
    send(res) {
        res.status(this.statusCode).json({
          success: false,
          msg: this.message,
        });
      }
}

export default CustomAPIError