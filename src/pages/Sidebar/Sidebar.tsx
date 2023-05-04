// Chakra UI
import { Flex, Box, Image } from "@chakra-ui/react";
// Components
import { LinkMenu } from "./Components/LinkMenu";
// Icons
import { BiHome, BiBookBookmark, BiBadgeCheck, BiNews, BiStar } from "react-icons/bi"
import { MdOutlineSignpost } from "react-icons/md"
import { FiBriefcase } from "react-icons/fi"
import { HiOutlineChatAlt2 } from "react-icons/hi"
import { TbSocial } from "react-icons/tb"
// Image
import ob from "../../assets/img/ob.png"
import logo from "../../assets/img/logo.png"
// React
import { useState } from "react";

export const Sidebar = () => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    return(
        <Flex flexDirection="column" 
        position="fixed"
        borderRight="1px solid #e6e6ea"
        h="100vh"
        zIndex="99"
        bg="#FFFFFF"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        transition="all 0.2s linear 0s"
        w={isOpen ? "230px" : "85px"}
        >
            <Box w={isOpen ? "140px" : "35px"} m={5}>
                <Image 
                src={isOpen ? logo : ob} 
                alt="img/ob"
                objectFit="cover"
                h="100%"
                w="100%"
                />
            </Box>

            <Box mt={7}>
                <LinkMenu path="/" icon={BiHome} text="Inicio" isOpen={isOpen}/>
                <LinkMenu path="/" icon={MdOutlineSignpost} text="Ruta" isOpen={isOpen}/>
                <LinkMenu path="/" icon={FiBriefcase} text="Empleo" isOpen={isOpen}/>
                <LinkMenu path="/cursos" icon={BiBookBookmark} text="Cursos" active={true} isOpen={isOpen}/>
                <LinkMenu path="/" icon={BiBadgeCheck} text="Certificaciones" isOpen={isOpen}/>
                <LinkMenu path="/" icon={HiOutlineChatAlt2} text="Foros" isOpen={isOpen}/>
                <LinkMenu path="/" icon={BiNews} text="Novedades" isOpen={isOpen}/>
                <LinkMenu path="/" icon={TbSocial} text="Comunidad" isOpen={isOpen}/>
                <LinkMenu path="/" icon={BiStar} text="Favoritos" isOpen={isOpen}/>
            </Box>
        </Flex>
  )
};