import './Cart.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
function Cart()
{
    return (
        <div class="CartContainer">
        <Header/>
          <h3>Cart is Empty</h3>
        <Footer/>
        </div>
    )
}

export default Cart;