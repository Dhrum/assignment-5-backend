// utils/errorHandler.js
class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }

    static badRequest(msg) {
        return new ErrorHandler(400, msg);
    }

    static unauthorized(msg) {
        return new ErrorHandler(401, msg);
    }

    static forbidden(msg) {
        return new ErrorHandler(403, msg);
    }

    static notFound(msg) {
        return new ErrorHandler(404, msg);
    }

    static internalError(msg) {
        return new ErrorHandler(500, msg);
    }
}

module.exports = ErrorHandler;
