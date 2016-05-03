import {compose} from 'react-komposer';
import WeatherWidgetComp from '/client/components/weatherWidget.jsx';

const composerFxn = (props, onData) => {
	onData(null, {});
}

export default WeatherWidget = compose(composerFxn)(WeatherWidgetComp);