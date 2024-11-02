import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Box, Button } from "@chakra-ui/react";
import useModal from "./hooks/useModal";

const Modal = () => {
  const { isOpen, open, modalData } = useModal();

  const renderModalContent = () => {
    switch (modalData?.type) {
      case "confirm":
        return <div>Confirm</div>;
      default:
        return null;
    }
  };

  return (
    <ChakraModal isOpen={isOpen} onClose={() => open()}>
      <Box
        textAlign="center"
        borderWidth={1}
        backgroundColor="bg.info"
        rounded="lg"
        boxShadow="2xl"
      >
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />

            <ModalBody>{renderModalContent()}</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => open()}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Box>
    </ChakraModal>
  );
};

export default Modal;
