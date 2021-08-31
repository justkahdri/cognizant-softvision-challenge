import {Stack} from "@chakra-ui/react";
import React, {useState} from "react";

import useMobile from "../hooks/useMobile";

import Header from "./components/Header";
import LabeledSwitch from "./components/LabeledSwitch";
import SwitchableGrid from "./components/SwitchableGrid";

function App() {
  const defaultView = useMobile();
  const [gridView, setGridView] = useState(defaultView);

  return (
    <Stack minH="100vh" minW="100vw">
      <Header />

      <LabeledSwitch
        colorScheme="brand"
        defaultChecked={gridView}
        label="Vista de grilla"
        onChange={(e) => setGridView(e.currentTarget.checked)}
      />

      <SwitchableGrid isEnabled={gridView} />
    </Stack>
  );
}

export default App;
