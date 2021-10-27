import { RegisterTypeOptions, Predicate, IResourceBehavior } from './types';
import { ArrayResourceStore } from './stores/array-resource-store';
import { Resource } from './resource';
import { Context } from './context';

type TypeInfo = {
  store: ArrayResourceStore<any>,
  resourceClass: typeof Resource,
  behaviors: IResourceBehavior<any>[]
}


class Store {
  ctx: Context
  types = new Map();

  constructor(ctx: Context) {
    this.ctx = ctx;
  }

  registerType<T extends Resource>(type: string, { resourceClass = Resource, behaviors = [] } : RegisterTypeOptions<T> = {}) {
    if (this.types.has(type))
      throw new Error(`Resource type '${type}' already registered.`);
    const store = new ArrayResourceStore<T>();
    const typeInfo: TypeInfo = {store, resourceClass, behaviors}
    this.types.set(type, typeInfo);
    return store;
  }

  getTypeInfo(type: string) {
    const info = this.types.get(type) as TypeInfo;
    if (!info) throw new Error(`Resource type '${type}' is not registered.`);
    return info;
  }

  getStore(type: string) {
    return this.getTypeInfo(type).store;
  }

  add<T extends Resource>(type: string, id: string, value: any) {
    const ResourceClass = this.getTypeInfo(type).resourceClass;
    const resource = new ResourceClass(this.ctx, type, id, value);
    return this.getStore(type).add(resource);
  }

  getById(type: string, id: string) {
    const r = this.getStore(type).getById(id);
    if (!r) throw new Error(`Resource ${id} (${type}) not found.`);
    return r;
  }

  list(type: string) {
    return this.getStore(type).list();
  }

  find<T extends Resource>(type: string, predicate: Predicate<T>) {
    return this.getStore(type).find(predicate);
  }

  findByTags<T extends Resource>(type: string, tags: string[]) {
    const predicate = (r: T) => r.hasTags(tags);
    return this.find<T>(type, predicate);
  }

}

export { Store };
