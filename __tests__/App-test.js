/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {
  __getCompletedIcon,
  __getDescriptionStyle,
  clickEventListener,
  onClickListener,
  __renderColors,
  __renderImages,
} from '../TestCasses';

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
