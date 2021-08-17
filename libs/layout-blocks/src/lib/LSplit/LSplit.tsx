import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';
import styled from '@emotion/styled';



interface SplitBoxProps{
  fraction: string,

}

const SplitBox = styled.div({
  display: "flex"
  })


const LSplit = (props: any) => {
  const { fraction } = props
  let style = []
  if(fraction.split('/').length === 2){
    const ratio = fraction.split('/')
    console.log(ratio)
    style = [{
      flexGrow: ratio[0]
    },{
      flexGrow: ratio[1],
      border: "1px solid black"
    }]

  }else{
    style = [{
      flexBasis: fraction
    },{
      flexBasis: "calc(100% - "+ fraction +" )",
      border: "3px solid black"

    }]
  }
  return (
    <SplitBox>
      <div style={style[0]}>
        Left Menu
      </div>
      <div style={style[1]}>
        Main content
      </div>
    </SplitBox>
  );
};



export default LSplit;
