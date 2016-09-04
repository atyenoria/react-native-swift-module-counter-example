'use strict';

import React, { AppRegistry } from 'react-native';
import App from './app/containers/app';

console.dir(React.NativeModules.CalendarManager);

React.NativeModules.CalendarManager.addEvent("One", "Two", 3, function(o) {
    console.log('In Callback');
    console.dir(o);
});

AppRegistry.registerComponent('Counter', () => App);
