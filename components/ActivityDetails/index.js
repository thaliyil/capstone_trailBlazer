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

      <StyledImg
        src={imageUrl}
        layout="responsive"
        width={400}
        height={360}
        alt={title}
      />
      <StyledDetailsTitle>{title}</StyledDetailsTitle>
      <StyledDetailsSubtitle>
        {area}, {country}
      </StyledDetailsSubtitle>

      {weather && (
        <WeatherDetails>
          <h4>
            Weather in {weather.name}: {weather.weather[0].description}
          </h4>
          <p>
            <WeatherIcon
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
            />
          </p>
          <p>Temperature: {Math.round(weather.main.temp)}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          {weather.rain && <p>Rain: {weather.rain["1h"]} mm (last hour)</p>}
          {weather.snow && <p>Snow: {weather.snow["1h"]} mm (last hour)</p>}
          <p>Visibility: {weather.visibility / 1000} km</p>
        </WeatherDetails>
      )}

      <StyledDetailsDescription>{description}</StyledDetailsDescription>

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
const WeatherDetails = styled.section`
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
  margin-right: 5px;
  background-color: var(--coral);
  border-radius: 5px;
`;

const StyledCardDetails = styled.div`
  position: relative;
  color: white;
  padding-bottom: 10px;
  margin: 0 40px;
  max-width: 700px;
  font-family: var(--font-family);
  font-weight: 400;

  @media (min-width: 768px) {
    margin: var(--media-queries-form-m);
  }

  @media (min-width: 992px) {
    margin: var(--media-queries-form-l);
  }

  @media (min-width: 1200px) {
    margin: var(--media-queries-form-xl);
  }
`;

const StyledEditLink = styled(Link)`
  margin-bottom: 50px;
  background-color: var(--coral);
  border-radius: 5px;
  border: 1.5px solid black;
  padding: 25px 5px 2px;
  margin-left: 10px;
`;

const StyledImg = styled(Image)`
  border-radius: 20px;
  margin-top: 15px;
`;

const StyledDetailsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

const StyledDetailsSubtitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 50px;
`;

const StyledDetailsDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2;
`;
