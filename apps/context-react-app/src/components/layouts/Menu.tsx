import React from 'react';
import { useResource, useTypeResources } from '@unvrse/ctx-react-aspect';

const Menu = () => {
  const link = useResource('component', 'router.link');
  const Link = link.value;
  const routes = useTypeResources('config', ['ui.menu']);
  console.log("Routes:", routes);
  return (
    <>
      <ul style={{display: 'flex', gap: '40px', listStyle: 'none'}}>
        {routes.map(r => {
          const rv = r.value;
          return <li key={r.id}><Link to={rv.to}>{rv.title}</Link></li>
        })}
      </ul>
      <hr/>
    </>
  )
}

export {Menu};
