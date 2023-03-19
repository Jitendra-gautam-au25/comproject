import axios from "axios"
export const Add_To_Cart = "Add_To_CART"
export const Change_Order_Cart = "Change_ORDER_Cart"
export const Change_Quantity = "Change_Quantity"
export const ADD_ADDRESS = "ADD_ADDRESS"
export const SET_SHIP_ADDRESS = "SET_SHIP_ADDRESS"
export const PLACE_ORDER = "PLACE_ORDER"
export const EMPTY_CART = "EMPTY_CART"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const INIT_PRODUCTS = "INIT_PRODUCTS"
export const INIT_CART = "INIT_CART "
export const INIT_USER = "INIT_USER"



export const loginAC = (user) => {

  return function (dispatch) {
    axios.post("http://localhost:4001/user/login",(user)).then(function (response) {
      console.log(response);
      dispatch({ type: INIT_USER, payload: response.data })                        // it direct called from backend
                                                                                  // it direct called from backend

    })
      .catch(function (error) {
        console.log(error);
      })
  }
}

export const signAC = (user) => {

  return function (dispatch) {
    axios.post("http://localhost:4001/user/signup",(user)).then(function (response) {
      console.log(response);
      dispatch({ type: INIT_USER, payload: response.data })                        // it direct called from backend
                                                                                  // it direct called from backend

    })
      .catch(function (error) {
        console.log(error);
      })
  }
}

export const intializeProduct = () => {

  return function (dispatch) {
    axios.get("http://localhost:4001/product/allProd").then(function (response) {
      console.log(response);
      dispatch({ type: INIT_PRODUCTS, payload: response.data })                        // it direct called from backend

    })
      .catch(function (error) {
        console.log(error);
      })
  }
}



export const intializeUserAC = () => {

  return function (dispatch) {
    axios.get("http://localhost:4001/user/createuser").then(function (response) {
      console.log(response);
      dispatch({ type: INIT_USER, payload: response.data })                        // it direct called from backend

    })
      .catch(function (error) {
        console.log(error);
      })
  }
}


export const addToCartAC = (product) => {
  return function (dispatch) {
    axios.post('http://localhost:4001/Cartproduct/cart').then(function (response) {
    // dispatch({type:INIT_CART, payload: {items:response.data.items,userId:userId}})
    dispatch({ type: Add_To_Cart, payload: product })                        // it direct called from backend

        console.log(response);
      })
        .catch(function (error) {
          console.log(error);
        })
  }
}

export const changeOrderWithCart = (cartItems) => {
  return function (dispatch) {
    dispatch({ type: Change_Order_Cart, payload: cartItems })                           // Redux thank function to de;lauy in function

  }

}

export const changeQunatityAC = (item) => {                                               // Actioon Creator function
  return function (dispatch) {
    dispatch({ type: Change_Quantity, payload: item })

  }

}

export const addAddressAC = (address) => {                                               // Actioon Creator function
  return function (dispatch) {
    dispatch({ type: ADD_ADDRESS, payload: address })

  }

}



export const setShipAddressAC = (address) => {                                               // Actioon Creator function
  return function (dispatch) {
    dispatch({ type: SET_SHIP_ADDRESS, payload: address })

  }

}


export const placeOrderAC = (order) => {                                               // Actioon Creator function
  return function (dispatch) {
    dispatch({ type: PLACE_ORDER, payload: order })

  }

}


export const removeItemAC = (item) => {                                               // Actioon Creator function
  return function (dispatch) {
    // axios.delete('http://localhost:4001/Cartproduct/removeitem',{item:item}).then(function (response) {
    //   // dispatch({type:INIT_CART, payload: {items:response.data.items,userId:userId}})
    //   dispatch( {type:REMOVE_ITEM,payload:item})                          // it direct called from backend

    //   console.log(response);
    // })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    dispatch({ type: REMOVE_ITEM, payload: item })                          // it direct called from backend

  }


}


