import cartModel from "../model/cardSchema.js";

class CardController {
    static cardShow =  (req, res) => {
        const userId = "641706d121ac5817c6cf164a"
        const item = req.body.item
        cartModel.findOne({ userId: userId }).then(result => {
            if (result) {                                                                           // it.id from backned
                const itemIndex = result.items                                              //findIndex(ele => ele._id === item_id);     // front se id match karega  item.id from frontend
                if (itemIndex >= 0) {
                    result.items.splice(itemIndex,1,item);      // replace item one
                } else {
                    result.items.push(item);        // change quantity
                }
                result.save().then(cart => {
                    res.send(cart);
                })
            } else {
                let cart = new cartModel();     // new cart create
                cart.userId = userId;
                cart.items = [item];
                cart.save().then(cart => {
                    res.send(cart);
                })
            }


        })

    }

    static removeItem=(req,res)=>{
        const userId = 1
        const item = req.body.item;
        cartModel.findOne({userId:userId}).then(result=>{
    
            const itemIndex = result.items.findIndex(it=>it._id==item._id);
            result.items.splice(itemIndex,1);
            result.save().then(cart=>{
                res.send(cart)
            })
        });
    }


}

export default CardController
