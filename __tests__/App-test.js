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

var num1, num2, num3, randMax, randNum;

beforeAll(() => {
  num1 = 0;
  num2 = 1;
  num3 = 2;
  randMax = 10;
  randNum = Math.floor( Math.random() * randMax);
});

afterAll(() => {
  num1 = null;
  num2 = null;
  num3 = null;
  randMax = null;
  randNum = null;
})

/**
 * @author Matthew Meyer
 */
test('App renders correctly', () => {
  renderer.create(<App />);
});

/**
 * @author Matthew Meyer
 */
test('Text renders correclty', () => {
  renderer.create(<Text>test</Text>);
});

/**
 * @author Matthew Meyer
 */
test('Date renders correctly', () => {
  renderer.create(<Date value="11/12/2022"/>);
});

/**
 * @author Matthew Meyer
 */
test ('Add 1 and 2', ()=>{
  expect(add(num2, num3)).toEqual(3);
});

/**
 * @author Matthew Meyer
 */
test ('Add 2 and 1', ()=>{
  expect(add(num3, num2)).toEqual(3);
});

/**
 * @author Matthew Meyer
 */
test ('Add 0 and 1', () => {
  expect(add(num1, num2)).toEqual(num2);
});

/**
 * @author Matthew Meyer
 */
test ('Add 0 and a random number', () => {
  expect(add(num1, randNum)).toEqual(randNum);
});

/**
 * @author Matthew Meyer
 */
test('Divide 1 and 0', () => {
  expect(() => (div(num2, num1))).toThrow();
});

/**
 * @author Matthew Meyer
 */
test('Divide by random number and zero.', () => {
  const error = "Divisor cannot be 0";
  expect(() => div( randNum, num1)).toThrow(error);
});

/**
 * @author Matthew Meyer
 */
test('Divide by 1 and 2', () => {
  expected = 0.5;
  expect(div(1, 2)).toBeCloseTo(expected);
});

/**
 * @author Matthew Meyer
 */
test('Divide by 2 and 1', () => {
  expect(div(1, 2)).toBeCloseTo(0.5);
});

/**
 * @author Matthew Meyer
 */
test('Absoulte value of 1', () => {
  expect(abs(num2)).toEqual(num2);
});

/**
 * @author Matthew Meyer
 */
test('Absoulte value of 0', () => {
  expect(abs(num1)).toEqual(num1);
});

/**
 * @author Matthew Meyer
 */
test('Absoulte value of -1', () => {
  expect(abs(-1)).toEqual(num2);
});