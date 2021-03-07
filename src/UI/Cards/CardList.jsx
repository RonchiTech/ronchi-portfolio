import React from 'react';
import { projects } from '../../projects';
import Card from './Card';
import classes from './CardList.module.css';



const CardList = () => {
  console.log(projects);
  return (
    <div className={classes.CardList}>
      {projects.map((prj) => {
        return (
          <Card
            src={prj.src}
            title={prj.title}
            description={prj.description}
            site={prj.site}
            github={prj.github}
            label={prj.label}
          />
        );
      })}
      {/* <Card
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
        site="https://movie-search-app-1078b.web.app/"
        github="https://github.com/RonchiTech/movie-search-app"
      />
      <Card
        src={CovidLogo}
        title="Covid-19 Track App"
        description="Gives you the latest total report and can search by Country"
        site="https://covid19-track-app.web.app/"
        github="https://github.com/RonchiTech/Covid19-track-app"
      />
      <Card
        src={WeatherLogo}
        title="Weather App"
        description="Web App not mine but I added background and Responsive Design"
        github="https://github.com/RonchiTech/weather-tutorial/tree/UIBranch"
        label="Fork on Github"
      />
      <Card
        src={FishLogo}
        title="Fish Pili"
        description="An online fish selling/buying app"
        github="https://github.com/RonchiTech/fishpili"
        label="In development"
      /> */}
    </div>
  );
};
export default CardList;
