import React from "react";

import ListItem from "./ListItem/ListItem";
import { Wrapper, Title, ItemsContainer } from "./styles";

export default function ListBox({ title, items }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map((item) => (
          <ListItem title={item?.title} artist={item?.artist} key={item?.id} />
        ))}
      </ItemsContainer>
    </Wrapper>
  );
}
