import React from 'react';
import * as ReactDOM from 'react-dom';
import { Context } from '@unvrse/context';
import { CTX_REACT_ASPECT } from './constants';


export const buildMount = (ctx: Context) => {
  return ({ elementId = 'root', rootComponentId = CTX_REACT_ASPECT.ID_ROOT }) => {
    const r = ctx.store.getById(CTX_REACT_ASPECT.TYPE_COMPONENT, rootComponentId);
    ReactDOM.render(React.createElement(r.value), document.getElementById(elementId));
  };
};
