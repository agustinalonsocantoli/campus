/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { useEffect, useState } from 'react'
// Middlewares
import { getCourses } from '../../shared/middlewares/courses.middleware'
// Chakra UI
import { Heading, SimpleGrid, Box, Flex } from '@chakra-ui/react';
// Components
import { CardCourse } from './Components/CardCourse';
import { BtnView } from '../../shared/components/Buttons/BtnView';
import { TableCourse } from './Components/TableCourse';

export const Courses = () => {
    const [ courses, setCourses ] = useState<any>([]);
    const [ option, setOption ] = useState<string>("grid");
    
    useEffect(() => {
        getCourses().then((response: any) => {
            setCourses(response)
        });
        
    }, [])

    return(
        <Box p="34px">
            <Flex justifyContent="space-between" alignItems="center" >
                <Heading fontSize={20} lineHeight="100%">Cursos</Heading>

                <Flex gap="10px" alignItems="center">
                    <Flex flex="1">
                        <BtnView option={option} setOption={setOption} />
                    </Flex>
                </Flex>
                
            </Flex>

            { option === "grid" ?
                <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(280px, 1fr))' py={5}>
                    {courses?.map((course: any, index: number) => (
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
                :
                <Box py={5}>
                    <TableCourse courses={courses}/>
                </Box>
            }
        </Box>
    );
}; 