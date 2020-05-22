import { useState, useEffect } from "react";
import { apiHost, API_ROUTES } from "../appConfig";

export const useCargo = (fixtures) => {
  const [cargos, setCargo] = useState([]);
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    const cargoPromises = fixtures.map((item) =>
      fetch(`${apiHost}${API_ROUTES.cargos}?fixNo=${item.fixNo}`)
        .then((response) => response.json())
        .then((cargoData) => cargoData)
    );
    Promise.all(cargoPromises).then((res) =>
      setCargo(res.flat(1).sort((a, b) => a.seqNo > b.seqNo))
    );
  }, [fixtures]);

  useEffect(() => {
    const ports = [
      ...new Set([
        ...cargos.map((cargo) => cargo.loadPort),
        ...cargos.map((cargo) => cargo.dischPort),
      ]),
    ];
    setPorts(ports);
  }, [cargos]);

  return [cargos, ports];
};
