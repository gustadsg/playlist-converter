import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

import { AiOutlineSearch, AiOutlinePlaySquare } from "react-icons/ai";
import { SiDeezer, SiSpotify } from "react-icons/si";
import { Wrapper, ContentContainer, IconContainer } from "./styles";

import { ActionBar, ListBox, InvisibleInput, Icon } from "../../components";

import deezer from "../../utils/deezer";
import spotify from "../../utils/spotify";

const services = {
  deezer,
  spotify,
};

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
    if (!services[service]) return alert("Serviço não suportado");

    const serviceToken = localStorage.getItem(`${service}Token`);
    if (!serviceToken) return services?.[service]?.redirectToLogin();

    setActiveService(service);
    console.log("able to make request");
    return null;
  }

  // retrieves service specified on url
  function retrieveService() {
    let serviceName = null;
    const queryString = window.location.search;
    if (queryString.length > 0) {
      const urlParams = new URLSearchParams(queryString);
      serviceName = urlParams.get("service");
    }
    setActiveService(serviceName);
    return serviceName;
  }

  useEffect(() => {
    // gets token if possible
    async function run() {
      const serviceName = retrieveService();
      const code = services[serviceName]?.retrieveCode();
      if (!code) return;
      localStorage.setItem(`${serviceName}Code`, code);
      const token = await services[serviceName]?.requestToken(code);
      localStorage.setItem(`${serviceName}Token`, token);
    }
    run();
  }, []);

  return (
    <Wrapper>
      <ContentContainer>
        <h1>Playlist Converter</h1>
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
