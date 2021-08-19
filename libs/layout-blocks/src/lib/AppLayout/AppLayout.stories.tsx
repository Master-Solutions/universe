import React from 'react';
import { Circle, Square } from '../../index';
import Stack from '../ShowCase/Stack';
import { flexbox } from '@chakra-ui/system';
import AppLayout from './AppLayout';
import LeftMenu from '../Marketing/LeftMenu/LeftMenu';
import Avatar from '../Marketing/Avatar/Avatar';
import PadBox from '../PadBox/PadBox';
import Brand from '../Marketing/Brand/Brand';
import Center from '../Center/Center';
import Card from '../Marketing/Card/Card';

export default {
  component: Stack,
  title: "Examples/App Layouts"
}

export const Default = () => {

  return (
  <AppLayout
    headerLeft={<PadBox padding={["0 20px"]}><Brand fs={"25px"}>Company Name/Logo</Brand> </PadBox>}
    headerRight={<><div>Hello, Alex</div> <Avatar bg={"#cc5f5f"} padding={"5px"} color={"#FFFFFF"} value={" AC "} /></>}
    leftSidebar={<LeftMenu />}>
    <PadBox padding={["10px 20px"]}>
      <h1>Main Content</h1>
      <Card w={"300px"}></Card>
    </PadBox>

  </AppLayout>
  )
}

