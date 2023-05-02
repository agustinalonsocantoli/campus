// Chakra UI
import { ChakraProvider } from '@chakra-ui/react'
// Prime React
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { getUsers } from './shared/middlewares/getUsers';
import { Login } from './pages/Login/Login';


function App() {

  useEffect(() => {
    getUsers();

  }, [])

  return (
    <Router basename='/'>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<div>
            <h1>Start Campus</h1>
            <h2>Test Vercel</h2>
          </div>} />

          <Route path='/login' element={<Login />}/>
        </Routes>
      </ChakraProvider>
    </Router>
  )
}

export default App
