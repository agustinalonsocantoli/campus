// Chakra UI
import { Flex, useColorModeValue } from "@chakra-ui/react";
// Components
import { LinkMenu } from "./Components/LinkMenu";
// Icons
import { BiHome, BiBookBookmark, BiBadgeCheck, BiNews, BiStar } from "react-icons/bi"
import { MdOutlineSignpost } from "react-icons/md"
import { FiBriefcase } from "react-icons/fi"
import { HiOutlineChatAlt2 } from "react-icons/hi"
import { TbSocial } from "react-icons/tb"
// Image
// import ob from "../../assets/img/ob.png"
// import logo from "../../assets/img/logo.png"
// React
import { useState } from "react";

interface Props {
    title: string;
}

export const Sidebar = (props: Props) => {
    const { title } = props;
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const bg = useColorModeValue("#FFFFFF", "#2d3748");
    const border = useColorModeValue("1px solid #e6e6ea", "1px solid #323339");

    const activePath = (text: string): boolean => {
        if(title === text) { return true }
        else { return false }
    };
    
    return(
        <Flex 
        flexDirection="column" 
        position="fixed"
        borderRight={border}
        h="100vh"
        zIndex="99"
        bg={bg}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        transition="all 0.2s linear 0s"
        w={isOpen ? "230px" : "85px"}
        >
            {/* <Box w={isOpen ? "140px" : "35px"} m={5}>
                <Image 
                src={isOpen ? logo : ob} 
                alt="img/ob"
                objectFit="cover"
                h="100%"
                w="100%"
                />
            </Box> */}

            <Flex flexDirection="column"  justifyContent="space-around" h="100%" p="10px 0" mt={7}>
                <LinkMenu path="/" icon={BiHome} text="Inicio" isOpen={isOpen} active={activePath("Inicio")}/>
                <LinkMenu path="/rutas" icon={MdOutlineSignpost} text="Ruta" isOpen={isOpen} active={activePath("Hoja de ruta")}/>
                <LinkMenu path="/empleos" icon={FiBriefcase} text="Empleo" isOpen={isOpen} active={activePath("Empleo")}/>
                <LinkMenu path="/cursos" icon={BiBookBookmark} text="Cursos" isOpen={isOpen} active={activePath("Cursos")}/>
                <LinkMenu path="/certificaciones" icon={BiBadgeCheck} text="Certificaciones" isOpen={isOpen} active={activePath("Certificaciones")}/>
                <LinkMenu path="/foros" icon={HiOutlineChatAlt2} text="Foros" isOpen={isOpen} active={activePath("Foros")}/>
                <LinkMenu path="/novedades" icon={BiNews} text="Novedades" isOpen={isOpen} active={activePath("Novedades")}/>
                <LinkMenu path="/comunidad" icon={TbSocial} text="Comunidad" isOpen={isOpen} active={activePath("Comunidad")}/>
                <LinkMenu path="/favoritos" icon={BiStar} text="Favoritos" isOpen={isOpen} active={activePath("Favoritos")}/>
            </Flex>
        </Flex>
  )
};