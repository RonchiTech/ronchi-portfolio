import React from 'react';
import Card from './Card';
import classes from './CardList.module.css';
import TodoLogo from '../../assets/img/todoicon.svg';
import MovieLogo from '../../assets/img/movie.svg'
import CovidLogo from '../../assets/img/covid.svg'
import WeatherLogo from '../../assets/img/weather.svg'
import FishLogo from '../../assets/img/fish.svg'
const CardList = () => {
  return (
    <div className={classes.CardList}>
      <Card
        src={TodoLogo}
        title="Todo App"
        description="Simple todo app"
        site="https://todoapp-a6d7d.web.app/"
        github="https://github.com/RonchiTech/todoapp"
      />
      <Card
        src={MovieLogo}
        title="Movie Search App"
        description="Simple Movie Search App"
        site="https://moviesearch-db80a.web.app/"
        github="https://github.com/RonchiTech/moviesearchapp"
      />
      <Card
        src={CovidLogo}
        title="Covid-19 Track App"
        description="Gives you the latest total report and can search by Country"
        site="https://covid-19-track-app-40f4c.web.app/"
        github="https://github.com/RonchiTech/covid-track-app"
      />
      <Card
        src={WeatherLogo}
        title="Weather App"
        description="Web App not mine but I added background and Responsive Design"
        github="https://github.com/RonchiTech/weather-tutorial/tree/UIBranch"
      />
      <Card
        src={FishLogo}
        title="Fish Pili"
        description="An online fish selling/buying app"
        github="https://github.com/RonchiTech/fishpili"
        label="In development"
      />
    </div>
  );
};
export default CardList;
