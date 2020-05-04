import React from 'react';

export default class ShowtimeTableComponent extends React.Component {
  render(){
    return(
  <table>
  <thead>
    <tr>
      <th>Day</th>
      <th>Showtimes</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>Monday</td>
    <td>{this.props.showtimes.Monday? this.props.showtimes.Monday : "no showtimes today"}</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>{this.props.showtimes.Tuesday? this.props.showtimes.Tuesday : "no showtimes today"}</td>
  </tr>
  <tr>
    <td>Wednsday</td>
    <td>{this.props.showtimes.Wednsday? this.props.showtimes.Wednsday : "no showtimes today"}</td>
  </tr>
  <tr>
    <td>Thursday</td>
    <td>{this.props.showtimes.Thursday? this.props.showtimes.Thursday : "no showtimes today"}</td>
  </tr>
  <tr>
    <td>Friday</td>
    <td>{this.props.showtimes.Friday? this.props.showtimes.Friday : "no showtimes today"}</td>
  </tr>
  <tr>
    <td>Saturday</td>
    <td>{this.props.showtimes.Saturday? this.props.showtimes.Saturday : "no showtimes today"}</td>
  </tr>
  <tr>
    <td>Sunday</td>
    <td>{this.props.showtimes.Sunday? this.props.showtimes.Tuesday : "no showtimes today"}</td>
  </tr>
  </tbody>
  </table>

    );
  }
}
