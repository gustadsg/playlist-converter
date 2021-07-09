import React from "react";

import { Wrapper } from "./styles";

export default function Icon({ I, disabled, onClick }) {
  return (
    <Wrapper disabled={disabled} onClick={onClick}>
      <I size={25} />
    </Wrapper>
  );
}
