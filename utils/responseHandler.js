// utils/responseHandler.js
class ResponseHandler {
    static success(res, data, message = 'Success') {
        return res.status(200).json({
            status: 'success',
            message,
            data
        });
    }

    static created(res, data, message = 'Resource created successfully') {
        return res.status(201).json({
            status: 'success',
            message,
            data
        });
    }

    static error(res, error) {
        const statusCode = error.statusCode || 500;
        return res.status(statusCode).json({
            status: 'error',
            message: error.message || 'Internal Server Error'
        });
    }
}

module.exports = ResponseHandler;
