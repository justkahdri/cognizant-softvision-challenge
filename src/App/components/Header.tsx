import React from "react";
import {Heading, Image, Stack} from "@chakra-ui/react";

import logo from "../../assets/logo-header-inline.svg";

const Header = () => {
  return (
    <Stack
      align="center"
      as="header"
      bgColor="secondary"
      direction="row"
      height="50px"
      p={8}
      spacing={3}
      width="100%"
    >
      <Image alt="Softvision" src={logo} width={250} />
      <Heading as="h3" color="brand.500" size="md">
        Challenge
      </Heading>
    </Stack>
  );
};

export default Header;
