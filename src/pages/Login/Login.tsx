// Chakra UI
import { Box, Flex, Image, Heading, FormLabel, Input, Checkbox, Button, Text } from '@chakra-ui/react'
// Img
import loginImg from '../../assets/img/login.png'
import logoOB from '../../assets/img/logo.png'
// React
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// Interfaces
import { UserInt } from '../../interfaces/UserInt'

type Props = {
    setUser: (action: UserInt) => void;
}

export const Login = (props: Props) => {
    const { setUser } = props;
    const navigate = useNavigate();
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleSubmit = (e:  React.FormEvent) => {
        e.preventDefault();

        if(email === import.meta.env.VITE_EMAIL_LOGIN) {
            if (password === import.meta.env.VITE_PASSWORD_LOGIN) {
                setUser({
                    auth: true,
                    email: null,
                });

                navigate('/')
            } else {
                console.log("PASSWORD")
            }
        } else {
            console.log('USER')
        }
    };

    console.log(email)
    console.log(password)

    return(
        <Flex h="100vh">
            <Flex flex="1" flexDirection="column" p="3% 0">
                <Image
                src={logoOB}
                alt='img/logo'
                objectFit="contain"
                w="220px"
                p="0 3%"
                />

                <Box w="60%" m="auto" mt="100px">
                    <Heading fontSize="28px">¡Bienvenido/a!</Heading>

                    <Box mt="12">
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
                                <Link to={""} className='recovery_pass'>¿Has olvidado la contraseña?</Link>
                            </Flex>

                            <Button type='submit' background='#32D4A4' color="#FFFFFF" mt="8" w="100%">Iniciar sesíon</Button>
                            <Button background='#121625' color="#FFFFFF" mt="2" w="100%">Registrar nueva cuenta</Button>
                        </form>
                    </Box>
                </Box>

                <Flex p="0 3%">
                    <Text w="55%" fontSize="12px" fontWeight="bold">
                        Copyright © 2023 OpenBootcamp S.L. Todos los derechos reservados.
                    </Text>

                    <Link to={""} className='privacy_policy'>
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