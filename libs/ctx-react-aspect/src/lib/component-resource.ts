import { Resource } from '@unvrse/context';
import React from 'react';

type HOC = (...args: any[]) => React.FunctionComponentElement<Record<string, unknown>>;

export class ComponentResource extends Resource {
  hocs: HOC[] = [];

  hoc(h: HOC) {
    this._meta.hocs.push(h);
  }
}
