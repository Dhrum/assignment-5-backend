// controllers/returnController.js
const ReturnService = require('../services/ReturnService');
const ResponseHandler = require('../utils/responseHandler');
const ErrorHandler = require('../utils/errorHandler');

class ReturnController {
    static async createReturn(req, res) {
        try {
            const returnData = await ReturnService.createReturn(req.body);
            ResponseHandler.created(res, returnData);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getReturns(req, res) {
        try {
            const returns = await ReturnService.getReturns({});
            ResponseHandler.success(res, returns);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getReturnById(req, res) {
        try {
            const returnData = await ReturnService.getReturnById(req.params.id);
            if (!returnData) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Return not found'));
            }
            ResponseHandler.success(res, returnData);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async updateReturn(req, res) {
        try {
            const returnData = await ReturnService.updateReturn(req.params.id, req.body);
            if (!returnData) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Return not found'));
            }
            ResponseHandler.success(res, returnData, 'Return updated successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async deleteReturn(req, res) {
        try {
            const result = await ReturnService.deleteReturn(req.params.id);
            if (!result) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Return not found'));
            }
            ResponseHandler.success(res, null, 'Return deleted successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }
}

module.exports = ReturnController;
