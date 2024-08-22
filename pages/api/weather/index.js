export default async function handler(request, response) {
  const country = request.query.country;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await res.json();
    console.log("data is", data);
    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(400).json(error);
  }
}
