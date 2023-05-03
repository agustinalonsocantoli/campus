/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { useEffect, useState } from 'react'
// Middlewares
import { getCourses } from '../../shared/middlewares/getCourses'
// Chakra UI
import { Card, CardBody, Text, CardHeader, Heading, SimpleGrid, Image, Flex, Box, Icon } from '@chakra-ui/react';
// Icons 
import { VscListOrdered } from 'react-icons/vsc'
import { BiTimeFive } from 'react-icons/bi'

export const Courses = () => {
    const [ courses, setCourses ] = useState<any>([]);
    
    useEffect(() => {
        getCourses().then((response: any) => {
            setCourses(response)
        });
        
    }, [])

    return(
        <Box>
            <SimpleGrid spacing={10} templateColumns='repeat(4, 1fr)' p={16}>
                {courses?.map(({ attributes: course }: any, index: number) => (
                    <Card key={index} overflow="hidden">
                        <Box h="140px" pos="relative">
                            <Image
                            src={course.image}
                            alt='img/logo'
                            objectFit="cover"
                            w="100%"
                            h="100%"
                            />

                            <Box pos="absolute" top={4} left={4}>
                                <Text bg="#000000" color="#FFFFFF" borderRadius='full' p="5px 8px" fontWeight="bold">
                                    {course.type}
                                </Text>
                            </Box>
                        </Box>

                        <CardHeader pb={1}>
                            <Heading size='md'>{course.name}</Heading>
                        </CardHeader>

                        <CardBody pt={1} ml={1}>
                            <Flex gap={10}>
                                <Flex alignItems="center" gap={1} color="#A5A8B3" fontWeight="bold">
                                    <Icon as={VscListOrdered} boxSize={4} mt="2px" />
                                    <Text fontSize="14px" lineHeight="16px">{course.modules} módulos</Text>
                                </Flex>

                                <Flex alignItems="center" gap={1} color="#A5A8B3" fontWeight="bold">
                                    <Icon as={BiTimeFive} boxSize={6} />
                                    <Text fontSize="14px" lineHeight="16px">{course.duration}h</Text>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    );
}; 