import axios from "axios";

const deezer = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.deezer.com",
});

export default deezer;
