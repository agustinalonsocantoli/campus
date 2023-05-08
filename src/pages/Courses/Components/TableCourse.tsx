/* eslint-disable @typescript-eslint/no-explicit-any */
// PrimeReact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// Chakra UI
import { Box, Flex, Icon, Image, Text, useColorModeValue } from '@chakra-ui/react';
// Icons 
import { VscListOrdered } from 'react-icons/vsc'
import { BiTimeFive } from 'react-icons/bi'
// Components
import { CardModal } from '../../../shared/components/Modal/CardModal';
import { useState } from 'react';

interface Props {
    courses: any;
}

export const TableCourse = (props: Props) => {
    const { courses } = props;
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const [ selectedRow, setSelectedRow ] = useState<object | null>(null);

    const darkMode = useColorModeValue("none", "dark-mode")
    const color = useColorModeValue("#000000", "#FFFFFF")
    const invertedColor= useColorModeValue("#FFFFFF", "#000000")

    const imageBodyTemplate = (courses: any) => {
        return <Image src={courses.attributes.image} alt={courses.attributes.name} borderRadius="12px" w="150px" h="100%"/>;
    };

    const nameBodyTemplate = (courses: any) => {
        return <Text fontWeight="bold" fontSize={18} color={color}>{courses.attributes.name}</Text>
    };

    const moduleBodyTemplate = (courses: any) => {
        return <Flex alignItems="center" gap={1}>
            <Icon as={VscListOrdered} boxSize={4} color="#A5A8B3" mt="2px" />
            <Text fontWeight="bold" fontSize={18} color={color}>{courses.attributes.modules} módulos</Text>
        </Flex>
    };

    const durationBodyTemplate = (courses: any) => {
        return <Flex alignItems="center" gap={1}>
            <Icon as={BiTimeFive} boxSize={6} color="#A5A8B3" />
            <Text fontWeight="bold" fontSize={18} color={color}>{courses.attributes.duration}h</Text>
        </Flex>
    };

    const typeBodyTemplate = (courses: any) => {
        return <Text bg={color} color={invertedColor} borderRadius='full' p="3px 5px" fontWeight="bold" fontSize={18}>{courses.attributes.type}</Text>
    };

    const handleRowClick = (e: any) => {
        const { attributes } = e.data;
        setIsOpen(true)
        setSelectedRow(attributes)
    };

    return(
        <Box>
            <DataTable 
            value={courses} 
            tableStyle={{ minWidth: '60rem' }} 
            className={darkMode} 
            onRowClick={handleRowClick}
            >
                <Column header="Image" body={imageBodyTemplate} className={darkMode}></Column>
                <Column header="Name" body={nameBodyTemplate} className={darkMode}></Column>
                <Column header="Modules" body={moduleBodyTemplate} className={darkMode}></Column>
                <Column header="Duration" body={durationBodyTemplate} className={darkMode}></Column>
                <Column header="Level" body={typeBodyTemplate} className={darkMode}></Column>
            </DataTable>

            <CardModal isOpen={isOpen} setIsOpen={setIsOpen} selectedRow={selectedRow}/>
        </Box>
    );
};