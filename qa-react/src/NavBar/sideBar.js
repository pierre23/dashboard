import React from "react";
import { slide as Menu } from "react-burger-menu";
import OpenWeatherMap from "../Weather/OpenWeatherMap/";
import { Timeline, Hashtag, Tweet } from 'react-twitter-widgets'
import TodoList from "../ToDoList/ToDoList";
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import Youtube from "../Youtube/Youtube"
import Clock from "../Clock/Clock"
import auth0Client from '../Auth'
var fs = require('fs');
//import nameU from './NavBar'

export default props => {
    var widget = [];

    return (
        <Menu {...props}>
            <a className="menu-item " onClick={() => {
                var r = window.prompt("Weather Town");
                widget.push(<OpenWeatherMap key={widget.length.toString()} city={r} country="FR" appid="cc8c106fc13e52c195b36764e4dd2aed" />);
                ReactDOM.render(<ul>{widget}</ul>, document.getElementById("WidgetContent"));
            }} href="#!">
                Weather
      </a>

            <a className="menu-item" onClick={() => {
                var r = window.prompt("News page");
                widget.push(<Timeline key={widget.length.toString()}
                    dataSource={{
                        sourceType: 'profile',
                        screenName: r
                    }}
                    options={{
                        username: 'Kabiche03',
                        height: '400',
                    }}
                    onLoad={() => console.log('Timeline is loaded!')}
                />);
                ReactDOM.render(<ul>{widget}</ul>, document.getElementById("WidgetContent"));
            }} href="#!">
                Tweetter - news
      </a>

            <a className="menu-item" onClick={() => {
                var r = window.prompt("hashtash");
                widget.push(<Hashtag hashtag={r} key={widget.length.toString()} />);
                ReactDOM.render(<ul>{widget}</ul>, document.getElementById("WidgetContent"));
            }} href="#!">
                Tweetter - hashtag publisher
      </a>

            <a className="menu-item" onClick={() => {
                var r = window.prompt("tweet id");
                widget.push(<Tweet
                    tweetId={r}
                    option={{ theme: "dark" }} key={widget.length.toString()} />);
                ReactDOM.render(<ul>{widget}</ul>, document.getElementById("WidgetContent"));
            }} href="#!">
                twitter - open Twitter
      </a>
            <a className="menu-item" onClick={() => {
                var state = {
                    date: new Date(),
                }
                var onChange = date => this.setState({ date })
                widget.push(<Calendar
                    onChange={onChange}
                    value={state.date}
                    calendarType="ISO 8601"
                />);
                ReactDOM.render(<ul>{widget}</ul>, document.getElementById("WidgetContent"));
            }} href="#!">
                calendar
      </a>
            <a className="menu-item" onClick={() => {
                widget.push(<Youtube />);
                ReactDOM.render(<ul>{widget}</ul>, document.getElementById("WidgetContent"));
            }} href="#!">
                Youtube
      </a>
            <a className="menu-item" onClick={() => {
                widget.push(<Clock />);
                ReactDOM.render(<ul>{widget}</ul>, document.getElementById("WidgetContent"));
            }} href="#!">
                Clock
      </a>
            <a className="menu-item" onClick={() => {
                widget.push(<TodoList key={widget.length.toString()} />);
                ReactDOM.render(<ul>{widget}</ul>, document.getElementById("WidgetContent"));
            }} href="#!">
                Todo list
      </a>

        </Menu>
    );
};