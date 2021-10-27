import { IResourceBehavior, Predicate } from '../types';
import { Resource } from '../resource';

class ArrayResourceStore<T extends Resource> {
  memo: T[] = [];

  add(resource: T, replace = false) {
    const index = this.memo.findIndex(r => r.id === resource.id);
    if (index > -1) {
      if (replace) {
        // console.log(`Deleting: ${resource.id}`);
        this.memo.splice(index, 1);
      } else {
        throw new Error(`Resource '${resource.id}' already exists. Use 'replace' option to overwrite without error.`)
      }
    }
    this.memo.push(resource);
    return resource;
  }

  getById(id: string) {
    return this.memo.find(r => r.id === id);
  }

  list() {
    return this.memo;
  }

  find(predicate: Predicate<T>) {
    return this.memo.filter(predicate);
  }
}

export {ArrayResourceStore}
