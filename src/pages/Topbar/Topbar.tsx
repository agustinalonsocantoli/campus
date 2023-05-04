// Chakra UI
import { Flex, Heading, Button, Icon, Link, Avatar, Text } from "@chakra-ui/react";
// Icons
import { SlHeart } from "react-icons/sl"
import { FaRegCalendarAlt } from "react-icons/fa"
import { BiBell } from "react-icons/bi"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
// React
import { Link as LinkRouter } from "react-router-dom";
import { useState } from "react";
// Hook
import { useAuthContex } from "../../App";

interface Modal {
    open: boolean;
    rotate: number;
}


export const Topbar = () => {
    const { username, image } = useAuthContex();
    const [ modal, setModal ] = useState<Modal>({ open: false, rotate: 0})

    const handleClick = () => {
        modal.open 
        ?
        setModal({ open: false, rotate: 0})
        :
        setModal({ open: true, rotate: 180});
    };
    
    return(
        <Flex px="34px" minH="80px" alignItems="center" justifyContent="space-between">
            <Heading>Cursos</Heading>

            <Flex gap="8px" alignItems="end">
                <Flex 
                bg='rgb(4, 122, 243)' 
                fontSize={15} 
                fontWeight="bold" 
                lineHeight="19px" 
                borderRadius="full"
                alignItems="center"
                gap="10px"
                color="#FFFFFF"
                p="9px 14px"
                cursor="pointer"
                _hover={{ bg: "rgb(4, 122, 243, .8)" }}
                >
                    <Link as={LinkRouter} to="" textDecoration="none !important" display="flex" alignItems="center" gap="10px">
                        <Icon as={SlHeart} />
                        ¡Apóyanos!
                    </Link>
                </Flex>

                <Button 
                bg="transparent" 
                display="flex" 
                alignItems="center" 
                justifyContent="center" 
                _hover={{ bg: "transparent" }}
                >
                    <Icon as={FaRegCalendarAlt} color="#a5a8b3" w="24px" h="24px" _hover={{ color: "rgba(165, 168, 179, .7)" }}/>
                </Button>

                <Button 
                bg="transparent" 
                display="flex" 
                alignItems="center" 
                justifyContent="center" 
                _hover={{ bg: "transparent" }}
                >
                    <Icon as={BiBell} color="#a5a8b3" w="24px" h="24px" _hover={{ color: "rgba(165, 168, 179, .7)" }}/>
                </Button>

                <Flex>
                    <Flex bg="#FFFFFF" pr="10px" gap="10px" h="40px" alignItems="center" borderRadius="91px">
                        <Avatar name={`${username}`} src={`${image}`} size="md"/>

                        <Button 
                        onClick={handleClick}
                        bg="transparent" 
                        display="flex" 
                        alignItems="center" 
                        pos="relative" 
                        p="5px 20px" 
                        lineHeight="18px"
                        _hover={{bg: "transparent"}}
                        >
                            <Flex alignItems="center" gap="12px">
                                <Flex 
                                pos="absolute" 
                                w="266px" 
                                h="226px" 
                                bg="#FFFFFF"
                                top="50px" 
                                right="20px" 
                                borderRadius="14px"
                                boxShadow="rgba(0, 0, 0, 0.25) 0px 4px 29px 0px"
                                zIndex="dropdown"
                                opacity={modal.open ? "1" : "0"}
                                visibility={modal.open ? "visible" : "hidden"}
                                transform={modal.open ? "none" : "scale(0.8) translateZ(0px)"}
                                >

                                </Flex>

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
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};