import React, { Component } from 'react';

import Button from '../../Components/Button';
import TopicContainer from '../Topic/TopicContainer';

class ForumBox extends Component {
render() {
  return (
  <div className="row">
    <div className="col-md-9">
      <TopicContainer></TopicContainer>
    </div>
    <div className="col-md-3">
      <Button>Publicar</Button>
    </div>
  </div>
    );
  }
}


export default ForumBox;