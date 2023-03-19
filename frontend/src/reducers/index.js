import { ADD_ADDRESS, Add_To_Cart, Change_Order_Cart, SET_SHIP_ADDRESS, PLACE_ORDER, REMOVE_ITEM, INIT_PRODUCTS, Change_Quantity, INIT_USER } from "../Action";

const initialStateProducts = {
    products: [
        // {
        //     id: 1,
        //     name: 'Sony WX-5',
        //     price: 100.75,
        //     category: 'Headphones',
        //     rating: 3,
        //     color: 'red',
        //     size: 'S',
        //     details: {
        //         product: "",
        //         warranty: "",
        //         merchant: ""
        //     },
        //     image: 'product-1-square',
        //     images: ['product-1-square', 'product-1-2', 'product-1-3']
        // },
        // {
        //     id: 2,
        //     name: 'Apple Watch 2',
        //     price: 500.75,
        //     category: 'SmartWatch',
        //     rating: 4,
        //     color: 'black',
        //     size: '',
        //     details: {
        //         product: "",
        //         warranty: "",
        //         merchant: ""
        //     },
        //     image: 'product-2-square',
        //     images: ['product-2-square', 'product-2-2', 'product-2-3']
        // },
        // {
        //     id: 3,
        //     name: 'Apple iPhone 11',
        //     price: 799.75,
        //     category: 'Mobile',
        //     rating: 4,
        //     color: 'black',
        //     size: '',
        //     details: {
        //         product: "",
        //         warranty: "",
        //         merchant: ""
        //     },
        //     image: 'product-3-square',
        //     images: ['product-3-square', 'product-3-2', 'product-3-3']
        // }
    ]


}

const initialStateCart = {
    items: []

}
const initialStateOrder = {
    items: [],
    shipping_Charge: 50,
    discontIn_percent: 10,
    shipping_address: '',
    total_items: 0,
    total_cost: 0,
}

const initialStateUser = {
    name: "Jeetu",
    email: "jeetu@gmail.com",
    addresses: [{

        "Add Address":"new address"
    }],
    orders: []
}

const productReducer = (state = initialStateProducts, action) => {
    switch (action.type) {


        case INIT_PRODUCTS:
            return { ...state, products: action.payload }                       // new product come from payload

        default:
            return state;
    }
}

const cartReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case Add_To_Cart:
            // if (state.items.find(item => item._id === action.payload._id)) {
            //     return state;
            // }
            return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] }
        case Change_Quantity:
            const oldItem = state.items.find((item) => item._id === action.payload._id)
            const index = state.items.indexOf(oldItem)
            const newItems = [...state.items]
            newItems[index] = action.payload
            return { ...state, items: newItems }
        case REMOVE_ITEM:
            const item = action.payload;
            const itemIndex = state.items.findIndex(ele => ele._id === item._id);
            const itemArray = [...state.items]
            itemArray.splice(itemIndex, 1)
            return { ...state, items: itemArray }


        default:
            return state;
    }



}

const orderReducer = (state = initialStateOrder, action) => {
    switch (action.type) {
        case Change_Order_Cart:
            const items = action.payload;
            const total_items = items.reduce(
                (total, item) => total + item.quantity * 1,
                0
            );
            const total_cost = items.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
            return { ...state, items: action.payload, total_items, total_cost };                                    // jo payload me tha vahi as is it agaye ga
        case SET_SHIP_ADDRESS:
            return { ...state, shipping_address: action.payload };
        default:
            return state;
    }

}


const userReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case INIT_USER:
            return {
                ...state,
                items:action.payload.items,
                userId:action.payload.iserId
            }
        case ADD_ADDRESS:
            return { ...state, addresses: [...state.addresses, action.payload] }                 // all old address save as it is    
        case PLACE_ORDER:
            return { ...state, orders: [...state.orders, action.payload] }
        default:
            return state;
    }


}


export { productReducer, cartReducer, orderReducer, userReducer }