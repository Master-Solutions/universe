import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';
import styled from '@emotion/styled';



interface CenterProps{
  height: string,
  children: React.ReactNode

}


const Center = (props: CenterProps) => {
  const style = {
    height: props.height,
    alignItems: "center",
    justifyContent: "center"

  }
  return (
    <Flex style={style}>
      {props.children}
    </Flex>
  )
};



export default Center;
