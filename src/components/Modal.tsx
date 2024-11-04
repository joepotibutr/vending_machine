import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Box } from "@chakra-ui/react";
import useModal from "../hooks/useModal";
import Product from "./Product";
import { memo, useMemo } from "react";

const Modal = () => {
  const { isOpen, open, modalData, modalType } = useModal();

  const Content = useMemo(() => {
    switch (modalType) {
      case "product":
        return Product;
      default:
        return null;
    }
  }, [modalData, modalType]);

  if (!Content) return null;

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
          <ModalContent>
            <Content data={modalData} />
          </ModalContent>
        </ModalOverlay>
      </Box>
    </ChakraModal>
  );
};

export default memo(Modal);
