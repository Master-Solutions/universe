import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';
import styled from '@emotion/styled';



interface PadBoxProps{
  padding?: string[],
  children: React.ReactNode

}


const PadBox = (props: PadBoxProps) => {
  const style = props.padding[0] ? {
    padding: props.padding[0]
  }:
    {}
  return (
    <div style={style}>
      {props.children}
    </div>
  )
};



export default PadBox;
