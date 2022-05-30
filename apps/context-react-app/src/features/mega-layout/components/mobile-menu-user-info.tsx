import React from 'react';
import { useComponent, useTypeResources } from '@unvrse/ctx-react-aspect';
import { CTX, Resource } from '@unvrse/context';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';
import { classNames } from './class-names';
import { Disclosure } from '@headlessui/react';
import { UserCard } from './user-card';
import { Notifications } from './notifications';
import { MobileMenuUserNav } from './mobile-menu-user-nav';

type MobileMenuUserInfoProps = {
  user: {
    imageUrl: string,
    name: string,
    email: string
  }
}

const MobileMenuUserInfo = ({user}: MobileMenuUserInfoProps) => {
  return (
    <div className="pt-4 pb-3 border-t border-gray-700">
      <div className="flex items-center px-5">
        <UserCard {...user} />
        <Notifications />
      </div>
      <MobileMenuUserNav />
    </div>
  )
}

export {MobileMenuUserInfo};
