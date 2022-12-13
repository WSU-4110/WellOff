/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { A1, A2, A3, A4, A5, A6 } from '../Farid_Unit';
import {__getCompletedIcon, __getDescriptionStyle, clickEventListener, onClickListener, __renderColors, __renderImages,} from '../TestCasses';
import { Text } from 'react-native';
import {expect, jest, test, beforeAll} from '@jest/globals';
import {add, div, abs} from '../math';
import { App1, App2, App3, App4, App5 } from '../HelloWorld';
import { Test1, Test2, Test3, Test4, Test5, Test6 } from '../Raja_UnitTesting';





// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

//Farid Baalbaki's Tests
it('renders correctly', () => {
  renderer.create(<App />);
});

test('Test 1', () => {
  expect(A1(4, 5)).toBe(9);
});

test('Test 2', () => {
  expect(A2(10, 3)).toBe(7);
});

test('Test 3', () => {
  expect(A3(5, 4)).toBe(20);
});

test('Test 4', () => {
  expect(A4(20, 2)).toBe(10);
});

test('Test 5', () => {
  expect(A5(9, 3)).toBe(0);
});

test('Test 6', () => {
  expect(A6(4, 2, 3)).toBe(9);
});


//Rifat's Tests
test('get icons', () => {
  const icon = 'https://img.icons8.com/flat_round/64/000000/delete-sign.png';
  expect(__getCompletedIcon(2)).toEqual(icon);
});

test('geting styles', () => {
  const style = {
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
    color: '#808080',
  };
  expect(__getDescriptionStyle(1)).toEqual(style);
});

test('click EventListner', () => {
  expect(clickEventListener()).toBeUndefined();
});

test('render colors', () => {
  const tree = __renderColors();
  expect(tree).toMatchSnapshot();
});

test('render Images', () => {
  const tree = __renderColors();
  expect(tree).toMatchSnapshot();
});

test('Button pressed', () => {
  expect(onClickListener()).toBeUndefined();
});



//Matt's tests
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


//Reeham's test code

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

//Raja's Code
it('Practice Test', () => {
  renderer.create(<App />);
});

test('Test 1', () => {
  expect(Test1(1, 2)).toBe(3);
});

test('Test 2', () => {
  expect(Test2(4, 2)).toBe(2);
});

test('Test 3', () => {
  expect(Test3(5, 2)).toBe(10);
});

test('Test 4', () => {
  expect(Test4(10, 2)).toBe(5);
});

test('Test 5', () => {
  expect(Test5(9, 2)).toBe(1);
});

test('Test 6', () => {
  expect(Test6(1, 2, 3)).toBe(6);
});