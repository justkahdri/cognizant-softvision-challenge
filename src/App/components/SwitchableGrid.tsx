import React, {useEffect, useContext} from "react";
import {Stack, SimpleGrid} from "@chakra-ui/react";

import api from "../../api";
import CandidatesContext from "../../context";

import Card from "./Card";

interface GridProps {
  isEnabled: boolean;
}

const SwitchableGrid = ({isEnabled}: GridProps) => {
  const {candidates, loadCandidates} = useContext(CandidatesContext);
  // TODO: add stages to context
  const stages: Step[] = [
    "Entrevista inicial",
    "Entrevista técnica",
    "Oferta",
    "Asignación",
    "Rechazo",
  ];

  const moveCandidate: moveCandidateT = (id, dir) => {
    try {
      loadCandidates((oldCandidates) => {
        // Fix: undefined alerts
        // TODO: add this to context
        let shifted_can = oldCandidates.find((candidate) => candidate.id === id);
        let new_step = stages[stages.indexOf(shifted_can.step) + dir];
        const filtered = oldCandidates.filter((c) => c.id !== id);

        shifted_can = {...shifted_can, step: new_step};
        window.localStorage.setItem(
          "cached_candidates",
          JSON.stringify([...filtered, shifted_can]),
        );

        return [...filtered, shifted_can];
      });
    } catch (err) {
      console.error(err); // Fix: Handle error
    }
  };

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
        {stages.map((title) => (
          <Card
            key={title}
            candidates={candidates.filter((c) => c.step == title)}
            flex={1}
            handleMovement={moveCandidate}
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
        {stages.map((title) => (
          <Card
            key={title}
            candidates={candidates.filter((c) => c.step == title)}
            handleMovement={moveCandidate}
            title={title}
          />
        ))}
      </SimpleGrid>
    );
  }
};

export default SwitchableGrid;
