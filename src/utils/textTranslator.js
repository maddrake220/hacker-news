const textTranslator = (text) => {
  return text.replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
};

export default textTranslator;
