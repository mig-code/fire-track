export const totalFiresPerRequest = 15;
const baseUrl = `https://analisis.datosabiertos.jcyl.es//api/explore/v2.1/catalog/datasets/incendios-forestales/`;

export const getFires = async (offset, urlFilter) => {
  // Strings to build the url
  console.log(urlFilter, 'en api');

  const totaFiresString = `records?limit=${totalFiresPerRequest}`;
  const offsetString = `&offset=${offset}`;
  const defaultfilterString = `&where=fecha_del_parte%20%3E%202021&order_by=fecha_del_parte%20desc`;

  const url = `${baseUrl}${totaFiresString}${offsetString}${defaultfilterString}${urlFilter}`;
  console.log(url);

  try {
    const result = await fetch(url);
    return result.json();
  } catch (error) {
    console.log(error);
  }
  return [];
};
