import React from "react";
import { Wrapper, Button, ContentContainer } from "./styles";

export default function ActionBar({ children, Icon }) {
  return (
    <Wrapper>
      <ContentContainer>{children}</ContentContainer>
      <Button>
        <Icon size={25} />
      </Button>
    </Wrapper>
  );
}
