import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const PortChecklists = ({ loadCargo, dischCargo, handleNext }) => {
  const handleChange = () => {
    const inputsArray = [...document.querySelectorAll("input")].map(
      (inp) => inp.checked
    );
    const allChecked = inputsArray.every((item) => item === true);
    if (allChecked) handleNext();
  };

  return (
    <div>
      <div>
        <h3>Load</h3>
        <Checklist
          data={loadCargo}
          onChange={handleChange}
          emptyText="Nothing to load"
        />
      </div>
      <div>
        <h3>Discharge</h3>
        <Checklist
          data={dischCargo}
          onChange={handleChange}
          emptyText="Nothing to discharge"
        />
      </div>
    </div>
  );
};

const Checklist = ({ data, onChange, emptyText }) => (
  <>
    {data.length === 0 ? (
      <p>{emptyText}</p>
    ) : (
      <FormGroup>
        {data.map((item) => (
          <FormControlLabel
            control={<Checkbox onChange={onChange} />}
            label={item.commodity}
          />
        ))}
      </FormGroup>
    )}
  </>
);
