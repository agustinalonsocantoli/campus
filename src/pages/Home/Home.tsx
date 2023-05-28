/* eslint-disable @typescript-eslint/no-explicit-any */
// Chakra UI
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
// Hook
import { useAuthContex } from "../../App";
// React
import { useEffect, useState } from "react";
// Middlewares
import { getCourses } from "../../shared/middlewares/courses.middleware";
// Components
import { CardCourse } from "../Courses/Components/CardCourse";
import { DiscordModal } from "./Components/DiscordModal";

export const Home = () => {
    const { firstName } = useAuthContex();
    const [ courses, setCourses ] = useState<any>([]);
    
    useEffect(() => {
        getCourses().then((response: any) => {
            setCourses(response)
        });
        
    }, [])

    return(
        <Flex p="34px" gap="30px">
            <Flex w="65%" flexDir="column" gap="62px">
                <Heading fontSize={28} fontWeight="bold">
                    👋 ¡Hola <Text as="span" className="color_name">{firstName}</Text>, continúa por donde lo habías dejado!
                </Heading>

                <Box>
                    <Heading fontSize={20} lineHeight="100%">Cursos mejor valorados de OpenBootcamp</Heading>

                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(260px, 1fr))' py={5}>
                        {courses?.map((course : any, index: number) => (
                            course?.prominent && 
                            <Box key={index}>
                                <CardCourse
                                image={course?.imgUrl}
                                type={course?.type}
                                name={course?.name}
                                modules={course?.modules.length}
                                duration={course?.duration} 
                                />
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Flex>

            <Flex w="35%">
                <DiscordModal />
            </Flex>
        </Flex>
    );
};