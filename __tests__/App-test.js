/* eslint-disable prettier/prettier */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { App1, App2, App3, App4, App5 } from '../HelloWorld';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders correctly app 1', () => {
  renderer.create(<App1 />);
});

it('renders correctly app 2', () => {
  renderer.create(<App2 />);
});

it('renders correctly app 3', () => {
  renderer.create(<App3 />);
});

it('renders correctly app 4', () => {
  renderer.create(<App4 />);
});

it('renders correctly app 5', () => {
  renderer.create(<App5 />);
});


