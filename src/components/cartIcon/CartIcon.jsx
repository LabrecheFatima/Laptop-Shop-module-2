import './CartIcon.css';
import { useCart } from '../contexts/CartContext';

function CartIcon() {
    const {getCartItemsCount, getCartTotal} = useCart();
    const itemCount= getCartItemsCount();
    const total= getCartTotal();

    const handleCartInfo = () => {
        if (itemCount> 0) {
            alert(`🛒 You have ${itemCount} item(s) in cart\n💰 Total: $${total}\n\nProceed to checkout?`);
        }

        else {
            alert('your cart is emplty');
        }
    }

    return (
        <div className='cart-icon' onClick={handleCartInfo}>
            <span className= 'cart-symbol'>🛒</span>
            {itemCount> 0 && (<span>{itemCount}</span>)}
            <span className="cart-text">Cart</span>
            {itemCount > 0 && (
                <span className="cart-total">${total}</span>
            )}
        </div>
    
    )
}

export default CartIcon;

