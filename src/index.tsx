import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Main from "./Main";
import { Box } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { store } from "./store";

const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App>
        <Box bg="red.200" />

        <Main />
      </App>
    </Provider>
  </StrictMode>
);
