import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { Login } from './rout/login/login';
import { Test } from './rout/test/test'
import { Categories } from './rout/pages/categories/categories';
import { Products } from './rout/pages/products/products';
import { SalesOrder } from './rout/pages/sales-orders/sales-orders';
import { Shippment } from './rout/pages/shippment/shippment';
import { Users } from './rout/pages/users/users';


function ProtectedRoutes() {
  const isLoggedIn = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  })
  if (!isLoggedIn) {
    return <></>
  }

  return <>
    <Routes>
      <Route path='/categories/*' element={<Categories></Categories>} ></Route>
      <Route path='/products/*' element={<Products></Products>} ></Route>
      <Route path='/sales-orders/*' element={<SalesOrder></SalesOrder>} ></Route>
      <Route path='/shippment/*' element={<Shippment></Shippment>} ></Route>
      <Route path='/users/*' element={<Users></Users>} ></Route>
    </Routes>
  </>
}

function App() {
  return <>
    <Router>
      <Routes>
        <Route path='/login/*' element={<Login></Login>} ></Route>
        <Route path='/*' element={<ProtectedRoutes />} ></Route>
        <Route path='/test/*' element={<Test></Test>} ></Route>
      </Routes>
    </Router>
  </>
}

export default App;

// test layout
// camcel case testLayout TestLayout
// dash case test-layout

// 1. url ve path tipli 
// &2^@#&! \/

// her bir komanda, ya vertikal ya horizontal
