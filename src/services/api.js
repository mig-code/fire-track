const baseUrl =
  'https://analisis.datosabiertos.jcyl.es//api/explore/v2.1/catalog/datasets/incendios-forestales/records?limit=20&offset=0&where=fecha_del_parte%20%3E%202021&order_by=fecha_del_parte%20desc';

export const getFires = async () => {
  try {
    const result = await fetch(baseUrl);
    return result.json();
    
  } catch (error) {
    console.log(error);
  }
  return [];
};
