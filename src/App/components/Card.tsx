import React, {useState} from "react";
import {Heading, Stack, Text, StackProps, Flex, Box} from "@chakra-ui/react";
import {TriangleDownIcon, TriangleUpIcon} from "@chakra-ui/icons";

import ListItem from "./ListItem";
import NewCandidateModal from "./NewCandidateModal";

interface CardProps extends StackProps {
  title: Step;
  candidates: Candidate[];
}

const Card = ({title, candidates, ...rest}: CardProps) => {
  const [displayAll, setDisplayAll] = useState(false);
  const displayed = displayAll ? candidates : candidates.slice(0, 4);

  return (
    <Stack
      as="section"
      bgColor="background"
      p={3}
      rounded="sm"
      shadow="md"
      textAlign="start"
      {...rest}
    >
      <Flex align="center" justify="space-between" mb={3} minH={"40px"}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        {title == "Entrevista inicial" && <NewCandidateModal />}
      </Flex>

      {candidates.length ? (
        displayed.map((candidate) => <ListItem key={candidate.id} {...candidate} />)
      ) : (
        <Text color="blackAlpha.600" py={10} textAlign="center">
          No hay candidatos
        </Text>
      )}
      {candidates && candidates.length > 4 && (
        <Box
          _hover={{color: "complementary.500"}}
          alignSelf="center"
          as="button"
          color="brand.500"
          fontSize="lg"
          onClick={() => setDisplayAll((c) => !c)}
        >
          {displayAll ? <TriangleUpIcon boxSize={6} /> : <TriangleDownIcon boxSize={6} />}
        </Box>
      )}
    </Stack>
  );
};

export default Card;
