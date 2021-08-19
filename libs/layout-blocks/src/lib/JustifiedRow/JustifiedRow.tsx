import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';

interface JustifiedRowProps {
  bg?: string,
  color?: string
}

const JustifiedRow = (props: JustifiedRowProps) => {
  return (
    <Flex justify="space-between" {...props} />
  );
};



export default JustifiedRow;
