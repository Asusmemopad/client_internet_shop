import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
        <a href ="http://localhost:3000" className="navbar-brand">
            <img src="https://st4.depositphotos.com/5520014/20402/v/1600/depositphotos_204026100-stock-illustration-cake-with-candle-green-neon.jpg" width="40" height="40" alt="logo"/>

        </a>
      </nav>
    )
  }
}

export default Header;