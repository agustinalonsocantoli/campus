// Chakra
import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
// Icons
import { BsStar } from "react-icons/bs";

interface Props {
    job: string;
    company: string;
    avatar?: string;
    description: string;
    modality: string;
    workday: string;
    country: string;
    city: string;
    salary: string;
}

export const CardJobs = (props: Props) => {
    const { job, company, avatar, description, modality, workday, country, city, salary } = props;
    const details = [modality, workday, company, city, country, salary]

    return (
        <Card maxW='600px'>
            <CardHeader>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={company} src={avatar} />

                        <Box>
                            <Heading size='sm'>{job}</Heading>
                            <Text>{company}</Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsStar />}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    {description}
                </Text>
            </CardBody>

            <CardFooter 
            gap="10px"
            flexWrap='wrap'
            >
                {details?.map((item, index) => (
                    <Text 
                    as="span"
                    key={index}
                    fontSize="13px"
                    border="1px solid #000000"
                    borderRadius="7px"
                    p="5px 10px"
                    cursor="default"
                    >
                        {item}
                    </Text>
                ))}
            </CardFooter>
        </Card>
    );
};