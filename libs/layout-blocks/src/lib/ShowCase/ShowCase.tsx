import React from 'react';
import styled from '@emotion/styled';

const HorizontalContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '30px'
})
const VerticalContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'
})

interface PropsPalette {
  [key: string]: Array<string | number>;
}

interface ShowCaseProps  {
  component: React.ComponentType,
  componentDefaultProps?: any,
  propsPalette: PropsPalette
}


const ShowCase1D = ({component: Component, componentDefaultProps = {}, propsPalette}: ShowCaseProps) => {
  const propName = Object.keys(propsPalette)[0];

  const components = propsPalette[propName].map(propVal => {
    const componentProps: any = componentDefaultProps;
    componentProps[propName] = propVal;
    return <Component {...componentProps}  />;
  })

  return <HorizontalContainer>{components}</HorizontalContainer>;
}

const ShowCase2D = ({component, propsPalette}: ShowCaseProps) => {
  const keys = Object.keys(propsPalette);
  const firstPropName = keys[0];
  const secondPropName = keys[1];

  const components = propsPalette[firstPropName].map(propVal => {
    const componentDefaultProps: any = {};
    componentDefaultProps[firstPropName] = propVal;

    const newPropsPalette: PropsPalette = {};
    newPropsPalette[secondPropName] = propsPalette[secondPropName];
    return <ShowCase1D component={component} componentDefaultProps={componentDefaultProps} propsPalette={newPropsPalette} />;
  })

  return <VerticalContainer>{components}</VerticalContainer>;
}

const ShowCase = ({component , propsPalette}: ShowCaseProps) => {
  const keys = Object.keys(propsPalette);
  if (keys.length === 1) return <ShowCase1D component={component} propsPalette={propsPalette} />;
  if (keys.length === 2) return <ShowCase2D component={component} propsPalette={propsPalette} />;
  return <span>Only 1 and 2 dims supported.</span>;
}

export default ShowCase;
