export const isSearch = (element, search) => {
  if (element.toUpperCase().includes(search.toUpperCase())) {
    return true;
  }
  return false;
};
