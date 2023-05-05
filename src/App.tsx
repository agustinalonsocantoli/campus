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
  
  const [ title, setTitle ] = useState<string>('Inicio')

  return (
    <Router basename='/'>
      <AuthContext.Provider value={user} >
        <ChakraProvider>
          <Flex>
            {user.auth && <Sidebar title={title} />}

            <Box flex="1" pl="86px">
            {user.auth && <Topbar setUser={setUser} title={title} setTitle={setTitle} />}

              <Routes>
                <Route path='/login' element={!user.auth ? <Login setUser={setUser}/> : <Navigate to={"/"} />}/>

                  <Route element={<RequireAuth />}>
                    <Route path='/' element={<Heading p="5%" fontSize={30}>Inicio</Heading>} />
                    <Route path='/rutas' element={<Heading p="5%" fontSize={30}>Rutas</Heading>} />
                    <Route path='/empleos' element={<Heading p="5%" fontSize={30}>Empleo</Heading>} />
                    <Route path='/cursos' element={<Courses />} />
                    <Route path='/certificaciones' element={<Heading p="5%" fontSize={30}>Certificaciones</Heading>} />
                    <Route path='/foros' element={<Heading p="5%" fontSize={30}>Foros</Heading>} />
                    <Route path='/novedades' element={<Heading p="5%" fontSize={30}>Novedades</Heading>} />
                    <Route path='/comunidad' element={<Heading p="5%" fontSize={30}>Comunidad</Heading>} />
                    <Route path='/favoritos' element={<Heading p="5%" fontSize={30}>Favoritos</Heading>} />
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
