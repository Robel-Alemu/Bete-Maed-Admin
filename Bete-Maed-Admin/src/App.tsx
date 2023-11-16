import "./App.css";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import MobileNavigation from "./components/sidebar/MobileNavigation";
import SidebarWithHeader from "./components/sidebar/SideBar";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return <SidebarWithHeader />;
}

export default App;
