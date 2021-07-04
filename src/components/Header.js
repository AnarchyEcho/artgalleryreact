import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory} from 'react-router-dom';
// eslint-disable-next-line
import Style from "../style.css"

const Header = () => {
    return (
      <div id="navbar">
        <Link to="/" id="title">Immy's Portfolio</Link>
        <Link to="/" id="home">Home </Link>
        <Link to="Portfolio" id="port">Portfolio </Link>
        <Link to="About" id="about">About </Link>
      </div>
    )
  }

  export default Header;