import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import PadBox from '../../PadBox/PadBox';



interface LeftMenuItemProps{
  isActive: boolean,
  value: React.ReactNode

}


const LeftMenuItem = (props: LeftMenuItemProps) => {

  const style = {
    color: "#FFF",
    backgroundColor: "inherits"
  }
  if(props.isActive){
    style.backgroundColor = "#414c71"
  }
  return (
    <div style={style}>
      <PadBox padding={["3px 10px"]}>
        {props.value}
      </PadBox>
    </div>
  )
};



export default LeftMenuItem;
