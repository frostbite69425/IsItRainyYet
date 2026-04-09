import "../styles.css";
import getWeatherData from "./utils/apiQuery.utility.js";
import getGeolocation from "./utils/geolocation.utility.js";

(async () => {
  try {
    const coord = await getGeolocation();
    const weatherData = await getWeatherData(
      `${coord.latitude}, ${coord.longitude}`,
    );
    console.log(weatherData);
  } catch (error) {
    console.error(error);
  }
})();
