import React from 'react';
import moment from 'moment';

export default WeatherWidget = React.createClass({
	getInitialState() {
		return {selected: "current"}
	},
	changeState(selected) {
		return this.setState({selected});
	},
	changeLocation() {
		let address = $("#locationInput").val();

		if (address) {
			$("#locationModal").modal('hide');

			$("#locationInput").val("");

			this.props.changeLocation(address);
		}
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
			<div className="text-center">
				<div className="row">
					<div className="col-xs-12">
						<h4 className="weatherWidget--location">{"Weather for " + this.props.location}</h4>
					</div>
				</div>
				{renderContent()}
				<div className="modal fade" id="locationModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								<h4 className="modal-title" id="myModalLabel">Change Location</h4>
							</div>
							<div className="modal-body">
								<div className="form-group">
									<label for="locationInput">Address</label>
									<input type="email" className="form-control" id="locationInput" placeholder="type an address here" />
								</div>
							</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
									<button type="button" className="btn btn-primary" onClick={this.changeLocation} >Change Location</button>
								</div>
							</div>
						</div>
					</div>
				</div>
		)
	},
	renderCurrent() {
		// current weather
		let weather = this.props.weather;

		return (
			<div>
				<div className="row weatherWidget--buttonGroup">
					<div className="col-xs-4">
						<button onClick={this.changeState.bind(null, "fiveDay")} className="weatherWidget--button btn btn-primary">Five Day</button>
					</div>
					<div className="col-xs-4">
						<button type="button" className="weatherWidget--button btn btn-primary" data-toggle="modal" data-target="#locationModal">Change Location</button>
					</div>
					<div className="col-xs-4">
						<button onClick={this.changeState.bind(null, "sevenDay")} className="weatherWidget--button btn btn-primary">Seven Day</button>
					</div>
				</div>
				{this.renderBlock("currently", "actual", weather.currently.temperature, "feels", weather.currently.apparentTemperature, weather.currently.icon)}
				{this.renderBlock("next hour", "actual", weather.hourly.data[1].temperature, "feels", weather.hourly.data[1].apparentTemperature, weather.hourly.data[1].icon)}
				{this.renderBlock("tomorrow", "min", weather.daily.data[1].temperatureMin, "max", weather.daily.data[1].temperatureMax, weather.daily.data[1].icon)}
			</div>
		)
	},
	renderFiveDay() {
		// five day forecast
		let weather = this.props.weather;

		return (
			<div>
				<div className="row weatherWidget--buttonGroup">
					<div className="col-xs-4">
						<button onClick={this.changeState.bind(null, "current")} className="weatherWidget--button btn btn-primary">Current</button>
					</div>
					<div className="col-xs-4">
						<button type="button" className="weatherWidget--button btn btn-primary" data-toggle="modal" data-target="#locationModal">Change Location</button>
					</div>
					<div className="col-xs-4">
						<button onClick={this.changeState.bind(null, "sevenDay")} className="weatherWidget--button btn btn-primary">Seven Day</button>
					</div>
				</div>
				{this.renderBlock(moment(weather.daily.data[0].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[0].temperatureMin, "max", weather.daily.data[0].temperatureMax, weather.daily.data[0].icon)}
				{this.renderBlock(moment(weather.daily.data[1].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[1].temperatureMin, "max", weather.daily.data[1].temperatureMax, weather.daily.data[1].icon)}
				{this.renderBlock(moment(weather.daily.data[2].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[2].temperatureMin, "max", weather.daily.data[2].temperatureMax, weather.daily.data[2].icon)}
				{this.renderBlock(moment(weather.daily.data[3].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[3].temperatureMin, "max", weather.daily.data[3].temperatureMax, weather.daily.data[3].icon)}
				{this.renderBlock(moment(weather.daily.data[4].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[4].temperatureMin, "max", weather.daily.data[4].temperatureMax, weather.daily.data[4].icon)}
			</div>
		)
	},
	renderSevenDay() {
		// seven day forecast
		let weather = this.props.weather;

		return (
			<div>
				<div className="row weatherWidget--buttonGroup">
					<div className="col-xs-4">
						<button onClick={this.changeState.bind(null, "current")} className="weatherWidget--button btn btn-primary">Current</button>
					</div>
					<div className="col-xs-4">
						<button type="button" className="weatherWidget--button btn btn-primary" data-toggle="modal" data-target="#locationModal">Change Location</button>
					</div>
					<div className="col-xs-4">
						<button onClick={this.changeState.bind(null, "fiveDay")} className="weatherWidget--button btn btn-primary">Five Day</button>
					</div>
				</div>
				{this.renderBlock(moment(weather.daily.data[0].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[0].temperatureMin, "max", weather.daily.data[0].temperatureMax, weather.daily.data[0].icon)}
				{this.renderBlock(moment(weather.daily.data[1].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[1].temperatureMin, "max", weather.daily.data[1].temperatureMax, weather.daily.data[1].icon)}
				{this.renderBlock(moment(weather.daily.data[2].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[2].temperatureMin, "max", weather.daily.data[2].temperatureMax, weather.daily.data[2].icon)}
				{this.renderBlock(moment(weather.daily.data[3].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[3].temperatureMin, "max", weather.daily.data[3].temperatureMax, weather.daily.data[3].icon)}
				{this.renderBlock(moment(weather.daily.data[4].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[4].temperatureMin, "max", weather.daily.data[4].temperatureMax, weather.daily.data[4].icon)}
				{this.renderBlock(moment(weather.daily.data[5].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[5].temperatureMin, "max", weather.daily.data[5].temperatureMax, weather.daily.data[5].icon)}
				{this.renderBlock(moment(weather.daily.data[6].time.toString(), "X").format("ddd MMM Do"), "min", weather.daily.data[6].temperatureMin, "max", weather.daily.data[6].temperatureMax, weather.daily.data[6].icon)}
			</div>
		)
	},
	renderBlock(mainHeader, header1, temp1, header2, temp2, icon) {	
		// renders a single block, to represent a single data point
		return (
			<div className="weatherWidget--block">
				<h4 className="weatherWidget--category">{mainHeader}</h4>
				<div className="row">
					<div className="col-xs-4">
						<div className="weatherWidget--subheader">{header1}</div>
						<div className="weatherWidget--temperature">{temp1.toPrecision(2)}&deg;</div>
					</div>
					<div className="col-xs-4">
						<div className="weatherWidget--subheader">{header2}</div>
						<div className="weatherWidget--temperature">{temp2.toPrecision(2)}&deg;</div>
					</div>
					<div className="col-xs-4">
						<div className="weatherWidget--subheader">icon {/*placeholder*/}</div>
						<div className="weatherWidget--icon">{icon}</div>
					</div>
				</div>
			</div>
		)
	},
});