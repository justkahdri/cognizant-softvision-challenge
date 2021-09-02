import React, {useContext} from "react";
import {Button} from "@chakra-ui/react";
import {EditIcon, CheckIcon} from "@chakra-ui/icons";

import {SettingsContext} from "../../../contexts";
const EditButton = () => {
  const {editMode, toggleEditMode} = useContext(SettingsContext);
  const editIcon = editMode ? <CheckIcon boxSize={5} /> : <EditIcon boxSize={5} />;

  return (
    <Button
      _hover={{background: "whiteAlpha.900", color: "brand.600"}}
      color="whiteAlpha.900"
      rightIcon={editIcon}
      variant="ghost"
      width="120px"
      onClick={toggleEditMode}
    >
      {editMode ? "Guardar" : "Editar"}
    </Button>
  );
};

export default EditButton;
