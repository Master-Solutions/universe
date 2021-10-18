import { Context } from '@unvrse/context';
import React from 'react';

const e = React.createElement;

const buildRootComponent = (ctx: Context) => {
  return () => {
    // console.log("Ctx Store:", ctx.store);
    const wrappers = ctx.store.findByTypeAndTags('component', ['root-wrapper']);
    // console.log("Wrappers:", wrappers);
    const appResource = ctx.store.getByTypeAndId('component', 'app');
    if (!appResource) throw new Error(`Component with id 'app' not found`);
    let CurrentWrapper = e(appResource.value);
    wrappers.reverse().forEach(w => {
      // console.log(w.id);
      CurrentWrapper = e(w.value, null, CurrentWrapper);
    })
    return CurrentWrapper;
  }
}

export {buildRootComponent};
