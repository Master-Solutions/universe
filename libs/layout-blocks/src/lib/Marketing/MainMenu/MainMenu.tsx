import React from 'react';
import { Box, HStack } from '@unvrse/layout-blocks';


const MainMenuItem = ({}) => {
  return (
    <Box w="80px" h="30px" bgColor={"cyan.500"} />
  )
};

const MainMenu = () => {

  return (
    <HStack spacing={[1, 2, 3]}>
      <MainMenuItem />
      <MainMenuItem />
      <MainMenuItem />
      <MainMenuItem />
    </HStack>
  )
};

export default MainMenu;
