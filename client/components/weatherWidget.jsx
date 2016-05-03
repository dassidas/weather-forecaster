import React from 'react';

export default WeatherWidget = React.createClass({
	render() {
		let weather = this.props.weather;
		console.log(weather);

		return (
			<div className="col-xs-12 text-center">
				<h4 className="weatherWidget--location">{"Latitude " + weather.latitude.toPrecision(4) + ", Longitude " + weather.longitude.toPrecision(4)}</h4>
				<hr />
				{this.renderBlock("currently", "actual", weather.currently.temperature, "feels", weather.currently.apparentTemperature, weather.currently.icon)}
				<hr />
				{this.renderBlock("next hour", "actual", weather.hourly.data[1].temperature, "feels", weather.hourly.data[1].apparentTemperature, weather.hourly.data[1].icon)}
				<hr />
				{this.renderBlock("tomorrow", "min", weather.daily.data[1].temperatureMin, "max", weather.daily.data[1].temperatureMax, weather.daily.data[1].icon)}
				<div className="row">
					<button className="weatherWidget--button col-xs-6 btn btn-primary">Five Day</button>
					<button className="weatherWidget--button col-xs-6 btn btn-primary">Seven Day</button>
				</div>
			</div>
		)
	},
	renderBlock(mainHeader, header1, temp1, header2, temp2, icon) {
		return (
			<div>
				<h4 className="weatherWidget--category">{mainHeader}</h4>
				<div className="row">
					<div className="col-xs-4">
						<div className="weatherWidget--subheader">actual</div>
						<div className="weatherWidget--temperature">{temp1.toPrecision(2)}</div>
					</div>
					<div className="col-xs-4">
						<div className="weatherWidget--subheader">feels</div>
						<div className="weatherWidget--temperature">{temp2.toPrecision(2)}</div>
					</div>
					<div className="col-xs-4">
						<div className="weatherWidget--subheader">icon {/*placeholder*/}</div>
						<div className="weatherWidget--icon">{icon}</div>
					</div>
				</div>
			</div>
		)
	}
});