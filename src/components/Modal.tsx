import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Box, Button } from "@chakra-ui/react";
import useModal from "../hooks/useModal";
import Product from "./Product";
import { useCallback } from "react";

const Modal = () => {
  const { isOpen, open, modalData, modalType } = useModal();

  console.log("modalData =", modalData, modalType);

  const renderModalContent = useCallback(() => {
    switch (modalType) {
      case "product":
        return <Product data={modalData} />;
      default:
        return null;
    }
  }, [modalData, modalType]);

  return (
    <ChakraModal isOpen={isOpen} onClose={open}>
      <Box
        textAlign="center"
        borderWidth={1}
        backgroundColor="bg.info"
        rounded="lg"
        boxShadow="2xl"
      >
        <ModalOverlay>
          <ModalContent>{renderModalContent()}</ModalContent>
        </ModalOverlay>
      </Box>
    </ChakraModal>
  );
};

export default Modal;
