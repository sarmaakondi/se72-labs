import "./WeatherIcon.css";

const WeatherIcon = ({ img, imgAlt }) => {
  return <img className="icon" src={img} alt={imgAlt} />;
};

export default WeatherIcon;
