import React, { FC } from 'react';
import Container from '../Container/Container';
import JustifiedRow from '../JustifiedRow/JustifiedRow';
import { HStack } from '@unvrse/layout-blocks';
import LSplit from '../LSplit/LSplit';
import PadBox from '../PadBox/PadBox';
import Center from '../Center/Center';

interface AppLayoutProps {
  headerLeft?: React.ReactNode,
  headerRight?: React.ReactNode,
  leftSidebar?: React.ReactNode,
  children?: React.ReactNode


}

const AppLayout = (props: AppLayoutProps) => {
  return (
    <Container>

      <JustifiedRow bg={"#3d4977"} minH="70px" >
        <PadBox padding={["10px 10px"]}>
          <HStack>
            {props.headerLeft}
          </HStack>
        </PadBox>
        <PadBox padding={["10px 10px"]}>
          <HStack>
            {props.headerRight}
          </HStack>
        </PadBox>
      </JustifiedRow>

      <LSplit fraction="250px"
              sideContent={
                <PadBox padding={["15px"]} bgColor={"#3d4977"}>{props.leftSidebar}</PadBox>
              }>
          {props.children}
      </LSplit>

    </Container>
  );
};



export default AppLayout;
