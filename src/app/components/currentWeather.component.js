import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";

const currentWeatherCard = (weatherData) => {
  const cardDiv = elementFactory("div", "current-weather-card card");

  const imgDiv = elementFactory(
    "div",
    "current-weather-img-container card-data",
  );

  const icon = elementFactory("img", "current-weather-img");

  const weatherIconValue = weatherData.icon;

  import(`../../assets/weatherIcons/${weatherIconValue}.svg`)
    .then(() => {
      icon.domElement.src = `../../assets/weatherIcons/${weatherIconValue}.svg`;
    })
    .catch((err) => console.error(err));

  imgDiv.setChildren(icon.domElement);

  const conditions = elementFactory("div", "weatherConditions card-data");

  conditions.insertText(`Conditions: ${weatherData.conditions}`);

  const feelsLike = elementFactory("div", "feelsLike card-data");

  feelsLike.insertText(`Feels Like: ${weatherData.feelslike}`);

  const humidity = elementFactory("div", "humidity card-data");

  humidity.insertText(`Humidity: ${weatherData.humidity}`);

  const precipProb = elementFactory("div", "precipProb card-data");
  precipProb.insertText(
    `Probability of precipitation: ${weatherData.precipprob}`,
  );

  const temp = elementFactory("div", "temp card-data");
  temp.insertText(`Temperature: ${weatherData.temp}`);

  const windSpeed = elementFactory("div", "windSpeed card-data");
  windSpeed.insertText(`Wind Speed: ${weatherData.windspeed}`);

  cardDiv.setChildren(
    imgDiv.domElement,
    conditions.domElement,
    temp.domElement,
    feelsLike.domElement,
    humidity.domElement,
    precipProb.domElement,
    windSpeed.domElement,
  );

  return cardDiv;
};

export default currentWeatherCard;
