// Chakra UI
import { Flex, Icon, Link } from "@chakra-ui/react";
// React
import { Link as LinkRouter } from "react-router-dom";
// Icons
import { SlHeart } from "react-icons/sl"

export const BtnDonation = () => {
    return(
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
    );
};