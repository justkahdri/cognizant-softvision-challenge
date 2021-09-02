import React, {useContext} from "react";
import {Stack, ScaleFade, Heading, Text, Box, IconButton, useDisclosure} from "@chakra-ui/react";
import {ArrowLeftIcon, ArrowRightIcon, DeleteIcon} from "@chakra-ui/icons";

import CandidatesContext from "../../context";

const ListItem = ({step, id, name, comments}: Candidate) => {
  const {moveCandidate, removeCandidate} = useContext(CandidatesContext);
  const {isOpen, onClose} = useDisclosure({defaultIsOpen: true});

  const handleDelete = () => {
    onClose();
    setTimeout(() => removeCandidate(id), 2000);
  };

  return (
    <ScaleFade in={isOpen} initialScale={0.7} unmountOnExit={true}>
      <Box position="relative" zIndex="2">
        <IconButton
          _hover={{top: "-7", background: "red.500"}}
          aria-label="Delete candidate"
          background="brand.500"
          color="white"
          icon={<DeleteIcon />}
          position="absolute"
          right="10"
          size="sm"
          top="-1"
          transition="top ease 0.2s"
          width="50px"
          zIndex="-1"
          onClick={handleDelete}
        />
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
      </Box>
    </ScaleFade>
  );
};

export default ListItem;
