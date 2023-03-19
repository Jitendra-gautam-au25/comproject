import NavBar from '../Components/Navebar';
import FooterS from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Orders from '../Components/Order';

const OrderPage = () => {
    const user = useDispatch(state=>state.user)
    const cartItems = useSelector(state => state.cart.items)
    const order = useSelector(state => state.order)
    
    
    return (
        <div className="App">
            <NavBar cartCount={cartItems.length}></NavBar>
            <h2>My Orders</h2>
            <Orders items={order.items} order={order}></Orders>
           
            <FooterS></FooterS>
        </div>
    );
}

export default OrderPage