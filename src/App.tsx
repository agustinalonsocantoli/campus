// Chakra UI
import { ChakraProvider } from '@chakra-ui/react'
// Prime React
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { getUsers } from './shared/middlewares/getUsers';


function App() {

  useEffect(() => {
    getUsers();

  }, [])

  return (
    <Router basename='/'>
      <ChakraProvider>
        <h1>Start Campus</h1>
        <h2>Test Vercel</h2>

      </ChakraProvider>
    </Router>
  )
}

export default App
