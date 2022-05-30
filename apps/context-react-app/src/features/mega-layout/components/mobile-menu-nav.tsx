import React from 'react';
import { useComponent, useTypeResources } from '@unvrse/ctx-react-aspect';
import { CTX, Resource } from '@unvrse/context';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';
import { classNames } from './class-names';
import { Disclosure } from '@headlessui/react';

const MobileMenuNav = () => {
  const Link = useComponent(CTX_REACT_ROUTER_ASPECT.ID_LINK);
  const menuItems = useTypeResources(CTX.TYPE_CONFIG, ['ui.menu']);
  return (
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {menuItems.map((r: Resource) => {
        const item = r.getValue();
        return (
          <Disclosure.Button
            key={r.id}
            as="a"
            href={item.to}
            className={classNames(
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.title}
          </Disclosure.Button>
        )
      })}
    </div>
  )
}

export {MobileMenuNav};
