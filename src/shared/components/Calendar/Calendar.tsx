// PrimeReact
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Calendar as PrimeCalendar, CalendarChangeEvent } from 'primereact/calendar';
// React
import { useState } from 'react';

export const Calendar = () => {
    const [date, setDate] = useState<string | Date | Date[] | null | undefined>(null);
    const classCalendar = useColorModeValue("none", "dark_mode-calendar");
    
    return(
        <Flex justifyContent="center" flexDir="column">
            <Text mt={5} fontSize={15} textTransform="capitalize">Lunes</Text>
            <Flex mt="5px" mb={3} gap="3px">
                <Text fontSize={36} fontWeight="bold">01</Text>
                <Text fontSize={36} fontWeight="semibold">Junio</Text>
            </Flex>

            <PrimeCalendar 
            value={date} 
            onChange={(e: CalendarChangeEvent) => setDate(e.value)} 
            inline
            className={classCalendar}
            />
        </Flex>
    );
};