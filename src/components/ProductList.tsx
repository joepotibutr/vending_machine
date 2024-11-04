import { Card, Flex, Grid, GridItem, IconButton, Text } from "@chakra-ui/react";
import { IconMap } from "../mock";
import useProducts from "../hooks/useProducts";
import usePagination from "../hooks/usePagination";
import { memo, useEffect } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const ProductList = () => {
  const { products, initializeProducts } = useProducts();

  useEffect(() => initializeProducts(), []);

  const { list, prev, next, currentPage, lastPage } = usePagination({
    max: 9,
    items: products,
  });

  return (
    <Flex flexDirection="column" alignItems="center" gap={2}>
      <Grid
        justifyContent="space-between"
        templateColumns="repeat(3, 123px)"
        gap="2"
      >
        {list.map((product) => {
          const Icon = IconMap[product.id];

          return (
            <GridItem key={product.productCode}>
              <Card height={40}>
                <Flex
                  flexDirection="column"
                  justifyContent="space-around"
                  alignItems="center"
                  height="100%"
                >
                  <Text textStyle="bold">
                    {product.productCode}: {product.name}
                  </Text>
                  <Icon size={40} />
                  <Text> {product.price}฿ </Text>
                </Flex>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
      <Flex gap={6} alignItems="center">
        <IconButton aria-label="prev" onClick={prev} rounded="full">
          <MdNavigateBefore />
        </IconButton>

        <Text>
          {currentPage}/{lastPage}
        </Text>

        <IconButton aria-label="next" onClick={next} rounded="full">
          <MdNavigateNext />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default memo(ProductList);
