/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App'
import { App1, App2, App3, App4, App5, App6 } from '../Farid_Unit';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

test('Test 1', () => {
  expect(App1(4, 5)).toBe(9);
});

test('Test 2', () => {
  expect(App2(10, 3)).toBe(7);
});

test('Test 3', () => {
  expect(App3(5, 4)).toBe(20);
});

test('Test 4', () => {
  expect(App4(20, 2)).toBe(10);
});

test('Test 5', () => {
  expect(App5(9, 3)).toBe(0);
});

test('Test 6', () => {
  expect(App6(4, 2, 3)).toBe(9);
});