/* eslint-disable @typescript-eslint/no-explicit-any */
// Chakra UI
import { useToast, Box } from '@chakra-ui/react'

type Props = {
    title: string;
    status: any;
}

export const Toast = (props: Props) => {
    const { title, status } = props;
    const toast = useToast()

    return (
        <Box onClick={() => toast({
            title: title,
            status: status,
            duration: 1000,
            isClosable: true,
        })}>
        </Box>
    )
};