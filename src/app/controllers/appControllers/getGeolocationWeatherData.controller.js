import getWeatherData from "../../utils/app utils/apiQuery.utility.js";
import getGeolocation from "../../utils/app utils/geolocation.utility.js";
import apiDataParser from "../../utils/app utils/apiDataParser.utility.js";

async function getGeolocationWeatherData() {
  try {
    const coord = await getGeolocation();
    const weatherData = await getWeatherData(
      `${coord.latitude}, ${coord.longitude}`,
    );
    const parsedWeatherData = apiDataParser(weatherData);
    const location = `${coord.latitude}, ${coord.longitude}`;
    return { parsedWeatherData, location };
  } catch (error) {
    console.error(error);
  }
}

export default getGeolocationWeatherData;
