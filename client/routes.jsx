import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/layouts/mainLayout.jsx';

import WeatherWidget from '/client/containers/weatherWidget.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {content: <WeatherWidget />});
  }
});