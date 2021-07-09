import React from "react";
import { Wrapper, Button, ContentContainer } from "./styles";

export default function ActionBar({ children, Icon, onButtonClick }) {
  return (
    <Wrapper>
      <ContentContainer>{children}</ContentContainer>
      <Button onClick={onButtonClick}>
        <Icon size={25} />
      </Button>
    </Wrapper>
  );
}
