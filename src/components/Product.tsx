import { memo, useCallback, useMemo } from "react";
import {
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/modal";
import useProducts from "../hooks/useProducts";
import { Button, Card, Flex, Text } from "@chakra-ui/react";
import { IconMap } from "../mock";
import useBalance from "../hooks/useBalance";

interface IProductProps {
  data: {
    id: string;
  };
}

const Product = ({ data }: IProductProps) => {
  const { products, checkOutFailure, checkOutSuccess } = useProducts();
  const { deductBalance, balance } = useBalance();

  const product = useMemo(
    () => products.find((product) => product.id === data.id),
    [products, data.id]
  );

  const isCheckoutAvailable = useMemo(
    () => product.price <= balance && product.quantity > 0,
    [product.price, balance]
  );

  const Icon = IconMap[product.id];

  const handleCheckout = useCallback(() => {
    if (isCheckoutAvailable) {
      deductBalance(product.price);
      checkOutSuccess(product.id, product.name);
    } else {
      checkOutFailure(product.price - balance);
    }
  }, [product]);

  if (!product) return null;

  return (
    <>
      <ModalHeader>{`${data.id}: ${product.name}`}</ModalHeader>
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

        <Button mr={3} onClick={handleCheckout}>
          Checkout
        </Button>
      </ModalFooter>
    </>
  );
};

export default memo(Product);
