import { useMemo } from "react";
import {
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/modal";
import useProducts from "./hooks/useProducts";
import { Button, Card, Flex, Text } from "@chakra-ui/react";

interface IProductProps {
  data: {
    productCode: string;
  };
}

const Product = ({ data }: IProductProps) => {
  const { products } = useProducts();

  const {
    icon: Icon,
    name,
    price,
  } = useMemo(() => products[data.productCode], [data]);

  return (
    <>
      <ModalHeader>{`${data.productCode}: ${name}`}</ModalHeader>
      <ModalCloseButton />

      <ModalBody backgroundColor="teal.400">
        <Card size="sm" padding={2} margin={2}>
          <Flex
            justify="space-between"
            alignItems="center"
            flexDirection="column"
          >
            <Icon size={100} />
          </Flex>
        </Card>
      </ModalBody>

      <ModalFooter gap={4} justifyContent="space-between">
        <Text textStyle="bold">Total: {price}฿</Text>

        <Button mr={3} onClick={() => open()}>
          Checkout
        </Button>
      </ModalFooter>
    </>
  );
};

export default Product;
