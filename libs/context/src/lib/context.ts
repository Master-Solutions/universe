import { Store } from './store';
import { ConfigureFunction, ConfigureFunctionOptions, RegisterTypeOptions } from './types';
import { Resource } from './resource';
import { CTX } from './constants';

class Context {

  store = new Store(this);

  constructor() {
    this.store.registerType(CTX.TYPE_API);
    this.store.registerType(CTX.TYPE_CONFIG);
    this.store.registerType(CTX.TYPE_INITIALIZER);
  }

  registerType<T extends Resource>(type: string, options: RegisterTypeOptions<T> = {}) {
    return this.store.registerType<T>(type, options);
  }

  configure(fn: ConfigureFunction, options: ConfigureFunctionOptions = {}) {
    return fn(this, options);
  }

  use<T extends Resource>(type: string, id: string, value: any): T {
    return this.store.add<T>(type, id, value);
  }

  run(apiId: string, options = {}) {
    const r = this.store.getById('api', apiId);
    return r.getValue().call(null, options);
  }

}

export { Context };
