import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import NotFound from "./pages/NotFound";


const App = () => {

  return (

    <BrowserRouter>
      <Routes>
          <Route path = '/' element={<Home/>} />
          <Route path = '/shoppingCart' element={<ShoppingCart/>} />
          <Route path = '*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
