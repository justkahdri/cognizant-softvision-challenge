import React from "react";
import {Flex, Link, Text} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex background="complementary.200" color="whiteAlpha.900" fontWeight={600} justify="center">
      <Text>
        {"Hecho por "}
        <Link isExternal href="https://github.com/justkahdri">
          JustKahdri
        </Link>
        {" © "} {new Date().getFullYear()}
      </Text>
    </Flex>
  );
};

export default Footer;
