import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { Login } from './rout/login/login';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function NavBar(){
  return<><AppBar component='nav'>
    <Toolbar>
    
    </Toolbar>
  </AppBar>
  </>
}
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

