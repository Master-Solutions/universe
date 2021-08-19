import React from 'react';
import { BoxProps, Flex } from '@chakra-ui/layout';

type JustifiedRowProps = BoxProps;

const JustifiedRow = (props: JustifiedRowProps) => {
  return (
    <Flex justify="space-between" alignItems="center" {...props} />
  );
};



export default JustifiedRow;
