import Image from "next/image";
import { StyledCategoryLi, StyledCateogriesUl } from "../Styles";
import getFilteredCategories from "@/utils/filterCategories";
import BookmarkButton from "../BookmarkButton";
import styled from "styled-components";
import Delete from "../../assets/svg/delete.svg";
import Link from "next/link";
import Edit from "../../assets/svg/edit.svg";
import { useEffect, useState } from "react";

export default function ActivityDetails({
  activity,
  onToggleBookmark,
  isBookmarked,
  onDelete,
}) {
  const { title, categoryIds, imageUrl, area, country, description } = activity;
  const filteredCategories = getFilteredCategories(categoryIds);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(`/api/weather?country=${country}`);
      if (response.ok) {
        const weatherData = await response.json();
        setWeather(weatherData);
      }
    }
    getWeather();
  }, [country]);
  return (
    <StyledCardDetails>
      <BookmarkButton
        onToggleBookmark={onToggleBookmark}
        isBookmarked={isBookmarked}
      />

      <Image
        src={imageUrl}
        layout="responsive"
        width={400}
        height={360}
        alt={title}
      />
      <h2>{title}</h2>
      <h3>
        {area}, {country}
      </h3>
      <p>{description}</p>
      {weather && (
        <WeatherDetails>
          <p>
            Weather in {weather.name}: {weather.weather[0].description}
          </p>
          <p>
            <WeatherIcon
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
            />
          </p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          {weather.rain && <p>Rain: {weather.rain["1h"]} mm (last hour)</p>}
          {weather.snow && <p>Snow: {weather.snow["1h"]} mm (last hour)</p>}
          <p>Visibility: {weather.visibility / 1000} km</p>
          <p>Pressure: {weather.main.pressure} hPa</p>
        </WeatherDetails>
      )}

      <StyledCateogriesUl>
        {filteredCategories.map((category) => (
          <StyledCategoryLi key={category.id}>{category.name}</StyledCategoryLi>
        ))}
      </StyledCateogriesUl>
      <DeleteButton
        aria-label="Click here to delete the activity"
        type="button"
        onClick={onDelete}
      >
        <Delete />
      </DeleteButton>
      <StyledEditLink href={`/activities/${activity.id}/update`}>
        <Edit />
      </StyledEditLink>
    </StyledCardDetails>
  );
}
const WeatherDetails = styled.div`
  background-color: var(--light-green);
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
`;
const DeleteButton = styled.button`
  margin-bottom: 50px;
  background-color: var(--coral);
  border-radius: 5px;
  color: white;
`;

const StyledCardDetails = styled.div`
  position: relative;
  color: white;
  padding-bottom: 10px;
`;

const StyledEditLink = styled(Link)`
  margin-bottom: 50px;
  background-color: var(--coral);
  border-radius: 5px;
  color: white;
`;
