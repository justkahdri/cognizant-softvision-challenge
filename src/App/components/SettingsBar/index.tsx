import React, {useContext} from "react";
import {Button, Flex} from "@chakra-ui/react";
import {RepeatIcon} from "@chakra-ui/icons";

import {CandidatesContext, SettingsContext} from "../../../contexts";

import LabeledSwitch from "./LabeledSwitch";
import EditButton from "./EditButton";

const SettingsBar = () => {
  const {gridView, toggleGridView} = useContext(SettingsContext);
  const {loadCandidates} = useContext(CandidatesContext);

  return (
    <Flex
      alignItems="center"
      direction={{base: "column", sm: "row"}}
      justifyContent="space-between"
      px={6}
      width={{base: "100%", md: "60%", lg: "50%", xl: "40%"}}
    >
      <LabeledSwitch
        colorScheme="brand"
        defaultChecked={gridView}
        label="Vista de grilla"
        onChange={() => toggleGridView()}
      />

      <Button
        _hover={{background: "whiteAlpha.900", color: "brand.600"}}
        color="whiteAlpha.900"
        pb="2px"
        rightIcon={<RepeatIcon />}
        variant="ghost"
        onClick={() => loadCandidates(true)}
      >
        Recargar desde la nube
      </Button>

      <EditButton />
    </Flex>
  );
};

export default SettingsBar;
