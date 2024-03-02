/*Express error handling middleware
These parameters represent the error object, the request object, 
the response object, and the next middleware function in the application's request-response cycle */

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    // set status code
    res.status(statusCode);

    // send json response - error message
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = {
    errorHandler,
}