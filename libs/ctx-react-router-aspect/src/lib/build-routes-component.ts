import React from 'react';
import { Context, Resource } from '@unvrse/context';
import { Route, Switch } from 'react-router-dom';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';
import { CTX_REACT_ASPECT } from '@unvrse/ctx-react-aspect';

const e = React.createElement;

export function buildRoutesComponent(ctx: Context) {
  return () => {
    const routes = ctx.store.list(CTX_REACT_ROUTER_ASPECT.TYPE_ROUTE);
    //console.log("Routes:", routes);

    const routesComponents = routes.map((r: Resource) => {
      const props = {...r.getValue()};
      if (typeof props.component === 'string')
        props.component = ctx.store.getById(CTX_REACT_ASPECT.TYPE_COMPONENT, props.component).getValue();
      props.key = props.path;
      //console.log("Route:", props);
      return e(Route, props);
    })

    return e(Switch, null, routesComponents);
  };
}
