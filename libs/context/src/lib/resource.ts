import { Context } from "./context"
import { AliasValueProvider } from './value-providers/alias-value-provider';
import { ConstValueProvider } from './value-providers/const-value-provider';
import { FactoryValueProvider } from './value-providers/factory-value-provider';
import { IValueProvider } from './types';

class Resource {
  ctx
  type
  id
  value
  valueProvider: IValueProvider
  _tags: string[]
  _meta: Record<string, any>

  constructor(ctx: Context, type: string, id: string, value: any) {
    this.ctx = ctx;
    this.type = type;
    this.id = id;
    this.value = value;
    this.valueProvider = new ConstValueProvider(value);
    this._tags = [];
    this._meta = {};
  }

  getValue() {
    return this.valueProvider.getValue();
  }

  asFactory() {
    this.valueProvider = new FactoryValueProvider(this.value);
    return this;
  }

  tag(tag: string) {
    this._tags.push(tag);
    return this;
  }

  meta(meta: any) {
    this._meta = meta;
    return this;
  }

  hasTags(tags: string[]) {
    return tags.every(searchedTag => (this._tags).includes(searchedTag));
  }

  asAlias() {
    this.valueProvider = new AliasValueProvider(this.ctx, this.type, this.value);
    return this;
  }
}

export {Resource};
