import React, {useState} from "react";
import {Heading, IconButton, Stack, Text, Flex, Box} from "@chakra-ui/react";
import {AddIcon, TriangleDownIcon, TriangleUpIcon} from "@chakra-ui/icons";

interface CardProps {
  title: Step;
  candidates: Candidate[];
}

const Card = ({title, candidates}: CardProps) => {
  const [displayAll, setDisplayAll] = useState(false);

  return (
    <Stack
      as="section"
      bgColor="white"
      minW="200px"
      p={3}
      rounded="sm"
      shadow="md"
      textAlign="start"
    >
      <Flex align="center" justify="space-between" minH={"40px"}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        {title == "Entrevista inicial" && (
          <IconButton aria-label="Agregar Candidato" colorScheme="brand" icon={<AddIcon />} />
        )}
      </Flex>

      {candidates || (
        <Text color="blackAlpha.600" textAlign="center">
          No hay candidatos
        </Text>
      )}
      {candidates && candidates.length > 5 && !displayAll && (
        <Box
          _hover={{color: "brand.800"}}
          as="button"
          color="brand.500"
          onClick={() => setDisplayAll((c) => !c)}
        >
          <TriangleDownIcon />
        </Box>
      )}
    </Stack>
  );
};

export default Card;
