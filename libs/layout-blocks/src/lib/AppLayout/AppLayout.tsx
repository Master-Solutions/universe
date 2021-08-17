import React, { FC } from 'react';
import Container from '../Container/Container';
import JustifiedRow from '../JustifiedRow/JustifiedRow';
import { HStack } from '@unvrse/layout-blocks';
import LSplit from '../LSplit/LSplit';
import PadBox from '../PadBox/PadBox';

interface AppLayoutProps {
  headerLeft?: React.ReactNode,
  headerRight?: React.ReactNode,
  leftSidebar?: React.ReactNode,
  children?: React.ReactNode


}

const AppLayout = (props: AppLayoutProps) => {
  console.log("---props", props)
  return (
    <Container border="1px solid red">

      <JustifiedRow >
        <HStack>
          {props.headerLeft}
        </HStack>
        <HStack>
          {props.headerRight}
        </HStack>
      </JustifiedRow>

      <LSplit fraction="250px" sideContent={props.leftSidebar}>
        {props.children}
      </LSplit>
      <PadBox padding={["20px","10px"]} >
        Pad Box Content
      </PadBox>
    </Container>
  );
};



export default AppLayout;
