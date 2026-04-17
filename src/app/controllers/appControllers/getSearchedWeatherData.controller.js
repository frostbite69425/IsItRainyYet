import getWeatherData from "../../utils/app utils/apiQuery.utility.js";
import apiDataParser from "../../utils/app utils/apiDataParser.utility.js";
import logAlert from "../../services/app services/logAlert.service.js";

async function getSearchedWeatherData(location, unit = "metric") {
  try {
    const weatherData = await getWeatherData(location, unit);
    if (weatherData >= 400) {
      return weatherData;
    }
    const parsedWeatherData = apiDataParser(weatherData);
    return parsedWeatherData;
  } catch (error) {
    console.error(error);
    logAlert("Invalid location. Please try again");
  }
}

export default getSearchedWeatherData;
