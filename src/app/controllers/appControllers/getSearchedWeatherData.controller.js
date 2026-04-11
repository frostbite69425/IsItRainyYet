import getWeatherData from "../../utils/app utils/apiQuery.utility.js";
import apiDataParser from "../../utils/app utils/apiDataParser.utility.js";

async function getSearchedWeatherData(location) {
  try {
    const weatherData = await getWeatherData(location);
    const parsedWeatherData = apiDataParser(weatherData);
    return parsedWeatherData;
  } catch (error) {
    console.error(error);
  }
}

export default getSearchedWeatherData;
