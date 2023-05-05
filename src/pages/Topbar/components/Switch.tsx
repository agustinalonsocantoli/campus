import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ColorMode } from "./ColorMode";

export const Switch = () => {
    const { toggleColorMode } = useColorMode()
    const bgButton = useColorModeValue("#f0f0f3", "#1d1e22")

    return(
        <Flex 
        bg={bgButton} 
        alignItems="center" 
        justifyContent="center" 
        p="7px" 
        borderRadius="10px"
        gap="10px"
        transition="all 0.7s ease 0s"
        onClick={toggleColorMode}
        >
            <ColorMode text="Claro" />
            <ColorMode text="Oscuro" />
        </Flex>
    );
};