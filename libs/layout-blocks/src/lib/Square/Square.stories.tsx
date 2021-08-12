import React from 'react';
import { Circle, Square } from '../../index';
import ShowCase from '../ShowCase/ShowCase';

export default {
  component: Square,
  title: "Shapes/Square"
}

export const Default = () => {
  const sizes = [100, 150, 200, 250]
  const colors = ['black', 'blue', 'red', 'tomato', 'orange']
  const propsPalette = {
    size: sizes,
    backgroundColor: colors
  }

  return <ShowCase component={Square} propsPalette={propsPalette}/>
}

