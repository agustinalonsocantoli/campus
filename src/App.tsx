// Chakra UI
import { ChakraProvider } from '@chakra-ui/react'
// Prime React
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
// React
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
// Components
import { Login } from './pages/Login/Login';
import  { RequireAuth } from './pages/RequireAuth/RequireAuth';
// Interfaces
import { UserInt } from './interfaces/UserInt';
import { Courses } from './pages/Courses/Courses';

const AuthContext = React.createContext<UserInt>({
  auth: localStorage.getItem('token') ? true : false,
  email: null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContex = () => {
  return useContext(AuthContext);
}

function App() {
  const [ user, setUser ] = useState<UserInt>({
    auth: localStorage.getItem('token') ? true : false,
    email: null,
  });

  return (
    <Router basename='/'>
      <AuthContext.Provider value={user} >
        <ChakraProvider>
          <Routes>
            <Route path='/login' element={!user.auth ? <Login setUser={setUser}/> : <Navigate to={"/"} />}/>

            <Route element={<RequireAuth />}>
              <Route path='/' element={<div>
                <h1>Start Campus</h1>
                <h2>Test Vercel</h2>
              </div>} />

              <Route path='/cursos' element={<Courses />} />
            </Route>
          </Routes>
        </ChakraProvider>
      </AuthContext.Provider>
    </Router>
  )
}

export default App
