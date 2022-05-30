import React from 'react';
import { AppLayout } from '../tw-layout/components/app-layout';
import { PageTitle } from './components/page-title';
import { MdUpOnly } from './components/md-up-only';
import { MobileMenuUserInfo } from './components/mobile-menu-user-info';
import { MobileMenuNav } from './components/mobile-menu-nav';
import { ProfileDropdown } from './components/profile-dropdown';
import { Notifications } from './components/notifications';
import { Menu } from './components/menu';
import { Logo } from './components/logo';


type PrimaryLayoutProps = {
  mobileHeader?: React.ReactNode,
  subHeader?: React.ReactNode
}

const PrimaryLayout = ({subHeader, mobileHeader, children}: React.PropsWithChildren<PrimaryLayoutProps>) => {
  return (
    <AppLayout
      brand={<Logo />}
      headerLeft={<MdUpOnly><Menu /></MdUpOnly>}
      headerRight={
        <>
          <Notifications />
          <ProfileDropdown />
        </>
      }
      headerMobileMenu={
        <>
          <MobileMenuNav />
          <MobileMenuUserInfo user={{ imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: "Dima", email: 'dima@test.com' }}/>
          {mobileHeader}
        </>
      }
      subHeader={subHeader}
        // <>
        //   <PageTitle title="Dashboard" />
        //   <MdUpOnly><PageTitle title="Dashboard" /></MdUpOnly>
        //   <PageTitle title="Dashboard" />
        // </>
    >
      {children}
    </AppLayout>
  )
}

export {PrimaryLayout};
