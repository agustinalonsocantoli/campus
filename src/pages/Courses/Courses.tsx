/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { useEffect, useState } from 'react'
// Middlewares
import { getCourses } from '../../shared/middlewares/getCourses'
// Chakra UI
import { Heading, SimpleGrid, Box } from '@chakra-ui/react';
// Components
import { CardCourse } from './Components/CardCourse';

export const Courses = () => {
    const [ courses, setCourses ] = useState<any>([]);
    
    useEffect(() => {
        getCourses().then((response: any) => {
            setCourses(response)
        });
        
    }, [])

    return(
        <Box p="34px">
            <Heading fontSize={20} lineHeight="100%">Cursos</Heading>
            <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(280px, 1fr))' py={5}>
                {courses?.map(({ attributes: course }: any, index: number) => (
                    <Box key={index}>
                        <CardCourse
                        image={course.image}
                        type={course.type}
                        name={course.name}
                        modules={course.modules}
                        duration={course.duration} 
                        />
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}; 