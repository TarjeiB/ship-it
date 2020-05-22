import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ShipVoyages } from "./ShipVoyages";
import { Flag } from "./FlagMap";
import { ReactComponent as Ship } from "../svg/ship.svg";
import styled from "styled-components/macro";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ShipList = ({ data = [] }) => {
  return (
    <>
      <Center>
        <Ship css="height: 64px;" />
        <Typography variant="h1">Shipping manager</Typography>
        <Typography variant="subtitle1">Select ship & voyage</Typography>
      </Center>
      {data.map((ship) => (
        <ExpansionPanel key={ship.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Flag flagCode={ship.codeFlag} />
            <Typography>{ship.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <ShipVoyages shipCode={ship.shipCode} />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </>
  );
};
