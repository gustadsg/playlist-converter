import React from "react";

import { Wrapper } from "./styles";

export default function Icon({ I, disabled }) {
  return (
    <Wrapper disabled={disabled}>
      <I size={25} />
    </Wrapper>
  );
}
