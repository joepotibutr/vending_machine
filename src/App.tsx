import { ChakraProvider } from "@chakra-ui/react";
import useProducts from "./hooks/useProducts";
import { useEffect } from "react";

export default function App({ children }: { children?: React.ReactNode }) {
  const { initializeProducts } = useProducts();

  useEffect(() => initializeProducts(), []);

  return <ChakraProvider>{children}</ChakraProvider>;
}
