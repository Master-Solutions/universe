import React from 'react';
import { Circle, Square } from '../../index';
import Stack from '../ShowCase/Stack';
import { flexbox } from '@chakra-ui/system';

export default {
  component: Stack,
  title: "Shapes/Header"
}

const Menu = () => {
  const listStyle = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row'
  }
  return (
    <ul>
      <li>
        Item 1
      </li>
      <li>
        Item 2
      </li>
      <li>
        Item 3
      </li>
    </ul>
  )
}

const AuthBlock = () => {
  return (
    <>
      <Square size="40px" backgroundColor="black" />
      <Circle size="40px" backgroundColor="red" />
    </>
  )
}

export const Default = () => {

  const propsPalette = {
    end: true,
  }

  return <Stack component={AuthBlock} props={propsPalette}/>
}

