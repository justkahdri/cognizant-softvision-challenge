import React from "react";
import {Button, Heading, Stack, Text} from "@chakra-ui/react";

const Card = () => {
  return (
    <Stack as="section" bgColor="white" minW="200px" p={3} rounded="sm" shadow="md">
      <Heading as="h2" size="md">
        Entrevista Inicial
      </Heading>
      <Text>Hola</Text>
      <Button colorScheme="brand">Agregar Candidato</Button>
    </Stack>
  );
};

export default Card;
