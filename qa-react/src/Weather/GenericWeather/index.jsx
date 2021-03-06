import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './GenericWeather.css';


function GenericWeather({ city, temp, status }) {
  const cls = cx('weather-icon', status);
  return (
    <div className="weather-card">
      <div className={cls} />
      <h1>{temp}</h1>
      <p>{city}</p>
    </div>
  );
}

GenericWeather.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.number,
  status: PropTypes.string,
};

GenericWeather.defaultProps = {
  city: 'Jerusalem',
  temp: '25º',
  status: 'sun',
};

export default GenericWeather;
