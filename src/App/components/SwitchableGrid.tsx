import React, {useEffect, useContext} from "react";
import {Stack, SimpleGrid} from "@chakra-ui/react";

import api from "../../api";
import CandidatesContext from "../../context";

import Card from "./Card";

interface GridProps {
  isEnabled: boolean;
}

const SwitchableGrid = ({isEnabled}: GridProps) => {
  const {candidates, loadCandidates, steps} = useContext(CandidatesContext);

  useEffect(() => {
    const getData = async () => {
      const response = await api.candidates.list();

      loadCandidates(response);
    };

    const cached_candidates = window.localStorage.getItem("cached_candidates");

    if (!cached_candidates) {
      getData();
    } else {
      loadCandidates(JSON.parse(cached_candidates));
    }
  }, [loadCandidates]);

  if (!isEnabled) {
    return (
      <Stack as="main" direction="row" overflowX="scroll" pb={3} px={6} spacing={6}>
        {steps.map((title) => (
          <Card
            key={title}
            candidates={candidates.filter((c) => c.step == title)}
            flex={1}
            minH="180px"
            minW={{base: "250px", sm: "300px", lg: "350px"}}
            title={title}
          />
        ))}
      </Stack>
    );
  } else {
    return (
      <SimpleGrid as="main" minChildWidth={{base: "200px", md: "280px"}} px={6} spacing={5}>
        {steps.map((title) => (
          <Card key={title} candidates={candidates.filter((c) => c.step == title)} title={title} />
        ))}
      </SimpleGrid>
    );
  }
};

export default SwitchableGrid;
