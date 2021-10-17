import React from 'react'

const CartContexts = React.createContext({
    items: [],
    totalAmount: 0,

    addItems: (item) => {},
    removeItems: (id) => {}
})

export default CartContexts
