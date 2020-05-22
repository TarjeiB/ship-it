import React from "react";
import styled from "styled-components/macro";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Typography,
  TableContainer,
  Paper,
} from "@material-ui/core";

export const FixtureDetails = ({ data }) => {
  return (
    <>
      <Typography variant="h1">Voyage overview</Typography>
      <Typography>Number of fixtures on voyage {data.length}</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="fixture table">
          <TableHead>
            <TableRow>
              <TableCell>ChartererCode</TableCell>
              <TableCell align="center">Charterer</TableCell>
              <TableCell align="center">Broker</TableCell>
              <TableCell align="center">Fixture Type</TableCell>
              <TableCell align="center">Cargo</TableCell>
              <TableCell align="center">Currency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((fixture) => (
              <TableRow key={fixture.chartererCode}>
                <TableCell component="th" scope="row">
                  {fixture.chartererCode}
                </TableCell>
                <TableCell component="th" scope="row">
                  {fixture.charterer}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {fixture.broker}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {fixture.fixType}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {fixture.cargo}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {fixture.currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
