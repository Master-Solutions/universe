import React from 'react';
import { Flex, Stack } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import PadBox from '../../PadBox/PadBox';
import LeftMenuItem from './LeftMenuItem';



interface LeftMenuProps{
  padding: string[],
  children: React.ReactNode

}


const LeftMenu = (props: LeftMenuProps) => {
  const menuItems = [
    {
      active: false,
      value: "Menu Item 1"
    },
    {
      active: false,
      value: "Menu Item 2"
    },
    {
      active: true,
      value: "Menu Item 3"
    },
    {
      active: false,
      value: "Menu Item 4"
    },
    {
      active: false,
      value: "Menu Item 5"
    },
    {
      active: false,
      value: "Menu Item 5"
    },
  ]
  const style = {
    backgroundColor: "#2e3652"
  }
  return (
    <div style={style}>
      <PadBox padding={["15px"]}>
        { menuItems.map((item)=>{
          return (
            <PadBox padding={["5px 0"]}>
              <LeftMenuItem isActive={item.active} value={item.value} />
            </PadBox>
          )
        })}
      </PadBox>
    </div>
  )
};



export default LeftMenu;
