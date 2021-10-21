import React from 'react';
import { Context } from '@unvrse/context';
import { Route, Switch } from 'react-router-dom';

const e = React.createElement;

export function buildRoutesComponent(ctx: Context) {
  return () => {
    const routes = ctx.store.findByType('route');

    const routesComponents = routes.map(r => {
      const props = {...r.value};
      if (typeof props.component === 'string')
        props.component = ctx.store.getByTypeAndId('component', props.component).value;
      props.key = props.path;
      //console.log("Route:", props);
      return e(Route, props);
    })

    return e(Switch, null, routesComponents);
  };
}
