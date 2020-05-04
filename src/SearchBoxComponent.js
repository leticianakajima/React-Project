import React from 'react';

export default class SearchBoxComponent extends React.Component{
  handleInputChange = event => {
    const query = event.target.value;
    this.props.handleFilter(query, 'title');
  };

  render() {
    return (
    <div className="searchForm">
      <form>
        <input
          placeholder="Search Movies ..."
          onChange={this.handleInputChange}
        />
      </form>
    </div>
    );
  }
}
