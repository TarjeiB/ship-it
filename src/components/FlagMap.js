import React from "react";

import { ReactComponent as MaltaFlag } from "../svg/flags/mt.svg";
import { ReactComponent as BahamasFlag } from "../svg/flags/bh.svg";
import { ReactComponent as CaymanFlag } from "../svg/flags/ca.svg";
import { ReactComponent as DenmarkFlag } from "../svg/flags/dk.svg";
import { ReactComponent as PanamaFlag } from "../svg/flags/pa.svg";
import { ReactComponent as SingaporeFlag } from "../svg/flags/sg.svg";
import { ReactComponent as NorwayFlag } from "../svg/flags/no.svg";
import styled from "styled-components";

const SDiv = styled.div`
  width: 48px;
  margin-right: 24px;
`;

export const Flag = ({ flagCode }) => {
  const TheFlag = flagMap(flagCode);

  return (
    <SDiv>
      <TheFlag />
    </SDiv>
  );
};

const flagMap = (flagCode) => {
  switch (flagCode) {
    case "MALTA":
    case "MT":
      return MaltaFlag;
    case "DK":
      return DenmarkFlag;
    case "BAH":
    case "BAHAMAS":
      return BahamasFlag;
    case "CAYMA":
      return CaymanFlag;
    case "SG":
      return SingaporeFlag;
    case "PANAMA":
      return PanamaFlag;
    default:
      return NorwayFlag;
  }
};
