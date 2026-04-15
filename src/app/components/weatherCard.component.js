import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import { toDate, format } from "date-fns";

const weatherCard = (weatherData) => {
  const cardDiv = elementFactory("div", "weather-card-container card");

  const imgDiv = elementFactory("div", "weatherIcon card-data");

  const icon = elementFactory("img", "weather-icon");

  const weatherIconValue = weatherData.icon;

  import(`../../assets/weatherIcons/${weatherIconValue}.svg`)
    .then((image) => {
      icon.domElement.src = image.default;
    })
    .catch((error) => console.error(`Could not load image due to ${error}`));

  imgDiv.setChildren(icon.domElement);

  const dateDiv = elementFactory("div", "weatherDate card-data");

  const dayDiv = elementFactory("div", "weatherDay card-data");

  const date = format(toDate(weatherData.datetime), "dd/MMM/yyyy");

  const day = format(date, "EEEE");

  dateDiv.insertText(date);
  dayDiv.insertText(day);

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
    dateDiv.domElement,
    dayDiv.domElement,
    conditions.domElement,
    temp.domElement,
    feelsLike.domElement,
    humidity.domElement,
    precipProb.domElement,
    windSpeed.domElement,
  );

  return cardDiv;
};

export default weatherCard;
