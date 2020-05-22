import { useState, useEffect } from "react";
import { apiHost, API_ROUTES } from "../appConfig";

export const useShips = () => {
  const [ships, setShips] = useState();

  useEffect(() => {
    fetch(`${apiHost}${API_ROUTES.ships}`)
      .then((response) => response.json())
      .then((shipData) => setShips(shipData));
  }, []);

  return ships;
};
