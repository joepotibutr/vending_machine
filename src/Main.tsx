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
  const { list, currentPage } = usePagination({ max: 9, items: products });

  const now = new Date();
  return (
    <Box
      margin={40}
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
            <Flex height={300}>
              <Container>
                <Flex flexDirection="column" alignItems="center" gap={2}>
                  <Grid
                    justifyContent="space-between"
                    templateColumns="repeat(3, 100px)"
                    gap="2"
                  >
                    {list.map((product, index) => {
                      const Icon = product.icon;

                      return (
                        <GridItem key={product.id}>
                          <Card height={20} size="md">
                            <Text textStyle="bold">{currentPage + index}</Text>
                            <Text></Text>
                            <Icon size={40} />
                          </Card>
                        </GridItem>
                      );
                    })}
                  </Grid>

                  <Flex gap={6}>
                    <IconButton aria-label="Call support" rounded="full">
                      <MdNavigateBefore />
                    </IconButton>

                    <IconButton aria-label="Call support" rounded="full">
                      <MdNavigateNext />
                    </IconButton>
                  </Flex>
                </Flex>
              </Container>
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
                <Input value={keypad} />
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
                <Input
                  defaultValue={balance}
                  value={balance}
                  onClick={returnTheChange}
                />

                <Button rounded="3xl" onClick={() => insertCoin(1)}>
                  1 THB
                </Button>
                <Button rounded="3xl" onClick={() => insertCoin(5)}>
                  5 THB
                </Button>
                <Button rounded="3xl" onClick={() => insertCoin(10)}>
                  10 THB
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
