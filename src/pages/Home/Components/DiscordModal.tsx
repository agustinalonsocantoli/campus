// Chakra UI
import { Button, Flex, Text, Link, Icon, Image } from "@chakra-ui/react";
// React
import { Link as RouterLink } from "react-router-dom";
// Image
import discord from "../../../assets/img/discord.png"
// Icon
import { IoLogoDiscord } from "react-icons/io5"

export const DiscordModal = () => {
    return(
        <Flex 
        h="278px" 
        minH="278px" 
        bg="linear-gradient(rgb(68, 61, 189) 0%, rgb(43, 56, 175) 100%)" 
        pos="relative"
        overflow="hidden"
        borderRadius="2xl"
        flexDir="column"
        justifyContent="space-between"
        >
            <Flex flexDir="column" color="#FFFFFF" p="28px" gap="28px" >
                <Text fontSize={14}>OpenBootcamp Discord</Text>

                <Text textTransform="uppercase" fontSize={24} lineHeight="22px">
                    Aprende y Comparte en <Text as="strong">Comunidad</Text>
                </Text>

                <Link as={RouterLink} color="inherit" textDecor="none" _hover={{textDecor: "none"}}>
                    <Button 
                    display="flex" 
                    alignItems="center" 
                    gap="8px"
                    bg="rgb(71, 90, 225)"
                    p="5px 20px"
                    outline="transparent solid 2px"
                    fontSize={16}
                    borderRadius="12px"
                    _hover={{bg: "rgba(71, 90, 225, .7)"}}
                    >
                        Ir a Discord
                        <Icon as={IoLogoDiscord} w="1em" h="1em"/>
                    </Button>
                </Link>
            </Flex>
        
            <Image 
            src={discord} 
            alt="img/discord"
            pos="static"
            zIndex="unset"
            opacity="1"
            w="100%"
            height="auto" 
            />
        </Flex>
    );
};