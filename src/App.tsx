import React from 'react';
import axios from 'axios';

const App = () => {
  const [lat, setLat] = React.useState<Number>();
  const [long, setLong] = React.useState<Number>();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${process.env.OPEN_WEATHER_API_KEY}&q=${lat},${long}`
        )
        .then((response) => {
          console.log(response);
        });
    };

    fetchData();
  }, [lat, long]);

  return (
    <div className="h-screen w-screen bg-zinc-900 text-zinc-200">
      <div className="flex justify-center items-center h-screen"></div>
    </div>
  );
};

export default App;
