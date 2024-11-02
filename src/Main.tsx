import {
  Bleed,
  Box,
  Button,
  Card,
  Container,
  defineStyle,
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

import { FaWineBottle } from "react-icons/fa";
import { PiBeerBottleBold } from "react-icons/pi";
import { PiBeerBottle } from "react-icons/pi";
import { PiBeerBottleDuotone } from "react-icons/pi";
import { PiBeerBottleFill } from "react-icons/pi";
import { PiOrangeDuotone } from "react-icons/pi";
import { GiShinyApple } from "react-icons/gi";
import { GiWaterFlask } from "react-icons/gi";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { FaJarWheat } from "react-icons/fa6";
import { GiCookie } from "react-icons/gi";

const products = [
  {
    id: "11",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "12",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: FaWineBottle,
  },
  {
    id: "13",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottle,
  },
  {
    id: "14",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleFill,
  },
  {
    id: "15",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiOrangeDuotone,
  },
  {
    id: "16",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: GiWaterFlask,
  },
  {
    id: "17",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: MdOutlineEmojiFoodBeverage,
  },
  {
    id: "18",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleDuotone,
  },
  {
    id: "19",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: GiCookie,
  },
  {
    id: "20",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: GiShinyApple,
  },
  {
    id: "21",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: FaJarWheat,
  },
];

import { GiVendingMachine } from "react-icons/gi";
import { useState } from "react";
import useCoins from "./hooks/useCoins";

type Props = {};

const Main = (props: Props) => {
  const [keypad, setKeypad] = useState("");

  const { coins, insertCoin } = useCoins();

  const handleKeypadChange = (key: number) => {
    setKeypad((prev) => {
      if (prev.length === 2) return "";
      return prev + key;
    });
  };

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
          <Bleed padding={5} borderRadius={0} backgroundColor="teal.400">
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
          </Bleed>

          <Box padding={4}>
            <Flex height={300}>
              <Container>
                <Flex flexDirection="column" alignItems="center" gap={2}>
                  <Grid
                    justifyContent="space-between"
                    templateColumns="repeat(3, 100px)"
                    gap="2"
                  >
                    {[...Array(9)].map((_, i) => (
                      <GridItem key={i}>
                        <Card.Root height={20} size="md">
                          {i}
                        </Card.Root>
                      </GridItem>
                    ))}
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

          <Bleed padding={3} borderRadius={0} backgroundColor="teal.400">
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
                    <Button key={key} onClick={() => handleKeypadChange(key)}>
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
                <Input defaultValue={coins} value={coins} />

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
          </Bleed>
        </Box>
      </Container>
    </Box>
  );
};

export default Main;
