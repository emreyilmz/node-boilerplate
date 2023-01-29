
const ProductService = require('../services/product-service');

module.exports = (app) => {
    const service = new ProductService();
    app.get('/', async (req,res,next) => {
        console.log("ürünler geldi")
        
        //check validation
        /* try {
            const { data} = await service.GetProducts();
            console.log("data:",data)        
            return res.status(200).json(data);
        } catch (error) {
            console.log("hata burada")
            next(error)
        } */
        
    });

    app.post('/product/create', async(req,res,next) => {
        
        try {
            const { name, desc, type, unit,price, available, suplier, banner } = req.body; 
            // validation
            const { data } =  await service.CreateProduct({ name, desc, type, unit,price, available, suplier, banner });
            return res.json(data);
            
        } catch (err) {
            next(err)    
        }
        
    });


}