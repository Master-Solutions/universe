import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@chakra-ui/react';
import iconsMap from '../data/iconsMap';

const Container = styled.ul`
  width: 200px;
  height: 100vh;
  overflow: hidden auto;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 7px;
    background-color: rgb(116, 125, 140);
    box-shadow: rgb(0 0 0 / 5%) -1px -1px 0px inset, rgb(0 0 0 / 5%) 1px 1px 0px inset;
  }
  li {
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    list-style-type: none;
    border-bottom: solid 1px #FEB2B2;
    :hover {
      color: white;
    }
  }
  li a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    text-transform: uppercase;
    :hover {
      text-decoration: none;
    }
  }
  @media (max-width: 960px) {
    width: 30px;
    transition: width 0.2s ease;
  }
 `

const ItemContainer = styled.li`
  width: 100%;
  `

const ItemNameContainer = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
  `

type Item = {
  name: string,
  to: string,
  icon?: string
}

type MenuItemProps = {
  item: Item
}

const MenuItem = ({item}: MenuItemProps) => {
  const Icon = item.icon ? iconsMap[item.icon] : null;
  return (
    <ItemContainer>
      <Link to={item.to}>
        <Icon size={30} />
        <ItemNameContainer>{item.name}</ItemNameContainer>
      </Link>
    </ItemContainer>
  )
}

type SidebarProps = {
  items: Item[]
}

const Sidebar = ({items}: SidebarProps) => {
  return (
    <Container>
      {items.map((item) => <MenuItem item={item} />)}
    </Container>
  );
}

export default Sidebar;
