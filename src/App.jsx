import { useState } from 'react'
import './App.css'
import Store from './page/store/store'
import {StoreProductsAddCtx}  from './context/StoreProductsAddCtx'

function App() {

  return (
    <div className='app'>
      <StoreProductsAddCtx>
        <Store />
      </StoreProductsAddCtx >
    </div>
  )
}

export default App
