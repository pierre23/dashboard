import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Callback from './Callback';
import {Route, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import OpenWeatherMap from './Weather/OpenWeatherMap/';
import { Timeline, Hashtag, Tweet } from 'react-twitter-widgets'
import TodoList from "./ToDoList/ToDoList";

var navSelect =  require('./NavBar/sideBar.js');
// import Calendar from 'react-calendar';
// import Youtube from "./Youtube/Youtube"
// import Clock from "./Clock/Clock"

class App extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === 'login_required') return;
      console.log(err.error);
    }
  }
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/callback' component={Callback} />
        <div id="WidgetContent"></div>
        {/* <OpenWeatherMap city="Paris" country="FR" appid="cc8c106fc13e52c195b36764e4dd2aed"/>, */}
        
        {/* <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'Epitech'
        }}
        options={{
          username: 'Kabiche03',
          height: '400',
        }}
        onLoad={() => console.log('Timeline is loaded!')}
        />,
        <TodoList/>
        <Hashtag
          hashtag="MardiConseil"
        />
        <Tweet
        tweetId="970703638921433088"
        option={{theme:"dark"}}
        /> */}
      </div>
    );
    }
  // destination
}

export default withRouter(App);