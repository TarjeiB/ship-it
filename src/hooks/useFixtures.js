import { useEffect, useState } from "react";
import { apiHost, API_ROUTES } from "../appConfig";
import { useParams } from "react-router-dom";

export const useFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const { shipCode, voyageNumber } = useParams();

  useEffect(() => {
    fetch(
      `${apiHost}${API_ROUTES.fixtures}?shipCode=${shipCode}&voyageNumber=${voyageNumber}`
    )
      .then((response) => response.json())
      .then((fixtureData) => setFixtures(fixtureData));
  }, [shipCode, voyageNumber]);

  return fixtures;
};
