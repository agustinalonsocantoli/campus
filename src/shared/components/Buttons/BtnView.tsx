// Prime React
import { useColorModeValue } from '@chakra-ui/react';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

interface JustifyOption {
    icon: string;
    value: string;
}

interface Props {
    option: string;
    setOption: (action: string) => void;
}

export const BtnView = (props: Props) => {
const { option, setOption } = props;
const bgColor= useColorModeValue("none", "dark_mode")

const justifyOptions: JustifyOption[] = [
    {icon: 'pi pi-table', value: 'grid'},
    {icon: 'pi pi-list', value: 'list'},
];

const justifyTemplate = (option: JustifyOption) => {
    return <i className={option.icon}></i>;
}

    return(
        <div className={`card flex justify-content-center ${bgColor}`}>
            <SelectButton
            value={option} 
            onChange={(e: SelectButtonChangeEvent) => setOption(e.value)} 
            itemTemplate={justifyTemplate} 
            optionLabel="value" 
            options={justifyOptions} 
            />
        </div>
    );
};