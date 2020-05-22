import React from "react";
import { render } from "@testing-library/react";
import { ShipList } from "../components/ShipList";
import { screen } from "@testing-library/dom";
const dummyData = [
  {
    id: 1,
    shipCode: 17,
    title: "FIRST TRIPPER",
    dateBuilt: 1999,
    codeFlag: "MALTA",
  },
  {
    id: 2,
    shipCode: 18,
    title: "FIRST POINTER",
    dateBuilt: 2005,
    codeFlag: "MALTA",
  },
];

describe("<ShipList />", () => {
  it("Should render a list of ships", () => {
    render(<ShipList data={dummyData} />);
    screen.getByText(/first tripper/i);
    screen.getByText(/first pointer/i);
  });
});
