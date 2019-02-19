import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
      </div>
      );
  }
}

export default NotFound;
