import {useContext} from 'react'

import CartItem from './CartItem'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-contexts'

const Cart =  (props) => {
    const cartCtx = useContext(CartContext)

    const cartItemRemoveHandler = id => {
        cartCtx.removeItems(id)
    }

    const cartItemAddHandler = item => {
        cartCtx.addItems({...item, amount: 1})
    }

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => 
        <CartItem 
            id={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price} 
            onRemove={cartItemRemoveHandler.bind(null, item.id)} 
            onAdd={cartItemAddHandler.bind(null, item)}
        />)}</ul>

    

    const totalAmount = `Rp.${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart