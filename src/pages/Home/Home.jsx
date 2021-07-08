import React from "react";

import { AiOutlineSearch, AiOutlinePlaySquare } from "react-icons/ai";
import { SiDeezer, SiSpotify } from "react-icons/si";
import { Wrapper, ContentContainer } from "./styles";

import { ActionBar, ListBox, InvisibleInput, Icon } from "../../components";

import data from "../../mockData/tracks.json";

export default function Home() {
  return (
    <Wrapper>
      <ContentContainer>
        <h1>Playlist Conveter</h1>
        <ActionBar Icon={AiOutlineSearch}>
          {" "}
          <InvisibleInput />
        </ActionBar>
        <ListBox title="Título da playlist" items={data} />
        <ActionBar Icon={AiOutlinePlaySquare}>
          Converter para:
          <Icon I={SiDeezer} />
          <Icon I={SiSpotify} disabled />
        </ActionBar>
      </ContentContainer>
    </Wrapper>
  );
}
