import React from 'react';
import { Box, VStack } from '@unvrse/layout-blocks';


const LeftMenuItem = ({active = false}) => {

  const bgColor = active ? "#414c71" : "#3e3652";
  return (
    <Box w="100%" h="30px" bgColor={bgColor} />
  )
};

const LeftMenu = () => {

  return (
    <VStack gap="3px">
      <LeftMenuItem />
      <LeftMenuItem active />
      <LeftMenuItem />
      <LeftMenuItem />
      <LeftMenuItem />
      <LeftMenuItem />
      <LeftMenuItem />
      <LeftMenuItem />
      <LeftMenuItem />
      <LeftMenuItem />
      <LeftMenuItem />
    </VStack>
  )
};

export default LeftMenu;
