import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { Login } from './rout/login/login';


 function App() {

  return <>

    <Router>
      <Routes>
        <Route path='/login/*' element={<Login></Login>} ></Route>

      </Routes>
    </Router>
  </>

}

export default App;
//hocaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa where have you beeeeennnn 

