/* eslint-disable @typescript-eslint/no-explicit-any */
// Chakra UI
import { Box, Flex, Image, Heading, FormLabel, Input, Checkbox, Button, Text, Link } from '@chakra-ui/react'
// Img
import loginImg from '../../assets/img/login.png'
import logoOB from '../../assets/img/logo.png'
// React
import { Link as LinkRouter, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// Interfaces
import { UserInt } from '../../interfaces/UserInt'
// Toast
import { useToast } from '@chakra-ui/react'
import { notify } from '../../shared/utils/functions/notify'
import { status } from '../../shared/utils/functions/notify'
// Middlewares
import { getToken } from '../../shared/middlewares/getToken'

interface Props {
    setUser: (action: UserInt) => void;
}

export const Login = (props: Props) => {
    const { setUser } = props;
    const navigate = useNavigate();
    const toast = useToast();
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const validateLogin = (jwt: string, user: UserInt) => {
        const perfilUser: UserInt = {
            auth: true,
            email: user?.email,
            username: user?.username ? user.username : '',
            avatarUrl: user?.avatarUrl ? user.avatarUrl : '',
            firstName: user?.firstName,
            lastName: user?.lastName,
            country: user?.country ? user.country : '',
            city: user?.city ? user.city : '',
            linkedin: user?.linkedin ? user.linkedin : '',
            confirmed: user?.confirmed
        }

        localStorage.setItem('token', jwt)
        localStorage.setItem('perfil', JSON.stringify(perfilUser))
            
        setUser(perfilUser);

        navigate('/')
    };
    
    const handleSubmit = (e:  React.FormEvent) => {
        e.preventDefault();

        getToken(email, password).then((response: any) => {

            (typeof response !== "undefined")
            ? validateLogin(response.token, response.data)
            : notify(toast, status.error, "Email o Password incorrecto!");
        })
        .catch((error) => {
            console.log(error)
        });
    };

    return(
        <Flex h="100vh">
            <Flex flex="1" flexDirection="column" pt="2%" pb="2%">
                <Image
                src={logoOB}
                alt='img/logo'
                objectFit="contain"
                w="220px"
                p="0 3%"
                />

                <Box w="60%" m="auto" mt="80px">
                    <Heading fontSize="28px">¡Bienvenido/a!</Heading>

                    <Box mt="10">
                        <form onSubmit={handleSubmit}>
                            <Box>
                                <FormLabel fontSize="13px" fontWeight="bold">Email</FormLabel>
                                <Input
                                type='email'
                                variant='filled' 
                                placeholder='Introduce tu email' 
                                size='md' 
                                focusBorderColor='#32D4A4'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                />
                            </Box>

                            <Box mt="8">
                                <FormLabel fontSize="13px" fontWeight="bold">Contraseña</FormLabel>
                                <Input
                                type='password' 
                                variant='filled' 
                                placeholder='Introduce tu contraseña' 
                                size='md' 
                                focusBorderColor='#32D4A4' 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                />
                            </Box>

                            <Flex justifyContent="space-between" alignItems="center" mt="8">
                                <Checkbox>Recuerdame</Checkbox>
                                <Link as={LinkRouter} to={""} color="#32D4A4" fontSize={14} fontWeight="bold">
                                    ¿Has olvidado la contraseña?
                                </Link>
                            </Flex>

                            <Button type='submit' background='#32D4A4' color="#FFFFFF" mt="8" w="100%">Iniciar sesíon</Button>
                            <Button background='#121625' color="#FFFFFF" mt="2" w="100%">Registrar nueva cuenta</Button>
                        </form>
                    </Box>
                </Box>

                <Flex p="0 3%" mt={3}>
                    <Text w="55%" fontSize="12px" fontWeight="bold">
                        Copyright © 2023 OpenBootcamp S.L. Todos los derechos reservados.
                    </Text>

                    <Link as={LinkRouter} to={""} flex="1" textAlign="right" fontSize={12} fontWeight="bold" textDecoration="underline">
                        Política de Privacidad
                    </Link>
                </Flex>
            </Flex>

            <Box flex="1">
                <Image 
                src={loginImg} 
                alt="img/login" 
                objectFit="cover"
                h="100%"
                />
            </Box>
        </Flex>
    );
};