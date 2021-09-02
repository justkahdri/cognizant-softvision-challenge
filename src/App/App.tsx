import {Stack} from "@chakra-ui/react";
import React, {useContext} from "react";

import {SettingsContext} from "../contexts";

import Header from "./components/Header";
import SettingsBar from "./components/SettingsBar";
import SwitchableGrid from "./components/SwitchableGrid";

function App() {
  const {gridView} = useContext(SettingsContext);

  return (
    <Stack minH="100vh" minW="100vw">
      <Header />
      <SettingsBar />
      <SwitchableGrid isEnabled={gridView} />
    </Stack>
  );
}

export default App;
