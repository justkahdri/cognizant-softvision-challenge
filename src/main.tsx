import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";

import App from "./App";
import {CandidatesProvider} from "./context";
import customTheme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <CandidatesProvider>
        <App />
      </CandidatesProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
