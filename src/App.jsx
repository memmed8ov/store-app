import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { Login } from './rout/login/login';
import { Test } from './rout/test/test'
import { Categories } from './rout/pages/categories/categories';
import { Products } from './rout/pages/products/products';
import { SalesOrder } from './rout/pages/sales-orders/sales-orders';
import { Shippment } from './rout/pages/shippment/shippment';
import { Users } from './rout/pages/users/users';
import { UsersAdd } from './rout/pages/users/add';
import { UsersUpdate } from './rout/pages/users/update';
import { UsersView } from './rout/pages/users/view';
import { Add } from './rout/pages/products/add';
import { ProductUpdate } from './rout/pages/products/update';
import { ProductView } from './rout/pages/products/view';
import { AddCategories } from './rout/pages/categories/add';
import { Update } from './rout/pages/categories/update';
import { View } from './rout/pages/categories/view';
import{Password} from './rout/password/password';
import{BasicCrudActions} from './rout/BasicCrudActions/BasicCrudActions';
import{Exchange} from './exchange/exchange';
import { ExchangeSimpleWidget } from './exchange/exsimwid';
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
      <Route path='/categories' element={<Categories></Categories>} ></Route>
      <Route path='/categories/update/:id' element={<Update></Update>} ></Route>
      <Route path='/categories/view/:id' element={<View></View>} ></Route>
      <Route path='/categories/add' element={<AddCategories></AddCategories>} ></Route>
      <Route path='/products' element={<Products></Products>} ></Route>
      <Route path='/products/add' element={<Add></Add>} ></Route>
      <Route path='/products/update/:id' element={<ProductUpdate></ProductUpdate>} ></Route>
      <Route path='/products/view/:id' element={<ProductView></ProductView>} ></Route>
      <Route path='/sales-orders' element={<SalesOrder></SalesOrder>} ></Route>
      <Route path='/shippment' element={<Shippment></Shippment>} ></Route>
      <Route path='/users' element={<Users></Users>} ></Route>
      <Route path='/users/add' element={<UsersAdd></UsersAdd>} ></Route>
      <Route path='/users/update/:id' element={<UsersUpdate></UsersUpdate>} ></Route>
      <Route path='/users/view/:id' element={<UsersView></UsersView>} ></Route>
      <Route path='/password' element={<Password></Password>} ></Route>
      <Route path='/BasicCrudActions' element={<BasicCrudActions></BasicCrudActions>} ></Route>
      
    </Routes>
  </>
}
function App() {
  return <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/*' element={<ProtectedRoutes />} ></Route>
        <Route path='/test' element={<Test></Test>} ></Route>
        <Route path='/exchange' element={<Exchange></Exchange>} ></Route>
        <Route path='/exsimwid' element={<ExchangeSimpleWidget></ExchangeSimpleWidget>} ></Route>
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
