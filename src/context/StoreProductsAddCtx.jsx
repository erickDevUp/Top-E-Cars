import React,{ useState } from 'react';

const context = React.createContext({});

const StoreProductsAddCtx =({children})=>
{
   const [productsAddCtx , setProductsAddCtx] = useState([])

    return <context.Provider value={{productsAddCtx,setProductsAddCtx}}>
        {children}
    </context.Provider>

}
export default context;
export {StoreProductsAddCtx};