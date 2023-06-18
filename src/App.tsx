// Chakra UI
import { Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react'
// Prime React
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
// React
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
// Interfaces
import { UserInt } from './interfaces/UserInt';
// Components
import  { RequireAuth } from './pages/RequireAuth/RequireAuth';
import { Courses } from './pages/Courses/Courses';
import { Sidebar } from './pages/Sidebar/Sidebar';
import { Topbar } from './pages/Topbar/Topbar';
import { Home } from './pages/Home/Home';
import { Start } from './pages/Start/Start';
import { Jobs } from './pages/Jobs/Jobs';

const AuthContext = React.createContext<UserInt>({
  auth: localStorage.getItem('token') ? true : false,
  email: null,
  username: null,
  avatarUrl: null,
  firstName: null,
  lastName: null,
  country: null,
  city: null,
  linkedin: null,
  confirmed: null
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContex = () => {
  return useContext(AuthContext);
}

function App() {
  const perfilUser: UserInt = JSON.parse(localStorage.getItem('perfil') || '{}');

  const [ user, setUser ] = useState<UserInt>({
    auth: localStorage.getItem('token') ? true : false,
    email: perfilUser?.email ? perfilUser.email : null,
    username: perfilUser?.username ? perfilUser.username : null,
    avatarUrl: perfilUser?.avatarUrl ? perfilUser.avatarUrl : null,
    firstName: perfilUser?.firstName ? perfilUser.firstName : null,
    lastName: perfilUser?.lastName ? perfilUser.lastName : null,
    country: perfilUser?.country ? perfilUser.country : null,
    city: perfilUser?.city ? perfilUser.city : null,
    linkedin: perfilUser?.linkedin ? perfilUser.linkedin : null,
    confirmed: perfilUser?.confirmed ? perfilUser.confirmed : null
  });
  
  const [ title, setTitle ] = useState<string>('Inicio')

  return (
    <Router basename='/'>
      <AuthContext.Provider value={user} >
        <ChakraProvider>
          <Flex>
            {user.auth && <Sidebar title={title} />}

            <Box flex="1" pl={user.auth ? "86px" : "0"}>
                {user.auth && <Topbar setUser={setUser} title={title} setTitle={setTitle} />}

              <Routes>
                <Route path='/login' element={!user.auth ? <Start setUser={setUser}/> : <Navigate to={"/"} />}/>

                  <Route element={<RequireAuth />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/rutas' element={<Heading p="5%" fontSize={30}>Rutas</Heading>} />
                    <Route path='/empleos' element={<Jobs />} />
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
