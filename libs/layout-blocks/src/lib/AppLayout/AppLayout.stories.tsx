import React from 'react';
import { Circle, Square } from '../../index';
import Stack from '../ShowCase/Stack';
import { flexbox } from '@chakra-ui/system';
import AppLayout from './AppLayout';

export default {
  component: Stack,
  title: "Examples/App Layouts"
}

export const Default = () => {

  return (
  <AppLayout
    headerLeft={<div>header left</div>}
    headerRight={<><div>header Right</div> <div>header Right --2</div></>}
    leftSidebar={<div>left menu</div>}>
    Main content
  </AppLayout>
  )
}

