import React from "react";
import {Heading, Image, Stack} from "@chakra-ui/react";

import logo from "../../assets/logo-header-inline.svg";

const Header = () => {
  return (
    <Stack
      align="center"
      as="header"
      bgColor="secondary"
      borderColor="complementary"
      // eslint-disable-next-line react/jsx-sort-props
      borderTop="4px solid"
      direction="row"
      height="50px"
      overflow="hidden"
      p={8}
      shadow="sm"
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
