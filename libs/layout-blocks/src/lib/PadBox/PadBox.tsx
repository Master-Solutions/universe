import React from 'react';
import { BoxProps } from '@chakra-ui/layout';
import { Box } from '@unvrse/layout-blocks';


interface PadBoxProps extends BoxProps {
  padding: string | string[],
}

const PadBox = ({ padding, ...rest }: PadBoxProps) => {
  const p = Array.isArray(padding) ? padding[0] : padding;

  return (
    <Box padding={p} {...rest} />
  )
};

export default PadBox;
