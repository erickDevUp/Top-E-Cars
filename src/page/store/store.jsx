import React from 'react';
import TopBar from '../../components/topBar/topBar';
import CoreStore from '../../components/coreStore/coreStore';
import CartOfBuy from '../../components/CartOfBuy/CartOfBuy';


const Store = () => {


    return (
        <div className='store' style={{width:'100%'}}>
            <TopBar />
            <CoreStore/>
            <CartOfBuy/>
        </div>
    )
}

export default Store