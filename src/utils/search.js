export const isSearch = (element, search) => {
  if (element.title.toUpperCase().includes(search.toUpperCase())) {
    return true;
  }
  return false;
};
