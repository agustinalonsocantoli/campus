// Chakra UI
import { Box, Flex, Image, Heading, FormControl, FormLabel, Input, Checkbox, Button } from '@chakra-ui/react'
// Img
import loginImg from '../../assets/img/login.png'
import logoOB from '../../assets/img/logo.png'
// React
import { Link } from 'react-router-dom';

export const Login = () => {
    return(
        <Flex h="100vh">
            <Box flex="1">
                <Image
                src={logoOB}
                alt='img/logo'
                objectFit="contain"
                w="220px"
                p="3% 3%"
                />

                <Box w="60%" m="auto" mt="100px">
                    <Heading fontSize="28px">¡Bienvenido/a!</Heading>

                    <FormControl mt="12">
                        <Box>
                            <FormLabel fontSize="13px" fontWeight="bold">Email</FormLabel>
                            <Input variant='filled' placeholder='Introduce tu email' size='md' focusBorderColor='#32D4A4' />
                        </Box>

                        <Box mt="8">
                            <FormLabel fontSize="13px" fontWeight="bold">Contraseña</FormLabel>
                            <Input variant='filled' placeholder='Introduce tu contraseña' size='md' focusBorderColor='#32D4A4' />
                        </Box>

                        <Flex justifyContent="space-between" alignItems="center" mt="8">
                            <Checkbox>Recuerdame</Checkbox>
                            <Link to={""} style={{color: "#32D4A4", fontSize: 14, fontWeight: "bold"}}>¿Has olvidado la contraseña?</Link>
                        </Flex>

                        <Button type='submit' background='#32D4A4' color="#FFFFFF" mt="8" w="100%">Iniciar sesíon</Button>
                        <Button type='submit' background='#121625' color="#FFFFFF" mt="2" w="100%">Registrar nueva cuenta</Button>
                    </FormControl>

                </Box>
            </Box>

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