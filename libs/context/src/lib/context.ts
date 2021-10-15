import { AnyResource, ConfigureFunction, ConfigureFunctionOptions } from './types';
import { Store } from './store';

class Context {
  store = new Store();

  use(resource: AnyResource) {
    this.store.add(resource);
  }

  configure(fn: ConfigureFunction, options: ConfigureFunctionOptions = {}) {
    fn(this, options);
  }

  run(apiId: string, options = {}) {
    const r = this.store.getByTypeAndId('api', apiId);
    if (!r) throw new Error(`api with id '${apiId}' not found.`);
    return r.value.call(null, options);
  }

}

export { Context };
