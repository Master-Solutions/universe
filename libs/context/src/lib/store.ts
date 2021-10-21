import { AnyResource, Tag } from './types';

class Store {
  memo: AnyResource[] = [];

  add(resource: AnyResource) {
    const index = this.memo.findIndex(r => r.type === resource.type && r.id === resource.id);
    if (index > -1) {
      console.log(`Deleting: ${resource.type}, ${resource.id}`);
      this.memo.splice(index, 1);
    }

    this.memo.push(resource);
  }

  getById(id: string) {
    return this.memo.find(r => r.id === id);
  }

  getByTypeAndId(type: string, id: string) {
    const r = this.memo.find(r => r.type === type && r.id === id);
    if (!r) throw new Error(`Resource ${id} ('${type}') not found.`);
    return r;
  }

  findByType(type: string) {
    return this.memo.filter(r => r.type === type);
  }

  findByTypeAndTags(type: string, tags: Tag[]) {
    return this.memo.filter(r => {
      return r.type === type && tags.every(searchedTag => (r.tags || []).includes(searchedTag));
    })
  }

}

export { Store };
