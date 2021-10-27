import React from 'react';
import { Context, Resource } from '@unvrse/context';
import { CTX_REACT_ASPECT } from '@unvrse/ctx-react-aspect';


const e = React.createElement;

const buildRootComponent = (ctx: Context) => {
  return () => {
    // console.log("Ctx Store:", ctx.store);
    const wrappers = ctx.store.findByTags(CTX_REACT_ASPECT.TYPE_COMPONENT, [CTX_REACT_ASPECT.TAG_ROOT_WRAPPER]);
    // console.log("Wrappers:", wrappers);
    const appResource = ctx.store.getById(CTX_REACT_ASPECT.TYPE_COMPONENT, CTX_REACT_ASPECT.ID_APP);
    let CurrentWrapper = e(appResource.getValue());
    wrappers.reverse().forEach((w: Resource) => {
      // console.log(w.id);
      CurrentWrapper = e(w.getValue(), null, CurrentWrapper);
    })
    return CurrentWrapper;
  }
}

export {buildRootComponent};
