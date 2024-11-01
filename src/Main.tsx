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
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
  {
    id: "01",
    name: "Beer 01",
    price: 12.23,
    quantity: 0,
    icon: PiBeerBottleBold,
  },
];

import { GiVendingMachine } from "react-icons/gi";
import { useState } from "react";

type Props = {};

const Main = (props: Props) => {
  const [cash, setCash] = useState(0);
  const [keypad, setKeypad] = useState("");

  const handleKeypadChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (keypad.length === 2) {
      setKeypad("");
    } else {
      setKeypad((prev) => prev + event.currentTarget.textContent);
    }
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
                  {[...Array(9)].map((_, i) => (
                    <Button key={i} onClick={handleKeypadChange}>
                      {i}
                    </Button>
                  ))}
                </Grid>
              </Flex>

              <Flex flexDirection="column" gap={2}>
                <Flex gap={2} justifyContent="center">
                  <Text textAlign="center">Insert coin here</Text>
                  <HStack gap="4"></HStack>
                </Flex>
                <Input value={cash} />

                <Button
                  rounded="3xl"
                  onClick={() => setCash((prev) => prev + 1)}
                >
                  1 THB
                </Button>
                <Button
                  rounded="3xl"
                  onClick={() => setCash((prev) => prev + 5)}
                >
                  5 THB
                </Button>
                <Button
                  rounded="3xl"
                  onClick={() => setCash((prev) => prev + 10)}
                >
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
