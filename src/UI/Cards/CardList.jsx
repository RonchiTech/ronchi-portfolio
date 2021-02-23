import React from 'react';
import Card from './Card';
const CardList = () => {
  return (
    <>
      <Card
        title="Todo App"
        description="Simple todo app"
        site="https://todoapp-a6d7d.web.app/"
        github="https://github.com/RonchiTech/todoapp"
      />
      <Card
        title="Movie Search App"
        description="Simple Movie Search App"
        site="https://moviesearch-db80a.web.app/"
        github="https://github.com/RonchiTech/moviesearchapp"
      />
      <Card
        title="Covid-19 Track App"
        description="Covid-19 Track App"
        site="https://covid-19-track-app-40f4c.web.app/"
        github="https://github.com/RonchiTech/covid-track-app"
      />
      <Card
        title="Weather App"
        description="Web App not mine but I added background and Responsive Design"
        github="https://github.com/RonchiTech/weather-tutorial/tree/UIBranch"
      />
      <Card
        title="Fish Pili"
        description="An online fish selling/buying app"
        github="https://github.com/RonchiTech/fishpili"
        label='In development'
      />
    </>
  );
};
export default CardList;
