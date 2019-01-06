import React, { Component } from 'react'
import GoodsItem from './Goods/GoodsItem';

class Dashboard extends Component {
  render() {
    return(
      <div>
        <h1> Welcome to the internet shop! </h1>
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
      </div>
      ); 
  }
}

export default Dashboard;