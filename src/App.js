import React from "react";
import { ShipRouter } from "./ShipRouter";
import styled from "styled-components/macro";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <ShipRouter />
      </Container>
    </>
  );
}

export default App;
