import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Stack from '../ShowCase/Stack';
import AppLayout from './AppLayout';
import LeftMenu from '../Marketing/LeftMenu/LeftMenu';
import Avatar from '../Marketing/Avatar/Avatar';
import PadBox from '../PadBox/PadBox';
import Brand from '../Marketing/Brand/Brand';
import Card from '../Marketing/Card/Card';
import UserSessionInfo from '../Marketing/UserSessionInfo/UserSessionInfo';
import MainMenu from '../Marketing/MainMenu/MainMenu';
import { Box } from '../../index';
import { css, SerializedStyles } from '@emotion/react';

export default {
  component: Stack,
  title: 'Examples/App Layouts'
};

const theme = extendTheme({
  // colors: {
  //   brand: {
  //     100: "#f7fafc",
  //     // ...
  //     900: "#1a202c",
  //   },
  // },
})

const coolColoring = () =>
  css`
    background-color: green;
  `

const transitionEffect = () =>
  css`
    transition: all .8s;
  `

interface TextBoxProps {
  behaviors?: SerializedStyles[]
}

const TestBox = ({behaviors = []}: TextBoxProps) => {
    return <Box
      w={['50px', '100px', '200px']}
      h={'50px'}
      css={behaviors}
    />
}


export const Default = () => {
  console.dir(theme);

  return (
    <ChakraProvider theme={theme}>

      <AppLayout
        headerLeft={
          <>
            <Brand />
            <MainMenu />
          </>
        }
        headerRight={
          <>
            <UserSessionInfo />
            <Avatar />
          </>
        }
        leftSidebar={
          <LeftMenu />
        }>
        <PadBox padding={['10px 20px']}>
          <h1>Main Content</h1>
          <Card w={'300px'}></Card>
          <TestBox behaviors={[coolColoring(), transitionEffect()]} />
        </PadBox>

      </AppLayout>
    </ChakraProvider>
  );
};

