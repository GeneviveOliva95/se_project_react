import "./WeatherCard.css";
import sunny from "../../assets/sunny.png";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temperature">75 &deg;</p>
      <img className="weather-card__image" src={sunny} alt="sunny" />
    </section>
  );
}

export default WeatherCard;
