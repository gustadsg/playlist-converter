import React from "react";

import { Wrapper, ContentContainer } from "./styles";

import { ActionBar } from "../../components";

export default function Home() {
  return (
    <Wrapper>
      <ContentContainer>
        <ActionBar />
      </ContentContainer>
    </Wrapper>
  );
}
