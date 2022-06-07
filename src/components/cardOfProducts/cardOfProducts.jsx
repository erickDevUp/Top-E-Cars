import React, { useContext } from 'react';
import './cardOfProducts.styles.css'
import  StoreProductsAddCtx  from '../../context/StoreProductsAddCtx';

const CardOfProducts = ({product}) => {

    const { name, price ,quantity , IMG} = product;

    const { productsAddCtx, setProductsAddCtx } = useContext(StoreProductsAddCtx);

    const handleAddProduct = () => {
        if (productsAddCtx.some(product => product.name == name)) {
            
            setProductsAddCtx(products => {

                return productsAddCtx.map(product => {

                    if (product.name == name) {
                        return { ...product, quantity: product.quantity + 1 }
                    } else return { ...product }
                     
                })

            })
        } else setProductsAddCtx(products => [...products, { ...product, quantity: quantity + 1 }])
    }

    return (
        <div className='cardOfProducts'>
            <img src={IMG} className='imgProduct' alt="car very fast" />
            <div className='dataProduct'>
                <div className='containerAddProduct'>
                    <h2 className='nameProduct'>{name}</h2>
                    <button className='btnAddToCart' onClick={()=>handleAddProduct()}>Add to Cart</button>
                </div>
                <h3 className='priceProduct'><span>$</span>{price}</h3>
            </div>
        </div>
    )
}

export default CardOfProducts