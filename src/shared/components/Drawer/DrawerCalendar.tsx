// Chakra UI
import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Components
import { Calendar } from "../Calendar/Calendar";
// Icons
import { MdSpeakerNotesOff } from "react-icons/md";

interface Props {
    isOpen: boolean;
    setIsOpen: (action: boolean) => void;
    callComponent: string;
}

export const DrawerCalendar = (props: Props) => {
    const { isOpen, setIsOpen, callComponent } = props;

    const line = useColorModeValue("#f0f0f3", "#1d1e22");
    
    return(
        <Drawer placement='right' onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <DrawerOverlay />

            <DrawerContent>
                { callComponent === "calendar" &&
                <DrawerBody>
                    <Calendar />

                    <Box w="100%" h="1px" bg={line} my="34px"></Box>
                </DrawerBody>
                ||
                callComponent === "alert" &&
                <DrawerBody>
                    <Text mt={5} fontSize={16} fontWeight="semibold">Notificaciones</Text>

                    <Flex flexDir="column" alignItems="center" justifyContent="center" gap="10px" mt="35px" px="10px">
                        <Icon h="72px" w="72px" as={MdSpeakerNotesOff} />
                        <Text fontSize={16} fontWeight="semibold" textAlign="center">No tienes notificaciones</Text>
                        <Text fontSize={15} color="#8c909c" textAlign="center">Mantente informado. Las notificaciones sobre tu actividad, novedades del campus e interacciones del foro se mostrarán aquí.</Text>
                    </Flex>
                </DrawerBody>
                }
            </DrawerContent>
        </Drawer>
    );
};