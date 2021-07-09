import axios from "axios";

const deezer = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.deezer.com",
});

export const deezerAuth = axios.create({
  baseURL: "https://connect.deezer.com/oauth/access_token.php",
});

export default deezer;
