import {Box, Heading, Image, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import React from "react";

import logo from "../assets/logo.png";

function App() {
  return (
    <Box as="main">
      {/* HEADER */}
      <Box as="header">
        <Image alt="Softvision" src={logo} width={320} />
        <Heading>Lets get this party started</Heading>
      </Box>

      {/* MAIN */}
      <SimpleGrid columns={5} spacing={10}>
        <Stack>
          <Text>Hola</Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}

export default App;
