import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';



const JustifiedRow = (props: any) => {
  return (
    <Flex border="1px solid green" justify="space-between" {...props} />
  );
};



export default JustifiedRow;
