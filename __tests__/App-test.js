/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Test1, Test2, Test3, Test4, Test5, Test6 } from '../Raja_UnitTesting';
import App from '../App';
import renderer from 'react-test-renderer';

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
