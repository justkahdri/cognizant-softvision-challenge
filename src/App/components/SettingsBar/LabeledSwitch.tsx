import React from "react";
import {FormControl, FormLabel, Switch, SwitchProps} from "@chakra-ui/react";

interface LabeledSwitchProps extends SwitchProps {
  label: string;
}

const LabeledSwitch = ({label, ...rest}: LabeledSwitchProps) => {
  return (
    <FormControl alignItems="center" color="whiteAlpha.900" display="flex" width="fit-content">
      <FormLabel htmlFor="toggle-switch" mb="0">
        {label}
      </FormLabel>
      <Switch id="toggle-switch" {...rest} />
    </FormControl>
  );
};

export default LabeledSwitch;
