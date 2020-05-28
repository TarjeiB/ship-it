import React from "react";
import { PortChecklists } from "./PortChecklists";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import "styled-components/macro";
import { Paper } from "@material-ui/core";

export const VoyageHelper = ({ cargos, ports }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  if (cargos.length === 0) return <p>No cargo found</p>;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Stepper
      orientation="vertical"
      activeStep={activeStep}
      css="margin-top: 24px;"
      component={Paper}
    >
      {ports.map((port) => (
        <Step key={port}>
          <StepLabel>{port}</StepLabel>
          <StepContent>
            <PortChecklists
              loadCargo={cargos.filter((cargo) => cargo.loadPort === port)}
              dischCargo={cargos.filter((cargo) => cargo.dischPort === port)}
              handleNext={handleNext}
            />
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};
