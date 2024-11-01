import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export default function App({ children }: { children?: React.ReactNode }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
