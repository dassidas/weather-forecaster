import {Meteor} from 'meteor/meteor';

Meteor.methods({
	getWeather (coords) {
		console.log(coords);
		let formattedPosition = coords.lat + "," + coords.lng;

		let url = "https://api.forecast.io/forecast/47dd4c596abbfb16bc6bd4be0ed3c661/" + formattedPosition;

		return Meteor.http.call("GET", url);
	},
	getCityAndState (coords) {
		let geo = new GeoCoder();

		let location = geo.reverse(coords.lat, coords.lng);

		let formattedLocation = location[0].city + ", " + location[0].administrativeLevels.level1short;

		return formattedLocation;
	},
	geocode (address) {
		let geo = new GeoCoder();

		console.log(geo.geocode(address));
	}
});