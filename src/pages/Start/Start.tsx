// React
import { useState } from "react";
// Chakra UI
import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
// Components
import { Login } from "./Views/Login";
import { Signup } from "./Views/Signup";
// Icon
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
// Img
import loginImg from '../../assets/img/fondo.png'
// Interfaces
import { UserInt } from "../../interfaces/UserInt";

interface Props {
    setUser: (action: UserInt) => void;
}

export const Start = (props: Props) => {
    const { setUser } = props;
    const [ activePanel, setActivePanel ] = useState(false)

    const handleRegisterClick = () => {
        setActivePanel(true);
    };

    const handleLoginClick = () => {
        setActivePanel(false);
    };

    return(
        <Flex 
        justifyContent="center" 
        alignItems="center" 
        flexDirection="column" 
        overflow="hidden" 
        h="100vh" 
        w= "100%"
        position="relative"
        className={activePanel ? "right-panel-active overlay" : "overlay"} 
        backgroundImage={`url(${loginImg})`}
        backgroundRepeat= "no-repeat"
        backgroundSize= "cover"
        backgroundPosition= "0 0"
        transform= "translateX(0)"
        transition= "transform 0.6s ease-in-out"
        >   
            <Flex
            className="register"
            position="absolute"
            top="0"
            h="100%"
            transition="all 0.6s ease-in-out"
            left="0"
            w="50%"
            opacity="0"
            zIndex="1"
            >
                <Signup setActivePanel={setActivePanel} />
            </Flex>
            
            <Flex 
            className="login"
            position="absolute"
            top="0"
            h="100%"
            transition="all 0.6s ease-in-out"
            left="0"
            w="50%"
            zIndex="2"
            >
                <Login setUser={setUser} />
            </Flex>

            <Box
            className="overlay-container"
            position="absolute"
            top="0"
            left="50%"
            w="100%"
            h="100%"
            overflow="hidden"
            transition="transform 0.6s ease-in-out"
            zIndex="100"
            color="#FFFFFF"
            >
                <Flex 
                className="overlay-right"
                position="absolute"
                alignItems="center"
                justifyItems="center"
                flexDirection="column"
                p="0 40px"
                textAlign="center"
                top="35%"
                h="100%"
                w="50%"
                transform="translateX(0)"
                transition="transform 0.6s ease-in-out"
                opacity="0"
                >
                    <Heading 
                    as="h1" 
                    m="0" 
                    fontSize="45px"
                    lineHeight="45px"
                    textShadow="0 0 10px rgba(16, 64, 74 0.5)"
                    >
                        ¡Bienvenido/a!
                    </Heading>

                    <Text
                    fontSize="14px"
                    fontWeight="300"
                    lineHeight="20px"
                    letterSpacing="0.5px"
                    m="30px 0 30px"
                    textShadow="0 0 10px rgba(16, 64, 74 0.5)"
                    >
                        Si ya tienes cuenta, inicia sesión aquí
                    </Text>

                    <Button 
                    className="ghost" 
                    id="login" 
                    display="flex"
                    gap="5px"
                    alignItems="center"
                    backgroundColor='#32D4A4' 
                    color="#FFFFFF"
                    position="relative"
                    m="20px"
                    fontSize="15px"
                    p="12px 80px"
                    letterSpacing="1px"
                    transition="0.3s ease-in-out"
                    _hover={{letterSpacing: "3px", gap: "20px"}}
                    _active={{transform: "scale(0.95)"}}
                    _focus={{outline: "none"}}
                    onClick={handleLoginClick}
                    >
                        Login
                        <Icon
                        fontSize="20px"
                        className="icon"
                        as={HiOutlineArrowLongRight} 
                        />
                    </Button>
                </Flex>

                <Flex 
                className="overlay-left"
                position="absolute"
                alignItems="center"
                justifyItems="center"
                flexDirection="column"
                textAlign="center"
                top="35%"
                h="100%"
                w="50%"
                transition="transform 0.6s ease-in-out"
                transform= "translateX(0)"
                >
                    <Heading 
                    as="h1" 
                    margin="0" 
                    fontSize="45px"
                    lineHeight="45px"
                    textShadow="0 0 10px rgba(16, 64, 74 0.5)"
                    >
                        Comience su camino como desarrollador
                    </Heading>

                    <Text
                    fontSize="14px"
                    fontWeight="300"
                    lineHeight="20px"
                    letterSpacing="0.5px"
                    m="30px 0 30px"
                    textShadow="0 0 10px rgba(16, 64, 74 0.5)"
                    >
                        Si aún no tiene una cuenta, regístrese aquí y comience de inmediato.
                    </Text>

                    <Button 
                    className="ghost" 
                    id="register" 
                    display="flex"
                    alignItems="center"
                    gap="5px"
                    backgroundColor='#32D4A4' 
                    color="#FFFFFF"
                    position="relative"
                    m="20px"
                    fontSize="15px"
                    p="12px 80px"
                    letterSpacing="1px"
                    transition="0.3s ease-in-out"
                    _hover={{letterSpacing: "3px", gap: "20px"}}
                    _active={{transform: "scale(0.95)"}}
                    _focus={{outline: "none"}}
                    onClick={handleRegisterClick}
                    >
                        <Icon
                        className="icon"
                        fontSize="20px"
                        as={HiOutlineArrowLongLeft} 
                        />
                        Register
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};