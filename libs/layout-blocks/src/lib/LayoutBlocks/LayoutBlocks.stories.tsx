import LayoutBlocks from './LayoutBlocks';
import React from 'react';
import { Circle, Square } from '../../index';
import styled from '@emotion/styled';

export default {
  component: LayoutBlocks,
  title: "Shapes/Circle"
}
const HorizontalContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '30px'
})
const VerticalContainer = styled.div({
  display: 'block',

})

interface ShowCaseProps  {
  component: React.FC<any>,
  propsPalette: object
}

const ShowCase:React.FC<ShowCaseProps> = ({component: Component , propsPalette}) => {

  const keys = Object.keys(propsPalette)
  const componentProps = {

  }
  if(keys.length === 1){
    return (
      <HorizontalContainer>
        <Component {...componentProps}  />
      </HorizontalContainer>
    )
  }
  return <></>
}



export const Default = () => {
  const sizes = [100, 150, 200, 250]
  const colors = ['black', 'blue', 'red']

  const story = colors.map((color ) => {
    return <HorizontalContainer>{sizes.map((size) => {
      return <Circle size={size} backgroundColor={color}  />
    })}</HorizontalContainer>
  })


  return story
}

