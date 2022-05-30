import React from 'react';
import { useComponent, useTypeResources } from '@unvrse/ctx-react-aspect';
import { CTX, Resource } from '@unvrse/context';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';
import { classNames } from './class-names';
import { Disclosure } from '@headlessui/react';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const MobileMenuUserNav = () => {
  return (
    <div className="mt-3 px-2 space-y-1">
      {userNavigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  )
}

export {MobileMenuUserNav};
