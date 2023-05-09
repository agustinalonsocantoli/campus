// Chakra UI
import { Flex, Heading, Button, Icon } from "@chakra-ui/react";
// Icons
import { FaRegCalendarAlt } from "react-icons/fa"
import { BiBell } from "react-icons/bi"
// React
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// Interfaces
import { UserInt } from "../../interfaces/UserInt";
// Functions
import { getTitle } from "../../shared/utils/functions/title";
// Components
import { BtnDonation } from "../../shared/components/Buttons/BtnDonation";
import { UserActions } from "../../shared/components/Nav/UserActions";
import { DrawerCalendar } from "../../shared/components/Drawer/DrawerCalendar";

interface Props {
    setUser: (action: UserInt) => void;
    title: string;
    setTitle: (action: string) => void;
}

export const Topbar = (props: Props) => {
    const { setUser, title, setTitle } = props;
    const location = useLocation();
    const [ openCalendar, setOpenCalendar ] = useState<boolean>(false)
    const [ openAlert, setOpenAlert ] = useState<boolean>(false)

    useEffect(() => {
        setTitle(getTitle(location.pathname))
        
    }, [location.pathname, setTitle])
    
    return(
        <Flex px="34px" minH="80px" alignItems="center" justifyContent="space-between">
            <Heading>{title}</Heading>

            <Flex gap="8px" alignItems="end">
                <BtnDonation />

                <Button 
                bg="transparent" 
                display="flex" 
                alignItems="center" 
                justifyContent="center" 
                _hover={{ bg: "transparent" }}
                onClick={() => setOpenCalendar(true)}
                >
                    <Icon as={FaRegCalendarAlt} color="#a5a8b3" w="24px" h="24px" _hover={{ color: "rgba(165, 168, 179, .7)" }}/>
                </Button>

                <Button 
                bg="transparent" 
                display="flex" 
                alignItems="center" 
                justifyContent="center" 
                _hover={{ bg: "transparent" }}
                onClick={() => setOpenAlert(true)}
                >
                    <Icon as={BiBell} color="#a5a8b3" w="24px" h="24px" _hover={{ color: "rgba(165, 168, 179, .7)" }}/>
                </Button>

                <UserActions setUser={setUser} />
            </Flex>

            <DrawerCalendar isOpen={openCalendar} setIsOpen={setOpenCalendar} callComponent="calendar"/>
            <DrawerCalendar isOpen={openAlert} setIsOpen={setOpenAlert} callComponent="alert"/>
        </Flex>
    );
};