import {Meteor} from 'meteor/meteor';

Meteor.methods({
	getWeather (formattedPosition) {
		// position format: lat,long
		let url = "https://api.forecast.io/forecast/47dd4c596abbfb16bc6bd4be0ed3c661/" + formattedPosition;

		return Meteor.http.call("GET", url);
	}
});