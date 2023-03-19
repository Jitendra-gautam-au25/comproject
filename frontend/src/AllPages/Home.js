import ProductList from '../Components/ProductList';

import NavBar from '../Components/Navebar';
import Carouse from '../Components/Carousel';
import FooterS from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { intializeProduct,addToCartAC ,intializeUserAC} from '../Action';
import { useEffect } from 'react';


const HomePage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    const cartItems = useSelector(state => state.cart.items)

    useEffect(()=>{
        dispatch(intializeProduct())
        // dispatch(initializeCartAC())
        dispatch(intializeUserAC())

       
       

    },[])
    
    
    const addToCart = (product) => {
        dispatch(addToCartAC(product))

    }

    return (
        <div className="App">
            <NavBar cartCount={cartItems.length}></NavBar>
            <Carouse></Carouse>

            <ProductList products={products} addToCart={addToCart}></ProductList>
            <FooterS></FooterS>
        </div>
    );
}

export default HomePage