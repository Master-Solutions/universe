import { AnyResource, ConfigureFunction, ConfigureFunctionOptions } from './types';
import { Store } from './store';

class Context {
  store = new Store();

  use(resourceOrConfigure: AnyResource | ConfigureFunction, options: ConfigureFunctionOptions = {}) {
    if (typeof resourceOrConfigure === 'function')
      return resourceOrConfigure(this, options);
    else
      this.store.add(resourceOrConfigure);
  }

  run(apiId: string, options = {}) {
    const r = this.store.getByTypeAndId('api', apiId);
    if (!r) throw new Error(`api with id '${apiId}' not found.`);
    return r.value.call(null, options);
  }

}

export { Context };
