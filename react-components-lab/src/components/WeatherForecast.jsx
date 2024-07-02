import "./WeatherForecast.css";

import WeatherIcon from "./WeatherIcon";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <h2>{props.day}</h2>
      <WeatherIcon img={props.img} imgAlt={props.imgAlt} />
      <p>
        <span>conditions: </span>
        {props.conditions}
      </p>
      <p>
        <span>time: </span>
        {props.time}
      </p>
    </div>
  );
};

export default WeatherForecast;
