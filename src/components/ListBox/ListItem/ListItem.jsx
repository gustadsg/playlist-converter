import React from "react";

import { Wrapper } from "./styles";

export default function ListItem({ artist, title }) {
  return <Wrapper>{`${title} - ${artist}`}</Wrapper>;
}
