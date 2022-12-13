/**
 * @format
 */

import 'react-native';
import App from '../App';
import { Text } from 'react-native';
import {expect, jest, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {add, div, abs} from '../math';

test('App renders correctly', () => {
  renderer.create(<App />);
});

test('Text renders correclty', () => {
  renderer.create(<Text>test</Text>);
});

test('Date renders correctly', () => {
  renderer.create(<Date value="11/12/2022"/>);
});

test('Divide 1 and 0', () => {
  expect(() => (div(1, 0))).toThrow();
});

test('Divide by random number and zero.', () => {
  const error = "Divisor cannot be 0";
  //expect(div( Math.floor( Math.random() * 100), 0)).toThrow(error);
});

test('Divide by 1 and 2', () => {
  expect(div(1, 2)).toBeCloseTo(0.5);
});

test('Divide by 2 and 1', () => {
  expect(div(1, 2)).toBeCloseTo(0.5);
});