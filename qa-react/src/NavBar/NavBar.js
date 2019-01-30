import React from 'react';
import { slide as Menu } from "react-burger-menu";
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../Auth';
import "./styleBurger.css";
import SideBar from "./sideBar";

export var name = undefined;

function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };
    if (auth0Client.isAuthenticated())
        name = auth0Client.getProfile().name;
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        DashBoard
      </Link>
      
      {
        !auth0Client.isAuthenticated() &&
        <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
          <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
        </div>
      }
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
    </nav>
  );
}

export default withRouter(NavBar);