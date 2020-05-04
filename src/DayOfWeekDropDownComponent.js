import React from 'react';
import Dropdown from 'react-dropdown';

export default class DayOfWeekDropDownComponent extends React.Component{
  handleDateSelection = event => {
    const selectedDate = event.value;
    this.props.handleFilter(selectedDate, "showtimes");
  };

  render(){
    const options = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"];
    const defaultOption = "Filter Movies By Day";
    return(
      <div>
        <Dropdown options={options} onChange={this.handleDateSelection.bind(this)} value={defaultOption} placeholder="Select an option" />
      </div>
      );
  }
};
