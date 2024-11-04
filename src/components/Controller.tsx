import { Box, Button, Flex, Grid, HStack, Input, Text } from "@chakra-ui/react";
import useKeypad from "../hooks/useKeypad";
import useBalance from "../hooks/useBalance";
import { memo } from "react";

const Controller = () => {
  const { keypad, setKeypad } = useKeypad();
  const { balance, insertCoin, refundBalance } = useBalance();

  return (
    <Box padding={3} borderRadius={0} backgroundColor="teal.400">
      <Flex gap={4} alignItems="center">
        <Flex
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
            {[...Array(10)].map((_, key) => (
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

          <Button onClick={refundBalance}>
            <Text fontSize={12}>Refund balance</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default memo(Controller);
