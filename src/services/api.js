export const totalFiresPerRequest = 15;
const baseUrl = `https://analisis.datosabiertos.jcyl.es//api/explore/v2.1/catalog/datasets/incendios-forestales/`;

export const getFires = async (offset) => {
  // Strings to build the url
  const totaFiresString = `records?limit=${totalFiresPerRequest}`;
  const offsetString = `&offset=${offset}`;
  const filtersString = `&where=fecha_del_parte%20%3E%202021&order_by=fecha_del_parte%20desc`;

  const url = `${baseUrl}${totaFiresString}${offsetString}${filtersString}`;

  try {
    const result = await fetch(url);
    return result.json();
  } catch (error) {
    console.log(error);
  }
  return [];
};
