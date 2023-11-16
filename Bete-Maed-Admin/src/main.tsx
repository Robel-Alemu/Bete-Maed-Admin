import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "./components/sidebar/SideBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      {/* <SidebarWithHeader /> */}
    </ChakraProvider>
  </React.StrictMode>
);
