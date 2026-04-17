async function getWeatherData(location, unit = "metric") {
  try {
    const weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&elements=conditions%2Cdatetime%2Cfeelslike%2Chumidity%2Cicon%2Cname%2Coffset%2Cprecip%2Cprecipprob%2Cpreciptype%2Ctemp%2Cwindspeed&key=6A2RYCPHPZBZVCAVV2XKYG3V3&contentType=json`,
    );

    if (weatherData.status >= 400) {
      return weatherData.status;
    }

    const processedData = await weatherData.json();
    return processedData;
  } catch (error) {
    console.log(error);
  }
}

export default getWeatherData;
