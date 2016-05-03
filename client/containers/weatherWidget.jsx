import {compose} from 'react-komposer';
import WeatherWidgetComp from '/client/components/weatherWidget.jsx';

import {Meteor} from 'meteor/meteor';
import React from 'react';

const composerFxn = (props, onData) => {
	let changeLocation = (address) => {
		Meteor.call("geocode", address, (err, response) => {
			if (err) {return console.log(err);}

			let city = response[0].city || "Somewhere";

			let location = city + ", " + response[0].administrativeLevels.level1short;

			let coords = {lat: response[0].latitude, lng: response[0].longitude};

			Meteor.call("getWeather", coords, (err, response) => {
				if (err) {return console.log(err); }

				onData(null, {weather: response.data, location, changeLocation});
			});
		})
	}

	navigator.geolocation.getCurrentPosition((position) => {

		let coords = {lat: position.coords.latitude, lng: position.coords.longitude};

		Meteor.call("getCityAndState", coords, (err, response) => {
			if (err) {return console.log(err)}

			let location = response;

			Meteor.call("getWeather", coords, (err, response) => {
				if (err) {return console.log(err); }

				onData(null, {weather: response.data, location, changeLocation});
			});
		})
		
	});
}

const loadingFxn = () => (
	<div className="container text-center">
		<h3>Loading your local weather...</h3>
		<p>Please enable geolocation</p>
	</div>
);

export default WeatherWidget = compose(composerFxn, loadingFxn)(WeatherWidgetComp);