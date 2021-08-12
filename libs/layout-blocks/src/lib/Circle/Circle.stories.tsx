import React from 'react';
import { Circle } from '../../index';
import ShowCase from '../ShowCase/ShowCase';

export default {
  component: Circle,
  title: "Shapes/Circle"
}

export const Default = () => {
  const sizes = [100, 150, 200, 250]
  const colors = ['black', 'blue', 'red', 'tomato', 'orange']
  const propsPalette = {
    size: sizes,
    backgroundColor: colors
  }

  return <ShowCase component={Circle} propsPalette={propsPalette}/>
}

