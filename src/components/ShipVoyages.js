import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiHost, API_ROUTES } from "../appConfig";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const Ul = styled.ul`
  list-style-type: none;
`;

const sortVoyage = (a, b) => {
  return Number(a) > Number(b);
};

export const ShipVoyages = ({ shipCode }) => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    fetch(`${apiHost}${API_ROUTES.fixtures}?shipCode=${shipCode}`)
      .then((response) => response.json())
      .then((fixtureData) => setFixtures(fixtureData));
  }, [shipCode]);

  return (
    <>
      <Typography variant="h2">Voyages</Typography>
      <Typography>Select voyage</Typography>
      <Ul>
        {[...new Set(fixtures.map((fixture) => fixture.voyageNumber))]
          .sort(sortVoyage)
          .map((voyageNumber) => (
            <li>
              <Link to={`/voyage/${shipCode}/${voyageNumber}`}>
                {voyageNumber}
              </Link>
            </li>
          ))}
      </Ul>
    </>
  );
};
