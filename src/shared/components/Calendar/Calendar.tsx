// PrimeReact
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Calendar as PrimeCalendar, CalendarChangeEvent } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
// React
import { useEffect, useState } from 'react';
// Function
import { destructureDate } from '../../utils/functions/destructureDate';

export const Calendar = () => {
    const dateNow = new Date();
    const [date, setDate] = useState<string | Date | null | undefined>(dateNow);
    const [day, setDay] = useState<Array<number | string>>([]);
    const [month, setMonth] = useState<string>('');
    const classCalendar = useColorModeValue("none", "dark_mode-calendar");

    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
    });

    useEffect(() => {
        const result = destructureDate(date);

        setDay(result.day)
        setMonth(result.month)
    }, [date])
    
    return(
        <Flex justifyContent="center" flexDir="column">
            <Text mt={5} fontSize={15} textTransform="capitalize">{day[1]}</Text>
            <Flex mt="5px" mb={3} gap="3px">
                <Text fontSize={36} fontWeight="bold">{day[0]}</Text>
                <Text fontSize={36} fontWeight="semibold">{month}</Text>
            </Flex>

            <PrimeCalendar 
            value={date} 
            onChange={(e: CalendarChangeEvent) => {
                setDate(e.value);
            }}
            locale="es"
            inline
            className={classCalendar}
            />
        </Flex>
    );
};