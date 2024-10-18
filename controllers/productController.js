// controllers/productController.js
const ProductService = require('../services/ProductService');
const ResponseHandler = require('../utils/responseHandler');
const ErrorHandler = require('../utils/errorHandler');

class ProductController {
    static async createProduct(req, res) {
        try {
            const product = await ProductService.createProduct(req.body);
            ResponseHandler.created(res, product);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getProducts(req, res) {
        try {
            const products = await ProductService.getProducts({});
            if (!products || products.length === 0) {
                console.log('Products Retrieved:', products); // Add this line
                return ResponseHandler.success(res, [], 'No products found');
            }
            ResponseHandler.success(res, products);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getProductById(req, res) {
        try {
            
            const product = await ProductService.getProductById(req.params.id);
            console.log(product);
            if (!product) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Product not found'));
            }
            ResponseHandler.success(res, product);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async updateProduct(req, res) {
        try {
            const product = await ProductService.updateProduct(req.params.id, req.body);
            if (!product) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Product not found'));
            }
            ResponseHandler.success(res, product, 'Product updated successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async deleteProduct(req, res) {
        try {
            const result = await ProductService.deleteProduct(req.params.id);
            if (!result) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Product not found'));
            }
            ResponseHandler.success(res, null, 'Product deleted successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }
}

module.exports = ProductController;
