import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import PadBox from '../../PadBox/PadBox';
import { Circle } from '@unvrse/layout-blocks';



interface BrandProps{
  fs?: string

}


const Brand = (props: BrandProps) => {
 const style = {
   fontSize: "inherit"
 }
  if(props.fs){
   style.fontSize = props.fs
 }
  return (
    <Flex style={style} {...props} />
  )
};



export default Brand;
