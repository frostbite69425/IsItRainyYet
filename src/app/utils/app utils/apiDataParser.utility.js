function apiDataParser(jsonFile) {
  return {
    currentConditions: jsonFile.currentConditions,
    days: jsonFile.days.slice(1, 8),
  };
}

export default apiDataParser;
