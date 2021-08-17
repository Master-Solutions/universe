import React from 'react';
import { BoxProps } from '@chakra-ui/layout';
import { Box } from '@unvrse/layout-blocks';

interface ContainerProps extends BoxProps{
  temp: any
}

const Container = (props: ContainerProps) => {

  return (
    <Box {...props} />
  );
};



export default Container;
