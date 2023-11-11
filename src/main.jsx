import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";

const colors = {
  guinda: {
    50: "#fff0f0",
    100: "#ffdede",
    200: "#ffc3c3",
    300: "#ff9999",
    400: "#ff5e5e",
    500: "#ff2c2c",
    600: "#f60c0c",
    700: "#cf0606",
    800: "#ab0909",
    900: "#8d0f0f",
    950: "#5a0202",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
