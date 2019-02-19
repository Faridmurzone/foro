import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Button extends Component {
  render() {
    return (
    <Link to="/forum/new">
    <button type="button" className="btn btn-outline-secondary btn-lg btn-block mt-2">New Discussion</button>    
    </Link>
    );
  }
}
export default Button;
