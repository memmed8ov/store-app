import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { Login } from './rout/login/login';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Test } from './rout/test/test'
import { Categories } from './rout/pages/categories/categories';
import { BaseLayout } from './rout/layout/base-layout';



function App() {
  return <>
    <Router>
      <Routes>
        <Route path='/login/*' element={<Login></Login>} ></Route>
        <Route path='/categories/*' element={<Categories></Categories>} ></Route>
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
