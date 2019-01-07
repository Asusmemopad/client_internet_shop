import React, { Component } from 'react'
import CreateGoodsButton from './Goods/CreateGoodsButton';

class Dashboard extends Component {
  render() {
    return(
      <div>
        <h1 className="alert alert-warning"> Welcome to the internet shop! </h1>
        <CreateGoodsButton/>
      </div>
      ); 
  }
}

export default Dashboard;