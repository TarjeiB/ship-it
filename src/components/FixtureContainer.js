import React from "react";
import { VoyageHelper } from "./VoyageHelper";
import { useFixtures } from "../hooks/useFixtures";
import { FixtureDetails } from "./FixtureDetails";

export const FixtureContainer = () => {
  const fixtures = useFixtures();
  if (fixtures.length === 0) return <p>No fixtures</p>;

  return (
    <>
      <FixtureDetails data={fixtures} />
      <VoyageHelper data={fixtures} />
    </>
  );
};
