import React, {useRef} from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  FormLabel,
  FormControl,
  ModalCloseButton,
  Input,
  ModalFooter,
  Tooltip,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

const NewCandidateModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const nameInput = useRef<HTMLInputElement>(null);
  const commentsInput = useRef<HTMLInputElement>(null);

  const handleNewCandidate = (name: string, comments: string) => {
    window.alert(
      JSON.stringify({
        id: name
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, ""),
        name,
        comments,
        step: "Entrevista inicial",
      }),
    );
  };

  return (
    <>
      <Tooltip hasArrow bg="complementary" label="Agregar candidato">
        <IconButton
          aria-label="Agregar Candidato"
          colorScheme="brand"
          icon={<AddIcon />}
          onClick={onOpen}
        />
      </Tooltip>

      <Modal initialFocusRef={nameInput} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Candidato</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input ref={nameInput} placeholder="John Doe" variant="flushed" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Comentarios</FormLabel>
              <Input ref={commentsInput} placeholder="Buena presentación" variant="flushed" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="brand"
              mr={3}
              onClick={() =>
                handleNewCandidate(nameInput.current?.value, commentsInput.current?.value)
              }
            >
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewCandidateModal;
