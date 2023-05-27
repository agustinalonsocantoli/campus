/* eslint-disable @typescript-eslint/no-explicit-any */
// Chakra UI
import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";
import { CardCourse } from "../../../pages/Courses/Components/CardCourse";

interface Props {
    isOpen: boolean;
    setIsOpen: (action: boolean) => void;
    selectedRow: any;
}
export const CardModal = (props: Props) => {
    const { isOpen, setIsOpen, selectedRow } = props;

    return(
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalOverlay />

            <ModalContent p={6}>
                <ModalCloseButton onClick={() => setIsOpen(false)}/>

                <ModalBody>
                    <CardCourse 
                    image={selectedRow?.imgUrl} 
                    type={selectedRow?.type} 
                    name={selectedRow?.name} 
                    modules={selectedRow?.modules.length} 
                    duration={selectedRow?.duration}
                    />

                    <Box px={4} mt={5}>
                        <Text fontSize={18} fontWeight="semibold">Sobre este curso</Text>
                        <Text fontSize={14} mt={2}>{selectedRow?.description}</Text>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};