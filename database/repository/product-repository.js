/*  */
const { ProductModel } = require("../models");
const { APIError,BadRequestError } = require('../../utils/app-errors')


class ProductRepository {

    async CreateProduct({ name, desc, type, unit,price, available, suplier, banner }){
        console.log("product-repository")

        try {
            const product = new ProductModel({
                name, desc, type, unit,price, available, suplier, banner
            })
    
            const productResult = await product.save();
            return productResult;
            
        } catch (err) {
            throw APIError('API Error', 400, 'Unable to Create Product')
        }
        
    }




}


module.exports = ProductRepository