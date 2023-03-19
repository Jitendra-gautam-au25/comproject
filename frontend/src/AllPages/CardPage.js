
import NavBar from '../Components/Navebar';
import FooterS from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../Components/Cart';
import { useEffect } from 'react';
import {changeOrderWithCart, changeQunatityAC,removeItemAC} from "../Action"

const CardPage = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)
    const cartOrder = useSelector(state => state.order)
    
    useEffect(()=>{
        dispatch(changeOrderWithCart(cartItems))
    },[cartItems])
   
    const changeQuantity=(quantity,item)=>{
        dispatch(changeQunatityAC({...item,quantity:quantity}))
    }
    const removeItem=(item)=>{
        dispatch(removeItemAC(item))
    }
    return (
        <div className="App">
            <NavBar cartCount={cartItems.length}></NavBar>
            <Cart items={cartItems} order={cartOrder} changeQuantity={changeQuantity} removeItem={removeItem}></Cart>
            <FooterS></FooterS>
        </div>
    );
}

export default CardPage