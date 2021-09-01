import React, {useContext} from "react";
import {Stack, Heading, Text, Box} from "@chakra-ui/react";
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";

import CandidatesContext from "../../context";

const ListItem = ({step, id, name, comments}: Candidate) => {
  const {moveCandidate} = useContext(CandidatesContext);

  return (
    <Stack
      align="center"
      bgColor="white"
      direction="row"
      p={2}
      rounded="md"
      shadow="sm"
      spacing={3}
    >
      {step !== "Entrevista inicial" && (
        <ArrowLeftIcon
          as="button"
          color="brand.500"
          cursor="pointer"
          onClick={() => moveCandidate(id, -1)}
        />
      )}
      <Box flex={1}>
        <Heading as="h4" size="sm">
          {name}
        </Heading>
        {comments && (
          <Text color="blackAlpha.700" fontSize="sm">
            {comments}
          </Text>
        )}
      </Box>
      {step !== "Rechazo" && (
        <ArrowRightIcon
          as="button"
          color="brand.500"
          cursor="pointer"
          onClick={() => moveCandidate(id, 1)}
        />
      )}
    </Stack>
  );
};

export default ListItem;
