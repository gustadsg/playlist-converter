import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

import { AiOutlineSearch, AiOutlinePlaySquare } from "react-icons/ai";
import { SiDeezer, SiSpotify } from "react-icons/si";
import { Wrapper, ContentContainer, IconContainer } from "./styles";

import { ActionBar, ListBox, InvisibleInput, Icon } from "../../components";

import deezer from "../../utils/deezer";
import spotify from "../../utils/spotify";

import secrets from "../../secrets";

const services = {
  deezer,
  spotify,
};

const { deezerAppId } = secrets;

export default function Home() {
  const [search, setSearch] = useState();
  // const [playlistData, setPlaylistData] = useState(null);
  const [playlistTitle, setplaylistTitle] = useState(null);
  const [playlistItems, setPlaylistItems] = useState(null);
  const [activeService, setActiveService] = useState(null);

  async function handleSearch() {
    if (!search)
      return alert("Digite uma url de playlist antes de fazer a busca");

    if (search.toString().toLowerCase().includes("deezer")) {
      const correctFormat = search
        .toString()
        .toLowerCase()
        .includes("deezer.com/");
      if (!correctFormat) return alert("url inválida");
      const id = search.split("/").pop();
      try {
        const result = await services.deezer.searchPlaylist(id);
        if (result?.data?.error) return alert("Nada encontrado :(");
        // setPlaylistData(result.data);
        setplaylistTitle(result?.data?.title);
        setPlaylistItems(
          result.data?.tracks?.data.map((song) => ({
            artist: song?.artist?.name,
            title: song.title,
          }))
        );
        return result;
      } catch (error) {
        alert("Não foi possível efetuar a busca. Tente novamente mais tarde");
      }
    }
    return null;
  }

  function handleServiceClick(service) {
    setActiveService(service);
    if (!services[service]) return alert("Serviço não suportado");
    if (service === "deezer") {
      window.location.href = `https://connect.deezer.com/oauth/auth.php?app_id=${deezerAppId}&redirect_uri=https://60e85205db996a0007509ebd--sad-jones-2631b7.netlify.app&perms=basic_access,email,manage_library`;
      return window.location.href;
    }
    return null;
  }

  return (
    <Wrapper>
      <ContentContainer>
        <h1>Playlist Conveter</h1>
        <ActionBar Icon={AiOutlineSearch} onButtonClick={handleSearch}>
          {" "}
          <InvisibleInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="EX: https://open.spotify.com/playlist/5DqR5bAbk7mTq5jnvJsjel"
          />
        </ActionBar>
        <ListBox title={playlistTitle} items={playlistItems} />
        <ActionBar Icon={AiOutlinePlaySquare}>
          Converter para:
          <IconContainer>
            <Icon
              I={SiDeezer}
              disabled={!(activeService === "deezer")}
              onClick={() => handleServiceClick("deezer")}
            />
            <Icon
              I={SiSpotify}
              disabled={!(activeService === "spotify")}
              onClick={() => handleServiceClick("spotify")}
            />
          </IconContainer>
        </ActionBar>
      </ContentContainer>
    </Wrapper>
  );
}
