import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import PadBox from '../../PadBox/PadBox';
import { Circle } from '@unvrse/layout-blocks';
import Brand from '../Brand/Brand';
import Center from '../../Center/Center';



interface CardProps{
  bs?: string
  w?: string

}


const Card = (props: CardProps) => {
 const style = {
   boxShadow: "1px 2px 8px 3px rgba(0, 0, 255, .2)",
   border: "1px solid #999",
   width: "auto"
 }
 const divImageStyle = {
   height: "70px",
   backgroundColor: "#a8a8a8"
 }
  const divTextStyle = {
    height: "90px",
    borderTop: "1px solid #666",
    backgroundColor: "#d1d1d1"
  }
  if(props.bs){
   style.boxShadow = props.bs
 }
  if(props.w){
    style.width = props.w
  }
  return (
    <div style={style}  >
      <div style={divImageStyle}>
        <Center height={"auto"}>
          Some image
        </Center>
      </div>
      <div style={divTextStyle}>
        <Center height={"auto"}>
          Some text
        </Center>
      </div>

    </div>
  )
};



export default Card;
