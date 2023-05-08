// Chakra UI
import { Avatar, Button, Flex, Icon, Text, useColorModeValue, useToast } from "@chakra-ui/react";
// Components
import { Switch } from "../../../pages/Topbar/components/Switch";
// Icons
import { BiUserCircle } from "react-icons/bi"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { AiOutlinePoweroff } from "react-icons/ai"
// Hooks
import { useAuthContex } from "../../../App";
// Interfaces
import { UserInt } from "../../../interfaces/UserInt";
// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Functions
import { notify, status } from "../../utils/functions/notify";

interface Modal {
    open: boolean;
    rotate: number;
}

interface Props {
    setUser: (action: UserInt) => void;
}

export const UserActions = (props: Props) => {
    const { setUser } = props;
    const { username, image } = useAuthContex();
    const toast = useToast();
    const navigate = useNavigate();

    const [ modal, setModal ] = useState<Modal>({ open: false, rotate: 0})

    const bgModal = useColorModeValue("#FFFFFF", "#242529")
    const border = useColorModeValue("1px solid #f0f0f3", "1px solid rgba(255, 255, 255, 0.16)")

    const handleClick = () => {
        modal.open 
        ?
        setModal({ open: false, rotate: 0})
        :
        setModal({ open: true, rotate: 180});
    };

    const logoutSesion = () => {
        localStorage.removeItem('token');
            
        setUser({
            auth: false,
            email: null,
            username: null,
            image: null,
            first_name: null,
            last_name: null,
            country: null,
            linkedin: null,
            confirmed: null
        });

        navigate('/login')
        notify(toast, status.success, "Sesión cerrada correctamente")
    };

    return(
        <Flex>
            <Flex bg={bgModal} pr="10px" gap="10px" h="40px" alignItems="center" borderRadius="91px" pos="relative">
                <Avatar name={`${username}`} src={`${image}`} size="md"/>

                <Button 
                onClick={handleClick}
                bg="transparent" 
                display="flex" 
                alignItems="center"  
                p="5px 20px" 
                lineHeight="18px"
                _hover={{bg: "transparent"}}
                >
                    <Flex alignItems="center" gap="12px">
                        <Text fontSize={16} fontWeight="semibold">{username}</Text>

                        <Icon 
                        color="#a5a8b3" 
                        w="20px" 
                        h="20px" 
                        transition="all 0.2s ease 0s" 
                        transform={`rotate(${modal.rotate}deg)`}
                        as={MdOutlineKeyboardArrowDown}
                        >
                        </Icon>
                    </Flex>
                </Button>

                <Flex 
                pos="absolute" 
                bg={bgModal}
                border={border}
                top="50px" 
                right="20px" 
                borderRadius="14px"
                boxShadow="rgba(0, 0, 0, 0.25) 0px 4px 29px 0px"
                zIndex="dropdown"
                opacity={modal.open ? "1" : "0"}
                visibility={modal.open ? "visible" : "hidden"}
                transform={modal.open ? "none" : "scale(0.8) translateZ(0px)"}
                flexDirection="column"
                >
                    <Flex flex="1" flexDirection="column" borderBottom={border} p="22px 18px" gap="10px">
                        <Text fontSize="13px" fontWeight="medium" textAlign="left">
                            Tema de la interfaz
                        </Text>

                        <Switch />
                    </Flex>

                    <Flex flex="1" flexDirection="column" p="22px 18px" gap="15px">

                        <Flex alignItems="center" gap="10px" cursor="pointer">
                            <Icon as={BiUserCircle} color="#8c909c" w="16px" h="16px"/>
                            <Text fontWeight="normal" fontSize="16px">Perfil</Text>
                        </Flex>

                        <Flex alignItems="center" gap="10px" cursor="pointer" onClick={logoutSesion}>
                            <Icon as={AiOutlinePoweroff} color="#8c909c" w="16px" h="16px"/>
                            <Text fontWeight="normal" fontSize="16px">Cerrar sesión</Text>
                        </Flex>
                        
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};