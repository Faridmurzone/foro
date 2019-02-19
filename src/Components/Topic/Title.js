import React, { Component } from 'react';

class Title extends Component {
  render(){
    return(
      <div>
        <p className="card-title mb-0"><a href="#"><b>{this.props.title}</b></a></p>
      </div>
    )
  }
}

export default Title;


