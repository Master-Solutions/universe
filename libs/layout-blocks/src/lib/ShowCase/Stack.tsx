import React from 'react';
import styled from '@emotion/styled';

interface StackProps {
  component: React.ComponentType,
  props: any
}

const HorizontalStack = styled.div({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'blue',
  color: 'white',
  minHeight: '70px'


})

const Stack = ({component: Component, props}: StackProps) => {
  const justify = {
    justifyContent: 'flex-start'
  }
  if(props.end === true){
    justify.justifyContent = 'flex-end'
  }

  return <HorizontalStack style={justify}><Component /></HorizontalStack>

}
export default Stack
