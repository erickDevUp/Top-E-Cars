import React, { useState, useContext, useMemo, useEffect } from 'react'

import  StoreProductsAddCtx  from '../../context/StoreProductsAddCtx'
import SideBar from '../sideBar/SideBar'
import './CartOfBuy.styles.css'
import cart from '../../assets/shoppingCart.svg';

const CartOfBuy = () => {

    const [viewSideBar, setViewSideBar] = useState(false)
    const { productsAddCtx, setProductsAddCtx } = useContext(StoreProductsAddCtx);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(() => {
            if (productsAddCtx[0]) {
                return productsAddCtx.map(product => product.quantity).
                    reduce((lastProduct, product) => { return lastProduct + product })
            }
        })
    }, [productsAddCtx])


    return (
        <>
            {
                productsAddCtx[0] &&
                <div className='carOfBuy' onClick={() => setViewSideBar(true)}>
                    <span class="material-symbols-outlined">
shopping_cart
</span><span className='itemInCart'>{total}</span>
                </div>
            }
            {
                viewSideBar == true &&
                <SideBar setViewSideBar={setViewSideBar} />
            }
        </>
    )
}
export default CartOfBuy