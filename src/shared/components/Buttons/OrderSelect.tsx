// Chakra UI
import { Select } from '@chakra-ui/react'
// React
import { ChangeEvent } from 'react';
// Icons
import { BsFilterLeft } from "react-icons/bs"

interface Props {
    setSelect: (action: string) => void;
}

export const OrderSelect = (props: Props) => {
    const { setSelect } = props;

    return(
        <Select 
        icon={<BsFilterLeft />} 
        cursor="pointer" 
        _focusVisible={{ outline: "none" }} 
        h="42px" 
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelect(e.target.value)}
        >
            <option value='ascendente'>Ascendente</option>
            <option value='descendente'>Descendente</option>
            <option value='destacados'>Destacados</option>
        </Select>
    );
};