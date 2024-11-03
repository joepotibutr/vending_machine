import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import Clock from "react-live-clock";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import { GiVendingMachine } from "react-icons/gi";
import useBalance from "./hooks/useBalance";
import useKeypad from "./hooks/useKeypad";
import useProducts from "./hooks/useProducts";
import usePagination from "./hooks/usePagination";

const Main = () => {
  const { keypad, setKeypad } = useKeypad();
  const { balance, insertCoin, returnTheChange } = useBalance();
  const { products } = useProducts();
  const { list, prev, next, currentPage, lastPage } = usePagination({
    max: 9,
    items: Object.values(products),
  });

  const now = new Date();
  return (
    <Box
      marginTop={10}
      marginLeft={40}
      marginRight={40}
      padding={10}
      rounded="sm"
      borderWidth={1}
      backgroundColor="whitesmoke"
    >
      <Container width={450} paddingTop={10}>
        <Box
          textAlign="center"
          borderWidth={1}
          backgroundColor="bg.info"
          rounded="lg"
          boxShadow="2xl"
        >
          <Box padding={5} borderRadius={0} backgroundColor="teal.400">
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                <GiVendingMachine size={100} />
                <Heading textAlign="center">Vending Machine</Heading>
              </Flex>

              <Box>
                <Text textAlign="end">{now.toDateString()}</Text>
                <Text textAlign="end">
                  <Clock
                    format={"HH:mm:ss"}
                    style={{ fontSize: "1.5em" }}
                    ticking={true}
                  />
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box padding={4}>
            <Flex height={550}>
              <Flex flexDirection="column" alignItems="center" gap={2}>
                <Grid
                  justifyContent="space-between"
                  templateColumns="repeat(3, 123px)"
                  gap="2"
                >
                  {list.map((product) => {
                    const Icon = product.icon;

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
            </Flex>
          </Box>

          <Box padding={3} borderRadius={0} backgroundColor="teal.400">
            <Flex gap={4} alignItems="center">
              <Flex
                marginTop={5}
                padding={6}
                gap={2}
                flexDirection="column"
                justifyContent="center"
              >
                <Input readOnly value={keypad} />
                <Grid
                  justifyContent="space-between"
                  templateColumns="repeat(3, 40px)"
                  templateRows="auto"
                  gap={1}
                >
                  {[...Array(9)].map((_, key) => (
                    <Button key={key} onClick={() => setKeypad(key)}>
                      {key}
                    </Button>
                  ))}
                </Grid>
              </Flex>

              <Flex flexDirection="column" gap={2}>
                <Flex gap={2} justifyContent="center">
                  <Text textAlign="center">Insert coin here</Text>
                  <HStack gap="4"></HStack>
                </Flex>
                <Input readOnly value={balance} />
                <Flex gap={2}>
                  <Button
                    width="40px"
                    rounded="3xl"
                    size="sm"
                    onClick={() => insertCoin(1)}
                  >
                    1฿
                  </Button>
                  <Button
                    width="40px"
                    rounded="3xl"
                    size="sm"
                    onClick={() => insertCoin(5)}
                  >
                    5฿
                  </Button>
                  <Button
                    width="40px"
                    rounded="3xl"
                    size="sm"
                    onClick={() => insertCoin(10)}
                  >
                    10฿
                  </Button>
                </Flex>

                <Button>
                  <Text fontSize={12} onClick={returnTheChange}>
                    Return the balance
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Main;
