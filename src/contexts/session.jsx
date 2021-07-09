import React, { createContext, useContext, useState } from "react";

const SessionContext = createContext({ spotify: null, deezer: null });

export default function SessionProvider({ children }) {
  const [spotify, setSpotify] = useState(null);
  const [deezer, setDeezer] = useState(null);

  function deezerLogin(token) {
    setDeezer(token);
    localStorage.setItem("deezerToken", token);
  }

  function spotifyLogin(token) {
    setSpotify(token);
    localStorage.setItem("spotifyToken", token);
  }

  return (
    <SessionContext.Provider
      value={{ spotify, deezer, deezerLogin, spotifyLogin }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
