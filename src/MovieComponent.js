import PopupComponent from './PopupComponent';

import React from 'react';

export default class MovieComponent extends React.Component {
  render(){
    return (
    <ul>
    {this.props.movies.map((movie, index) => {
      var days_showtimes = getWeekDayShowtimes(JSON.parse(JSON.parse(movie.showtimes).replace(/'/g, '"')));
      return (
        <div key={index}>
        <span><h1>{movie.title}</h1></span>
        <span>{days_showtimes}</span>
        <PopupComponent description = {movie.description} showtimes = {JSON.parse(JSON.parse(movie.showtimes).replace(/'/g, '"'))} />
        </div>
      )
    })}
    </ul>)
  }
}

MovieComponent.defaultProps = {title: 'This title is unavailable', showtimes : 'These showtimes are unavailable'}

function getWeekDayShowtimes(all_showtimes){
  var weekday = new Date().getDay();
  switch(weekday){
  case 0:
    return all_showtimes.Sunday? all_showtimes.Sunday: "No showtimes today";
  case 1:
    return all_showtimes.Monday? all_showtimes.Monday: "No showtimes today";
  case 2:
    return all_showtimes.Tuesday? all_showtimes.Tuesday: "No showtimes today";
  case 3:
    return all_showtimes.Wednsday? all_showtimes.Wednsday: "No showtimes today";
  case 4:
    return all_showtimes.Thursday? all_showtimes.Thursday: "No showtimes today";
  case 5:
    return all_showtimes.Friday? all_showtimes.Friday: "No showtimes today";
  case 6:
    return all_showtimes.Saturday? all_showtimes.Saturday: "No showtimes today";
  default:
    console.log("Weekday is not valid");
    break;
}
}
