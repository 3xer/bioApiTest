import fetch from "node-fetch";

const API = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function getMovies() {
  const res = await fetch(API + '/movies');
  const pack = await res.json();
  return pack.data;
}
export async function getMovie(id) {
  const res = await fetch(API + '/movies/' + id);
  const pack = await res.json();
  return pack.data;
}