import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Clock from "react-live-clock";
import { GiVendingMachine } from "react-icons/gi";
import ProductList from "./ProductList";
import Controller from "./Controller";
import { memo } from "react";

const Main = () => {
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
              <ProductList />
            </Flex>
          </Box>

          <Controller />
        </Box>
      </Container>
    </Box>
  );
};

export default memo(Main);
