import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { GlobalStyles } from './GlobalStyles';
import styled from '@emotion/styled';

//import {HSplit} from '@unvrse/layout-blocks';

const AppContainer = styled.div`
  `

const LSplit = styled.div`
  display: flex;
  `


const SidebarPaneContainer = styled.div`
  background-color: pink;
 `

const SidebarPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 `

const MainContainer = styled.div`
  margin: 0 10px;
 `

type AppLayoutProps = {
  sidebarPane?: React.ReactNode
  children: React.ReactNode
}

const AppLayout = ({sidebarPane, children}: AppLayoutProps) => {
  return (
    <ChakraProvider>
      <AppContainer>
        <LSplit>
          <SidebarPaneContainer>
            <SidebarPane>{sidebarPane}</SidebarPane>
          </SidebarPaneContainer>
          <MainContainer>{children}</MainContainer>
        </LSplit>
      </AppContainer>
    </ChakraProvider>
  )
}

export default AppLayout;
