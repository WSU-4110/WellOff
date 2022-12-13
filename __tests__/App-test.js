/**
 * @format
 */

import 'react-native';
import App from '../App';
import { Text } from 'react-native';
import {expect, jest, test, beforeAll} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {add, div, abs} from '../math';

var num1, num2, num3, randMax;

beforeAll(() => {
  num1 = 0;
  num2 = 1;
  num3 = 2;
  randMax = 10;
});

afterAll(() => {
  num1 = null;
  num2 = null;
  num3 = null;
  randMax = null;
})

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
  expect(() => (div(num2, num1))).toThrow();
});

test('Divide by random number and zero.', () => {
  const error = "Divisor cannot be 0";
  expect(() => div( Math.floor( Math.random() * randMax), num1)).toThrow(error);
});

test('Divide by 1 and 2', () => {
  expected = 0.5;
  expect(div(1, 2)).toBeCloseTo(expected);
});

test('Divide by 2 and 1', () => {
  expect(div(1, 2)).toBeCloseTo(0.5);
});

test('Absoulte value of 1', () => {
  expect(abs(num2)).toEqual(num2);
});

test('Absoulte value of 0', () => {
  expect(abs(num1)).toEqual(num1);
});

test('Absoulte value of -1', () => {
  expect(abs(-1)).toEqual(num2);
});