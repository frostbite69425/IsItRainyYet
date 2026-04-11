function apiDataParser(jsonFile) {
  return {
    currentConditions: jsonFile.currentConditions,
    days: jsonFile.days.slice(0, 7),
  };
}

export default apiDataParser;
