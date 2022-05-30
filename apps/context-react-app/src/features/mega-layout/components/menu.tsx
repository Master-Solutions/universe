import React from 'react';
import { useComponent, useTypeResources } from '@unvrse/ctx-react-aspect';
import { CTX, Resource } from '@unvrse/context';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';
import { classNames } from './class-names';

const Menu = () => {
  const Link = useComponent(CTX_REACT_ROUTER_ASPECT.ID_LINK);
  const menuItems = useTypeResources(CTX.TYPE_CONFIG, ['ui.menu']);
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {menuItems.map((r: Resource) => {
        const item = r.getValue();
        return (
          <a
            key={r.id}
            href={item.to}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'px-3 py-2 rounded-md text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.title}
          </a>
        )
      })}
    </div>
  )
}

export {Menu};
