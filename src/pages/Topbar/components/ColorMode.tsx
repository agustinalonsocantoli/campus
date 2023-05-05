// Icons
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"

interface Props {
    text: string;
}

export const ColorMode = (props: Props) => {
    const { text } = props;
    const bgLight = useColorModeValue("#FFFFFF", "unset")
    const bsLight = useColorModeValue("rgba(0, 0, 0, 0.25) 0px 2px 3px", "unset")
    const colorLight = useColorModeValue("#121625", "#a5a8b3")
    const bgDark = useColorModeValue("unset", "#242529")
    const bsDark = useColorModeValue("unset", "rgba(0, 0, 0, 0.25) 0px 2px 3px")
    const colorDark = useColorModeValue("#a5a8b3", "#ffffff")

    return(
        <Flex 
        alignItems="center" 
        gap="8px" 
        w="102px" 
        p="4px 10px" 
        borderRadius="5px" 
        cursor="pointer" 
        textAlign="center" 
        bg={text === "Claro" ? bgLight : bgDark}
        color={text === "Claro" ? colorLight : colorDark} 
        boxShadow={text === "Claro" ? bsLight : bsDark}
        >
            <Icon as={text === "Claro" ? BsFillSunFill : BsFillMoonFill} w="1em" h="1em"/>
            <Text fontWeight="bold">{text}</Text>
        </Flex>
    );
};