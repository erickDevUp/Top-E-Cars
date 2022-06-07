import React, { useState, useContext, useEffect } from 'react'
import './SideBar.styles.css'
import { useCallback } from 'react';
import  StoreProductsAddCtx  from '../../context/StoreProductsAddCtx';

function SideBar({ setViewSideBar }) {

    const { productsAddCtx, setProductsAddCtx } = useContext(StoreProductsAddCtx);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let total = 0
        productsAddCtx.every(listProduct => total = total + (listProduct.price * listProduct.quantity))
        setTotalPrice(total)
    }, [productsAddCtx])

    const handleUpdateProduct = (name, quantity) => {
        const newProducts = productsAddCtx.filter(product => quantity <= 0 ? product.name != name : product)
            .map((product) => {
                if (product.name == name) {
                    return {
                        ...product,
                        quantity: quantity
                    }
                }
                return product
            })
        setProductsAddCtx(newProducts)
    }

    return (
        <div className='sideBar'>
            <h3 style={{fontFamily:'serif'}}>Car Of Buy</h3>
            <button className='btnCloseSideBar' onClick={() => setViewSideBar(false)}>X</button>
            <section className='containerProductBuy'>

                {
                    productsAddCtx.map(listProduct =>
                        <div className='listProductBuy'>
                            <h4>{listProduct.name}</h4>
                            <div className='countRipiteProduct'>
                                <button className='btnCountProduct' onClick={() => handleUpdateProduct(listProduct.name, listProduct.quantity - 1)}>-</button>
                                <h4>{listProduct.quantity}</h4>
                                <button className='btnCountProduct' onClick={() => handleUpdateProduct(listProduct.name, listProduct.quantity + 1)}>+</button>
                                
                            </div>
                            <h4 className='priceProductBuy'>${listProduct.price * listProduct.quantity}</h4>
                        </div>
                    )
                }
            </section>
            <div style={{ borderTop: '1px solid #000',borderBottom:'none', padding: '10px'}} className='listProductBuy'>
                    <h4 >TOTAL</h4>
                    <h4 className='totalPriceBuy'>${totalPrice}</h4>
                </div>
            <button className='btnBuy' onClick={()=>alert('esta es una web de prueba')} style={{fontFamily:'serif'}}>BUY NAW</button>
        </div>
    )
}

export default SideBar