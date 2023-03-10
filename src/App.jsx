import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { Login } from './pages/login/login';
import { Test } from './test/test'
import { Categories } from './pages/categories/categories';
import { Products } from './pages/products/products';
import { Users } from './pages/users/users';
import { UsersAdd } from './pages/users/add';
import { UsersUpdate } from './pages/users/update';
import { UsersView } from './pages/users/view';
import { ProductsAdd } from './pages/products/add';
import { ProductUpdate } from './pages/products/update';
import { ProductView } from './pages/products/view';
import { CategoriesAdd } from './pages/categories/add';
import { CategoriesUpdate } from './pages/categories/update';
import { CategoriesView } from './pages/categories/view';
import { Password } from './components/password/password';
import { BasicCrudActions } from './components/BasicCrudActions/BasicCrudActions';
import { Exchange } from './pages/exchange/exchange';
import { ExchangeSimpleWidget } from './components/exchange/exsimwid';
import { ExchangeItem } from './pages/exchange/exchange-item';
import { UserInfo } from './pages/userinfo/user-info';
import { Fullname } from './components/fullname/fullname';
import { Name } from './pages/userinfo/name';
import { SymbolDashboard } from './pages/symbol-dashboard/symbol-dashboard';
import { ViewHistoricalChart } from './pages/symbol-dashboard/viewhistoricalchart';
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
      <Route path='/categories/update/:id' element={<CategoriesUpdate></CategoriesUpdate>} ></Route>
      <Route path='/categories/view/:id' element={<CategoriesView></CategoriesView>} ></Route>
      <Route path='/categories/add' element={<CategoriesAdd></CategoriesAdd>} ></Route>
      <Route path='/products' element={<Products></Products>} ></Route>
      <Route path='/products/add' element={<ProductsAdd></ProductsAdd>} ></Route>
      <Route path='/products/update/:id' element={<ProductUpdate></ProductUpdate>} ></Route>
      <Route path='/products/view/:id' element={<ProductView></ProductView>} ></Route>
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
        <Route path='/exchange-item/:fromCurrency/:toCurrency/:rate' element={<ExchangeItem></ExchangeItem>} ></Route>
        <Route path='/user-info' element={<UserInfo></UserInfo>} ></Route>
        <Route path='/fullname' element={<Fullname></Fullname>} ></Route>
        <Route path='/name' element={<Name></Name>} ></Route>
        <Route path='/symbol-dashboard' element={<SymbolDashboard></SymbolDashboard>} ></Route>
        {/* <Route path='/viewhistoricalchart' element={<ViewHistoricalChart></ViewHistoricalChart>} ></Route> */}
        <Route path='/viewhistoricalchart/:symbol/:timeRange' element={<ViewHistoricalChart></ViewHistoricalChart>} ></Route>
      </Routes>
    </Router>
  </>
}
export default App;
