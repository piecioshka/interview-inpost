export async function makeRequest(url, options = {}) {
  const response = await globalThis.fetch(url, options);
  return response.json();
}
