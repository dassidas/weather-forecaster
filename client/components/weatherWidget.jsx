import React from 'react';
import moment from 'moment';

export default WeatherWidget = React.createClass({
	getInitialState() {
		return {selected: "current"}
	},
	changeState(selected) {
		return this.setState({selected});
	},
	render() {
		renderContent = () => {
			switch (this.state.selected) {
				case "current":
					return this.renderCurrent();
					break;
				case "fiveDay":
					return this.renderFiveDay();
					break;
				case "sevenDay":
					return this.renderSevenDay();
					break;
			}
		}

		return (
			<div className="col-xs-12 text-center">
				<h4 className="weatherWidget--location">{"Latitude " + this.props.weather.latitude.toPrecision(4) + ", Longitude " + this.props.weather.longitude.toPrecision(4)}</h4>
				<hr />
				{renderContent()}
			</div>
		)
	},
	renderBlock(mainHeader, header1, temp1, header2, temp2, icon) {
		return (
			<div>
				<h4 className="weatherWidget--category">{mainHeader}</h4>
				<div className="row">
					<div className="col-xs-4">
						<div className="weatherWidget--subheader">{header1}</div>
						<div className="weatherWidget--temperature">{temp1.toPrecision(2)}</div>
					</div>
					<div className="col-xs-4">
						<div className="weatherWidget--subheader">{header2}</div>
						<div className="weatherWidget--temperature">{temp2.toPrecision(2)}</div>
					</div>
					<div className="col-xs-4">
						<div className="weatherWidget--subheader">icon {/*placeholder*/}</div>
						<div className="weatherWidget--icon">{icon}</div>
					</div>
				</div>
			</div>
		)
	},
	renderCurrent() {
		let weather = this.props.weather;

		return (
			<div>
				{this.renderBlock("currently", "actual", weather.currently.temperature, "feels", weather.currently.apparentTemperature, weather.currently.icon)}
				<hr />
				{this.renderBlock("next hour", "actual", weather.hourly.data[1].temperature, "feels", weather.hourly.data[1].apparentTemperature, weather.hourly.data[1].icon)}
				<hr />
				{this.renderBlock("tomorrow", "min", weather.daily.data[1].temperatureMin, "max", weather.daily.data[1].temperatureMax, weather.daily.data[1].icon)}
				<div className="row">
					<button onClick={this.changeState.bind(null, "fiveDay")} className="weatherWidget--button col-xs-6 btn btn-primary">Five Day</button>
					<button onClick={this.changeState.bind(null, "sevenDay")} className="weatherWidget--button col-xs-6 btn btn-primary">Seven Day</button>
				</div>
			</div>
		)
	},
	renderFiveDay() {
		let weather = this.props.weather;

		return (
			<div>
				{this.renderBlock(moment(weather.daily.data[0].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[0].temperatureMin, "max", weather.daily.data[0].temperatureMax, weather.daily.data[0].icon)}
				{this.renderBlock(moment(weather.daily.data[1].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[1].temperatureMin, "max", weather.daily.data[1].temperatureMax, weather.daily.data[1].icon)}
				{this.renderBlock(moment(weather.daily.data[2].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[2].temperatureMin, "max", weather.daily.data[2].temperatureMax, weather.daily.data[2].icon)}
				{this.renderBlock(moment(weather.daily.data[3].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[3].temperatureMin, "max", weather.daily.data[3].temperatureMax, weather.daily.data[3].icon)}
				{this.renderBlock(moment(weather.daily.data[4].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[4].temperatureMin, "max", weather.daily.data[4].temperatureMax, weather.daily.data[4].icon)}
				<div className="row">
					<button onClick={this.changeState.bind(null, "current")} className="weatherWidget--button col-xs-6 btn btn-primary">Current</button>
					<button onClick={this.changeState.bind(null, "sevenDay")} className="weatherWidget--button col-xs-6 btn btn-primary">Seven Day</button>
				</div>
			</div>
		)
	},
	renderSevenDay() {
		let weather = this.props.weather;

		return (
			<div>
				{this.renderBlock(moment(weather.daily.data[0].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[0].temperatureMin, "max", weather.daily.data[0].temperatureMax, weather.daily.data[0].icon)}
				{this.renderBlock(moment(weather.daily.data[1].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[1].temperatureMin, "max", weather.daily.data[1].temperatureMax, weather.daily.data[1].icon)}
				{this.renderBlock(moment(weather.daily.data[2].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[2].temperatureMin, "max", weather.daily.data[2].temperatureMax, weather.daily.data[2].icon)}
				{this.renderBlock(moment(weather.daily.data[3].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[3].temperatureMin, "max", weather.daily.data[3].temperatureMax, weather.daily.data[3].icon)}
				{this.renderBlock(moment(weather.daily.data[4].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[4].temperatureMin, "max", weather.daily.data[4].temperatureMax, weather.daily.data[4].icon)}
				{this.renderBlock(moment(weather.daily.data[5].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[5].temperatureMin, "max", weather.daily.data[5].temperatureMax, weather.daily.data[5].icon)}
				{this.renderBlock(moment(weather.daily.data[6].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[6].temperatureMin, "max", weather.daily.data[6].temperatureMax, weather.daily.data[6].icon)}
				
				<div className="row">
					<button onClick={this.changeState.bind(null, "current")} className="weatherWidget--button col-xs-6 btn btn-primary">Current</button>
					<button onClick={this.changeState.bind(null, "fiveDay")} className="weatherWidget--button col-xs-6 btn btn-primary">Five Day</button>
				</div>
			</div>
		)
	}
});