import React, {useRef, useContext} from "react";
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
  useToast,
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

import CandidatesContext from "../../context";

const NewCandidateModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const formToast = useToast({
    status: "info",
    duration: 8000,
    isClosable: true,
    variant: "left-accent",
  });
  const {addCandidate} = useContext(CandidatesContext);

  const nameInput = useRef<HTMLInputElement>(null);
  const commentsInput = useRef<HTMLInputElement>(null);
  const nullableInput = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (nameInput.current?.value) {
      try {
        addCandidate(nameInput.current.value, commentsInput.current?.value || "");
        onClose();
      } catch (e) {
        formToast({
          title: "Nombre o id duplicado",
          description: "Por favor, ingrese un nombre diferente.",
        });
      }
    } else {
      formToast({title: "Por favor ingrese un nombre válido"});
    }
  };

  return (
    <>
      <Tooltip hasArrow bg="complementary.200" label="Agregar candidato">
        <IconButton
          aria-label="Agregar Candidato"
          colorScheme="brand"
          icon={<AddIcon />}
          onClick={onOpen}
        />
      </Tooltip>

      <Modal
        finalFocusRef={nullableInput}
        initialFocusRef={nameInput}
        isOpen={isOpen}
        onClose={onClose}
      >
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
            <Button colorScheme="brand" mr={3} onClick={handleSubmit}>
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
