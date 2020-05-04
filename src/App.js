import CategoryDropDownComponent from './CategoryDropDownComponent';
import DayOfWeekDropDownComponent from './DayOfWeekDropDownComponent';
import SearchBoxComponent from './SearchBoxComponent';
import MovieComponent from './MovieComponent';

import React from 'react';
import './App.css';
const axios = require('axios');

/*
//This is the main component, and it handles the get requests as well as
//handleFilterComponent, a function that manages the searchBox, DayDropdown , and CategoryDropdown
//component filters.
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.axios = axios.create({
      baseURL: 'http://localhost:8000',
      headers: {'content-type': 'application/json'}
    });;
    this.state = {movies: [], allMovies: [], genre: [], filters: [{key: 'genre', value:''}, {key: 'title', value:''}, {key: 'showtimes', value:''}, ] };
  }
  /*
  //This method automatically executes after the constructor, successfully retrieving
  //the objects in the database
  */
  componentDidMount() {
    const allMoviesPromise = this.getData('/movies/');
    allMoviesPromise.then(data => {
      this.setState({ movies: data, allMovies: data });
    })
    const allGenresPromise = this.getData('/genres/');
    allGenresPromise.then(data => {
      this.setState({ genre : data });
    })
  }

  getData(url){
    return this.axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  /*
  //I wanted to manage my filters so that I could use them together, so that a filter wouldnt clear
  //once you clicked on another filter, I wanted them to be additive, that's why there's so much logic
  //in this section.
  */
  handleFilter(value, key){
    let filteredData = this.state.allMovies;
    /*
    //In this section, we iterate through each filter (genre, title, showtimes) and check if the key that
    //we're recieving now is one of them, if it is, then it replaces the associated comparison values,
    //in the else, it upholds the old filters that are associated with that object.
    */
    for (var filter of this.state.filters) {
      let compareValue;
      let compareKey;
      //if the 'key' of the filter matches the input's key, we want to override the old value with the new filter.
      if (filter.key===key) {
        compareValue = value.toLowerCase();
        compareKey = key;
      } else {
        //if it's not the same type of key, we want to maintain our old filter.
        compareValue = filter.value.toLowerCase();
        compareKey = filter.key;
      }
      /*
      //Filter accordingly.
      */
      if(compareKey === "showtimes"){
        filteredData = filteredData.filter(movie => {
          if(compareValue === ""){
            return true;
          } else {return capitalizeFirstLetter(compareValue) in JSON.parse(JSON.parse(movie[compareKey]).replace(/'/g, '"'));}
          })
      } if (compareKey === "title" || compareKey === "genre"){
        filteredData = filteredData.filter(movie => {
          return movie[compareKey].toLowerCase().includes(compareValue);
      })
  };
    }

    this.setState({
      movies : filteredData,
      filters: this.state.filters.map(el => (el.key === key ? {...el, value} : el))
    })};

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <SearchBoxComponent handleFilter = {this.handleFilter.bind(this)}/>
        <CategoryDropDownComponent options = {this.state.genre} handleFilter = {this.handleFilter.bind(this)}/>
        <DayOfWeekDropDownComponent handleFilter = {this.handleFilter.bind(this)} />
        <MovieComponent movies = {this.state.movies}/>
        </div>
      </header>
    </div>
  );
};
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default App;
