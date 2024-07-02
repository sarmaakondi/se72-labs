import "./WeatherForecast.css";

import WeatherIcon from "./WeatherIcon";

const WeatherForecast = (props) => {
  const fixCase = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <div className="weather">
      <h2>{fixCase(props.day)}</h2>
      <WeatherIcon img={props.img} imgAlt={props.imgAlt} />
      <p>
        <span>Conditions: </span>
        {fixCase(props.conditions)}
      </p>
      <p>
        <span>Time: </span>
        {fixCase(props.time)}
      </p>
    </div>
  );
};

export default WeatherForecast;
