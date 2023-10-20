export const totalFiresPerRequest = 15;
const baseUrl = import.meta.env.VITE_API_URL;

export const getFires = async (offset, urlFilter) => {
  
  // Strings to build the url
  const totaFiresPerRequestString = `records?limit=${totalFiresPerRequest}`;
  const offsetStart = `&offset=${offset}`;
  const defaultfilter = `&where=fecha_del_parte%20%3E%202021&order_by=fecha_del_parte%20desc`;

  const url = `${baseUrl}${totaFiresPerRequestString}${offsetStart}${defaultfilter}${urlFilter}`;

  try {
    const result = await fetch(url);
    return result.json();
  } catch (error) {
    console.log(error);
  }
  return [];
};
