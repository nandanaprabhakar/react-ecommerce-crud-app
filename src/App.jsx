import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ProductDetails from './Pages/ProductDetails'
import Product from './Pages/Product'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product-details/:id' element={<ProductDetails/>}/>
     </Routes>
    </>
  )
}

export default App
