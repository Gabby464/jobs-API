const errorHandlerMiddleware = async(err, req, res, next) => {
    return res.status(500).json({msg: 'hello, there is an error'})
}
module.exports = errorHandlerMiddleware