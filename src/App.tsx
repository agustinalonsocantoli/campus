// Chakra UI
import { ChakraProvider } from '@chakra-ui/react'
// Prime React
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useContext, useState } from 'react';
// Middlewares
import { getUsers } from './shared/middlewares/getUsers';
// Components
import { Login } from './pages/Login/Login';
import  { RequireAuth } from './pages/RequireAuth/RequireAuth';
// Interfaces
import { UserInt } from './interfaces/UserInt';

const AuthContext = React.createContext<UserInt>({
  auth: false,
  email: null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContex = () => {
  return useContext(AuthContext);
}

function App() {
  const [ user, setUser ] = useState<UserInt>({
    auth: false,
    email: null,
  });

  useEffect(() => {
    getUsers();

  }, [])

  return (
    <Router basename='/'>
      <AuthContext.Provider value={user} >
        <ChakraProvider>
          <Routes>
            <Route path='/login' element={<Login setUser={setUser}/>}/>

            <Route element={<RequireAuth />}>
              <Route path='/' element={<div>
                <h1>Start Campus</h1>
                <h2>Test Vercel</h2>
              </div>} />
            </Route>
          </Routes>
        </ChakraProvider>
      </AuthContext.Provider>
    </Router>
  )
}

export default App
