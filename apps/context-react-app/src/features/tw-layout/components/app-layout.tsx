import React from 'react';
import { AppLayoutContainer } from './app-layout-container';
import { MainContainer } from './main-container';
import { AppHeader } from './app-header';
import { AppSubHeader } from './app-sub-header';

type AppLayoutProps = {
  brand?: React.ReactNode,
  headerLeft?: React.ReactNode,
  headerRight?: React.ReactNode,
  headerMobileMenu?: React.ReactNode,
  subHeader?: React.ReactNode
}

const AppLayout = ({brand, headerLeft, headerRight, headerMobileMenu, subHeader, children}: React.PropsWithChildren<AppLayoutProps>) => {
  return (
    <AppLayoutContainer>
      <AppHeader
        brand={brand}
        left={headerLeft}
        right={headerRight}
        mobileMenu={headerMobileMenu}
      />

      {subHeader && <AppSubHeader>{subHeader}</AppSubHeader>}

      <MainContainer>
        {children}
      </MainContainer>
    </AppLayoutContainer>
  )
}

export {AppLayout};
