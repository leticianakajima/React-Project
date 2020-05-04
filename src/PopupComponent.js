import ShowtimeTableComponent from './ShowtimeTableComponent';

import React from 'react';
import Popup from "reactjs-popup";


export default class PopupComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.description = "";
    this.showtimes = "";
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  render(){
    return(
      <div>
        <button className="see details button" onClick={this.openModal}><h2>see details!</h2></button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}>
          <div className="popup">
            <button className="close button" onClick={this.closeModal}>x</button>
            <div>{this.props.description}</div>
            <ShowtimeTableComponent showtimes = {this.props.showtimes} />
          </div>
        </Popup>
      </div>
  )
}

}
