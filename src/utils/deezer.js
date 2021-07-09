import deezerApi from "../services/deezer";

export async function searchPlaylist(id) {
  const result = await deezerApi.get(`/playlist/${id}`);
  return result;
}

export default { searchPlaylist };
