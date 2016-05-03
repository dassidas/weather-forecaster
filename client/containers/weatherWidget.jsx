import {compose} from 'react-komposer';
import WeatherWidgetComp from '/client/components/weatherWidget.jsx';

import {Meteor} from 'meteor/meteor';
import React from 'react';

const composerFxn = (props, onData) => {
	navigator.geolocation.getCurrentPosition((position) => {
		console.log(position.coords.latitude, position.coords.longitude);

		let formattedPosition = position.coords.latitude + "," + position.coords.longitude;

		Meteor.call("getWeather", formattedPosition, (err, response) => {
			if (err) {return console.log(err); }

			onData(null, {weather: response.data});
		});
	});
}

const loadingFxn = () => (
	<div className="container">
		<div className="row">
		<h3 className="col-xs-6 col-xs-offset-3 text-center">Loading your weather now!</h3>
		</div>
	</div>
);

export default WeatherWidget = compose(composerFxn, loadingFxn)(WeatherWidgetComp);