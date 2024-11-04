import { useMemo } from "react";
import {
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/modal";
import useProducts from "../hooks/useProducts";
import { Button, Card, Flex, Text } from "@chakra-ui/react";
import { IconMap } from "../mock";

interface IProductProps {
  data: {
    productCode: string;
  };
}

const Product = ({ data }: IProductProps) => {
  const { products, checkOut } = useProducts();

  const product = useMemo(
    () => products.find((product) => product.productCode === data.productCode),
    [products, data.productCode]
  );

  if (!product) return null;

  const Icon = IconMap[product.id];

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
            {Icon && <Icon size={100} />}
          </Flex>
        </Card>
      </ModalBody>

      <ModalFooter gap={4} justifyContent="space-between">
        <Text textStyle="bold">Total: {product.price}฿</Text>

        <Button mr={3} onClick={() => checkOut(data.productCode)}>
          Checkout
        </Button>
      </ModalFooter>
    </>
  );
};

export default Product;
