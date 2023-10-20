export const getItemsFromLocalStorage = (key) => {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : [];
};

export const setItemsToLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};
