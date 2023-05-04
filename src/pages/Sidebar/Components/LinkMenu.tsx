/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { Link as LinkRouter } from 'react-router-dom'
// Chakra UI
import { Box, Link, Icon, Text, Flex } from "@chakra-ui/react";


interface Props {
    path: string;
    icon: any;
    text: string;
    active?: boolean;
    isOpen: boolean;
}

export const LinkMenu = (props: Props) => {
    const { path, icon, text, active = false, isOpen } = props;

    return(
        <Link as={LinkRouter} to={path} display="flex" className='navlink'>
            <Box minW="5px" bg={active ? "#32d4a4" : "transparent"} minH="full" className='active'></Box>

            <Flex p="10px" ml={4} mr="21px" alignItems="center" className='navlink_hover'>
                <Icon as={icon} color={active ? "#32d4a4" : "#a5a8b3"} fontSize={25}/>

                <Text 
                color={active ? "#32d4a4" : "#a5a8b3"} 
                fontSize={14} 
                pl="14px" 
                overflow="hidden" 
                display={isOpen ? 'flex' : 'none'}
                >
                    {text}
                </Text>
            </Flex>
        </Link>
    );
};