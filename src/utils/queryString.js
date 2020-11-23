export default function queryString(entries) {
  if (entries instanceof Array) {
  } else if (entries instanceof Object) {
    entries = Object.entries(entries);
  } else {
    entries = [];
  }
  return entries
    .map((entrie) => entrie.map(el => encodeURIComponent(el)))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}
