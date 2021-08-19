import React from 'react';
import { Box, HStack } from '@unvrse/layout-blocks';


const MainMenuItem = ({}) => {
  return (
    <Box w="80px" h="30px" bgColor={"black"} />
  )
};

const MainMenu = () => {

  return (
    <HStack spacing="30px">
      <MainMenuItem />
      <MainMenuItem />
      <MainMenuItem />
      <MainMenuItem />
    </HStack>
  )
};

export default MainMenu;
