function WeatherCard({ city, temperature }) {
  return (
    <div>
      <h3>{city}</h3>
      <p>Temperature: {temperature}°C</p>
    </div>
  );
}

export default WeatherCard;

#usage
<WeatherCard city="New York" temperature={22} />
