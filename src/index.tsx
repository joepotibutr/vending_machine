import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Main from "./components/Main";
import { Provider } from "react-redux";

import { store } from "./store";
import Modal from "./components/Modal";
import { createStandaloneToast } from "@chakra-ui/toast";

const rootElement = document.getElementById("root");

const { ToastContainer, toast } = createStandaloneToast();

// New as of React v18.x
const root = createRoot(rootElement!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App>
        <Modal />
        <Main />
        <ToastContainer />
      </App>
    </Provider>
  </StrictMode>
);
