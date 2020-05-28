import React from "react";
import { VoyageHelper } from "./VoyageHelper";
import { useFixtures } from "../hooks/useFixtures";
import { FixtureDetails } from "./FixtureDetails";
import { useCargo } from "../hooks/useCargo";

export const FixtureContainer = () => {
  const fixtures = useFixtures();
  const [cargos, ports] = useCargo(fixtures);

  if (fixtures.length === 0) return <p>No fixtures</p>;

  return (
    <>
      <FixtureDetails data={fixtures} />
      <VoyageHelper cargos={cargos} ports={ports} />
    </>
  );
};
