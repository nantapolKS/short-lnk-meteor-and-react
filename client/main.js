import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';

import {routes, onAthChange} from "../imports/routes/routes";
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAthChange(isAuthenticated);
});

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'))
});