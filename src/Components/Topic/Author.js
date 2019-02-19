import React, { Component } from 'react';

class Author extends Component {
  render(){
    return(
      <div>
       <p className="card-text"> <small className="white"><b>{this.props.author}</b> - {this.props.club}</small></p>
      </div>
    )
  }
}

export default Author;


