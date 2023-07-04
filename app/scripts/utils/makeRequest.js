export async function makeRequest(url) {
  const response = await global.fetch(url);
  return response.json();
}
