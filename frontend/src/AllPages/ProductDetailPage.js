import NavBar from '../Components/Navebar';
import FooterS from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from '../Components/ProductDetails';
import { useParams } from 'react-router-dom';
import { addToCartAC } from '../Action';

const ProductDetailPage = () => {
    const dispatch = useDispatch()
    const  {productId}  = useParams()
    const cartItems = useSelector(state => state.cart.items)
    const products = useSelector(state => state.product.products)
    const product = products.find(p => p._id === productId)
    console.log(productId, products, product);

    const addToCart=(product)=>{
        dispatch(addToCartAC(product))

    }
    return (
        <div className="App">
            <NavBar cartCount={cartItems.length}></NavBar>
            <ProductDetails product={product} addToCart={addToCart}></ProductDetails>
            <FooterS></FooterS>
        </div>
    );
}

export default ProductDetailPage