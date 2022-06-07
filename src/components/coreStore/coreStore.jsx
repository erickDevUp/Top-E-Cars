import React from 'react';
import './coreStore.styles.css'
import CardOfProducts from '../cardOfProducts/cardOfProducts';
import DataCardProduct from '../../helpers/DataCardProduct'

const CoreStore = () => {


    const { products, Img } = DataCardProduct()
    return (
        <div className='coreStore'>

            {
                products.map(product=><CardOfProducts product={product} />)
            }

        </div>
    )
}

export default CoreStore