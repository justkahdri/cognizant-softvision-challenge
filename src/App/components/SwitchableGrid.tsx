import React, {useEffect, useContext} from "react";
import {Stack, Grid} from "@chakra-ui/react";

import {CandidatesContext} from "../../contexts";

import Card from "./Card";

interface GridProps {
  isEnabled: boolean;
}

const SwitchableGrid = ({isEnabled}: GridProps) => {
  const {candidates, loadCandidates, steps} = useContext(CandidatesContext);

  const scrollbarStyle = {
    "&::-webkit-scrollbar": {
      height: "10px",
      // background: "rgba(0,0,0,0.1)",
    },
    // "&::-webkit-scrollbar-track": {
    //   height: "50px",
    // },
    "&::-webkit-scrollbar-thumb": {
      background: "white",
      borderRadius: "24px",
      border: "2px solid",
      borderColor: "rgba(0,0,0,0.1)",
    },
  };

  useEffect(() => {
    loadCandidates();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isEnabled) {
    return (
      <Stack
        as="main"
        css={scrollbarStyle}
        direction="row"
        flex={1}
        overflowX="scroll"
        pb={3}
        px={6}
        spacing={6}
      >
        {steps.map((title) => (
          <Card
            key={title}
            candidates={candidates.filter((c) => c.step == title)}
            flex={1}
            minW={{base: "250px", sm: "300px", lg: "350px"}}
            title={title}
          />
        ))}
      </Stack>
    );
  } else {
    return (
      <Grid
        as="main"
        gap={5}
        minHeight="80vh"
        px={6}
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        templateRows="repeat(auto-fill, 1fr)"
      >
        {steps.map((title) => (
          <Card
            key={title}
            candidates={candidates.filter((c) => c.step == title)}
            height="100%"
            title={title}
          />
        ))}
      </Grid>
    );
  }
};

export default SwitchableGrid;
