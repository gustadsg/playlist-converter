import spotifyApi from "../services/spotify";

export async function searchPlaylist(id) {
  const result = await spotifyApi.get(`/playlists/${id}`);
  return result;
}
