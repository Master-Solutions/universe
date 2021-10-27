import React from 'react';
import { useComponent, useTypeResources } from '@unvrse/ctx-react-aspect';
import { CTX, Resource } from '@unvrse/context';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';

const Menu = () => {
  const Link = useComponent(CTX_REACT_ROUTER_ASPECT.ID_LINK);
  const routes = useTypeResources(CTX.TYPE_CONFIG, ['ui.menu']);
  return (
    <>
      <ul style={{display: 'flex', gap: '40px', listStyle: 'none'}}>
        {routes.map((r: Resource) => {
          const rv = r.getValue();
          return <li key={r.id}><Link to={rv.to}>{rv.title}</Link></li>
        })}
      </ul>
      <hr/>
    </>
  )
}

export {Menu};
