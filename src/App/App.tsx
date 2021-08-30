import {Stack, SimpleGrid} from "@chakra-ui/react";
import React, {useState} from "react";

import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [scrollable, setScrollable] = useState(false);

  return (
    <Stack minH="100vh" minW="100vw">
      <Header />

      {scrollable ? (
        <Stack as="main" direction="row" px={6} spacing={10}>
          {Array(5)
            .fill("")
            .map((_, title) => (
              <Card key={title} />
            ))}
        </Stack>
      ) : (
        <SimpleGrid as="main" minChildWidth="200px" px={6} spacing={10}>
          {["Entrevista inicial", "Entrevista técnica", "Oferta", "Asignación", "Rechazo"].map(
            (title) => (
              <Card key={title} title={title} />
            ),
          )}
        </SimpleGrid>
      )}
    </Stack>
  );
}

export default App;
