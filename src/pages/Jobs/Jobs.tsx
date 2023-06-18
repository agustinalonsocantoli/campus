// Chakra
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { CardJobs } from "./Components/CardJobs";
import { useEffect, useState } from "react";
import { JobsInt } from "../../interfaces/JobsInt";
import { getJobs } from "../../shared/middlewares/jobs.middleware";

export const Jobs = () => {
    const [ jobs, setJobs ] = useState<JobsInt[]>([]);
    
    useEffect(() => {
        getJobs().then((response: JobsInt[]) => {
            setJobs(response)
        });
        
    }, [])

    return(
        <Flex p="34px" gap="30px" flexDirection="column">
            <Flex
            bg="linear-gradient(90.52deg, rgb(14, 13, 95) -1.57%, rgb(168, 92, 135) 53.22%, rgb(222, 157, 52) 115.33%)"
            w="100%"
            borderRadius="20px"
            p="25px"
            justifyContent="center"
            >
                <Heading fontSize="20px" fontWeight="light" letterSpacing="1.5px" color="#FFFFFF">
                    Consigue las mejores oportunidades de empleo para el sector del desarrollo gracias a nuestro campus.
                </Heading>
            </Flex>

            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(620px, 1fr))'>
                {jobs?.map((job: JobsInt, index: number) => (
                    <Box key={index}>
                        <CardJobs 
                        job={job?.job}
                        company={job?.company}
                        avatar={job?.avatar}
                        description={job?.description}
                        modality={job?.modality}
                        workday={job?.workday}
                        country={job?.country}
                        city={job?.city}
                        salary={job?.salary}
                        />
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
    );
};