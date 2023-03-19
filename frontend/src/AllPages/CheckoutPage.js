import NavBar from '../Components/Navebar';
import FooterS from '../Components/Footer';
import Checkout from '../Components/CheckOut';
import {useDispatch, useSelector} from 'react-redux'
import {  addAddressAC, setShipAddressAC, placeOrderAC} from '../Action';
import { useNavigate } from 'react-router-dom';


const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();  
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)
  const user = useSelector(state=>state.user);

  const addAddress = (address)=>{
    dispatch(addAddressAC(address))
  }
  const setShipAddress = (address)=>{
    dispatch(setShipAddressAC(address))
  }
  const placeOrder = ()=>{
    if(order.shipping_address){
    
        dispatch(placeOrderAC)
    }else{
      alert('Choose a Shipping Address');
    }
  }
  
  return (
     <>
     <NavBar cartCount={cartItems.length}></NavBar>
     {/* <Checkout order={order} user={user} ></Checkout> */}
     
     <Checkout order={order} user={user} addAddress={addAddress} setShipAddress={setShipAddress} placeOrder={placeOrder}></Checkout>
     <FooterS></FooterS>
     </> 
  );
}

export default CheckoutPage;