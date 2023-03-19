import productModel from "../model/productSchema.js";

class ProductController {
    static createProduct = async (req, res) => {
        // const { id, name, price, category, rating, details, image, images } = req.body
        let product = new productModel({

                id: 2,
                name: 'Flying Drone',
                price: 1600.75,
                category: 'Drone',
                rating: 4,
                color: 'White',

                details: {
                    product: "This is Flying drone .It use for video recording for flim and sadi also.",
                   
                },
                image: 'product-6-1',
                images: ['product-6-square', 'product-6-2', 'product-6-3']
   


        })
        await product.save().then((success) => {
            res.send(success)
        }).catch(err => {
           console.log(err)
        })

    }

    static allProduct = async (req, res) => {
        try {
            const product = await productModel.find();

            res.send(product);
        } catch (error) {
            console.error(error);

        }
    }




}

export default ProductController