import React from "react";
import { Cargo } from "./Cargo";
import { useFixtures } from "../hooks/useFixtures";
import { FixtureDetails } from "./FixtureDetails";

export const FixtureContainer = () => {
  const fixtures = useFixtures();
  if (fixtures.length === 0) return <p>No fixtures</p>;

  return (
    <>
      <FixtureDetails data={fixtures} />
      <Cargo data={fixtures} />
    </>
  );
};
