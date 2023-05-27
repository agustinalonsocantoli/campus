// Chakra UI
import { Card, CardBody, Text, CardHeader, Heading, Image, Flex, Box, Icon } from '@chakra-ui/react';
// Icons 
import { VscListOrdered } from 'react-icons/vsc'
import { BiTimeFive } from 'react-icons/bi'

interface Props {
    image: string;
    type: string;
    name: string;
    modules: number;
    duration: number;
}

export const CardCourse = (props: Props) => {
    const { image, type, name, modules, duration } = props;

    return(
        <Card overflow="hidden" borderRadius='2xl' cursor="pointer" className='card_courses'>
            <Box h="140px" pos="relative">
                <Image
                src={image}
                alt='img/logo'
                objectFit="cover"
                w="100%"
                h="100%"
                />

                <Box pos="absolute" top={4} left={4}>
                    <Text bg="#000000" color="#FFFFFF" borderRadius='full' p="5px 8px" fontWeight="bold">
                        {type}
                    </Text>
                </Box>
            </Box>

            <CardHeader pb={1}>
                <Heading size='md'>{name}</Heading>
            </CardHeader>

            <CardBody pt={1} ml={1}>
                <Flex gap={10}>
                    <Flex alignItems="center" gap={1} color="#A5A8B3" fontWeight="bold">
                        <Icon as={VscListOrdered} boxSize={4} mt="2px" />
                        <Text fontSize="14px" lineHeight="16px">{modules} módulos</Text>
                    </Flex>

                    <Flex alignItems="center" gap={1} color="#A5A8B3" fontWeight="bold">
                        <Icon as={BiTimeFive} boxSize={6} />
                        <Text fontSize="14px" lineHeight="16px">{duration}</Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};