import axios from "axios";

const deezer = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export default deezer;
