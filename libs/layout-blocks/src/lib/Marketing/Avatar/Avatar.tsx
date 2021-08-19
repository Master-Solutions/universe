import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import PadBox from '../../PadBox/PadBox';
import { Circle } from '@unvrse/layout-blocks';



interface AvatarProps{
  bg?: string,
  padding: string,
  color?: string,
  value?: React.ReactNode

}


const Avatar = (props: AvatarProps) => {

  return (
    <PadBox padding={["10px 20px"]}>
      <Circle backgroundColor={props.bg} color={props.color} fontSize={"25px"}>
        <PadBox padding={[props.padding]}>
          {props.value}
        </PadBox>
      </Circle>
    </PadBox>
  )
};



export default Avatar;
