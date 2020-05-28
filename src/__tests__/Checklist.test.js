import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { Checklist } from "../components/PortChecklists";

const dummyData = [
  {
    id: 1,
    commodity: "ETHYL ACETATE",
  },
  {
    id: 2,
    commodity: "PGI*  (*COMMON USAGE) (PROPYLENE GLYCOL)",
  },
  {
    id: 3,
    commodity: "PHENOL-HYDRATED",
  },
];

describe("<Checklist />", () => {
  it("should have labels", () => {
    render(
      <Checklist data={dummyData} onChange={() => {}} emptyText="Im empty" />
    );
    screen.getByLabelText(/Ethyl/i);
    screen.getByLabelText(/Phenol/i);
    screen.getByLabelText(/PGI/i);
  });
});
