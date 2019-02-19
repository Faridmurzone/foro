import React from 'react';
import ForumBox from '../Components/Dashboard/ForumBox';
import ForumHeader from '../Components/ForumHeader/ForumHeader';

class Dashboard extends React.Component {
  render(){
    return(
      <div className="container-fluid">
      <ForumHeader />
      <ForumBox></ForumBox>
      </div>
    )
  }
}

export default Dashboard;