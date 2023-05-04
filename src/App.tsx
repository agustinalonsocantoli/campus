// Chakra UI
import { Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react'
// Prime React
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
// React
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
// Components
import { Login } from './pages/Login/Login';
import  { RequireAuth } from './pages/RequireAuth/RequireAuth';
import { Courses } from './pages/Courses/Courses';
import { Sidebar } from './pages/Sidebar/Sidebar';
import { Topbar } from './pages/Topbar/Topbar';
// Interfaces
import { UserInt } from './interfaces/UserInt';

const AuthContext = React.createContext<UserInt>({
  auth: localStorage.getItem('token') ? true : false,
  email: null,
  username: null,
  image: null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContex = () => {
  return useContext(AuthContext);
}

function App() {
  const [ user, setUser ] = useState<UserInt>({
    auth: localStorage.getItem('token') ? true : false,
    email: null,
    username: null,
    image: null,
  });

  return (
    <Router basename='/'>
      <AuthContext.Provider value={user} >
        <ChakraProvider>

          <Flex>
            {user.auth && <Sidebar />}

            <Box flex="1" bg="#f8f8f9" pl="86px">
            {user.auth && <Topbar />}

              <Routes>
                <Route path='/login' element={!user.auth ? <Login setUser={setUser}/> : <Navigate to={"/"} />}/>

                  <Route element={<RequireAuth />}>
                    <Route path='/' element={<Heading px="5%" fontSize={30}>Content</Heading>} />

                    <Route path='/cursos' element={<Courses />} />
                  </Route>
              </Routes>
            </Box>
          </Flex>
        </ChakraProvider>
      </AuthContext.Provider>
    </Router>
  )
}

export default App
