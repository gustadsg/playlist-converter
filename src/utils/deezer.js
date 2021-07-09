import deezerApi, { deezerAuth } from "../services/deezer";
import secrets from "../secrets";

const { deezerAppId, deezerApiSecret, appBaseUrl, deezerPerms } = secrets;

const responseType = "json";

export async function searchPlaylist(id) {
  const result = await deezerApi.get(`/playlist/${id}`);
  return result;
}

// sends user to login of used service
export async function redirectToLogin() {
  window.location.href = `https://connect.deezer.com/oauth/auth.php?app_id=${deezerAppId}&redirect_uri=${`${appBaseUrl}?service=deezer`}&perms=${deezerPerms}`;
}

// retrieve the code from first part of authentication from url
export function retrieveCode() {
  let code = null;
  const queryString = window.location.search;
  if (queryString.length > 0) {
    const urlParams = new URLSearchParams(queryString);
    code = urlParams.get("code");
  }
  return code;
}

// retrieve token from service passing the code
export async function requestToken(code) {
  const params = {
    app_id: deezerAppId,
    secret: deezerApiSecret,
    code,
    output: responseType,
  };
  const {
    data: { accessToken },
  } = await deezerAuth.get("", { params });
  return accessToken;
}

export default { searchPlaylist, redirectToLogin, retrieveCode, requestToken };
