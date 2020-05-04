import React from 'react';
import Dropdown from 'react-dropdown';

export default class CategoryDropDownComponent extends React.Component{
  handleGenreSelection = event => {
    const selectedGenre = event.value;
    this.props.handleFilter(selectedGenre, 'genre');
  };

  render(){
    const options = this.props.options;
    const defaultOption = "Filter Movies By Category";
    return(
      <div>
        <Dropdown options={options} onChange={this.handleGenreSelection.bind(this)} value={defaultOption} placeholder="Select an option" />
      </div>
      );
  }};
