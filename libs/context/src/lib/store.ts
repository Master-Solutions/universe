import { AnyResource, Tag } from './types';

class Store {
  memo: AnyResource[] = [];

  add(resource: AnyResource) {
    this.memo.push(resource);
  }

  getById(id: string) {
    return this.memo.find(r => r.id === id);
  }

  getByTypeAndId(type: string, id: string) {
    return this.memo.find(r => r.type === type && r.id === id);
  }

  getByType(type: string) {
    return this.memo.filter(r => r.type === type);
  }

  getByTypeAndTags(type: string, tags: Tag[]) {
    return this.memo.filter(r => {
      r.type === type && tags.every(searchedTag => tags.some(t => t.name === searchedTag.name && t.value === searchedTag.value));
    })
  }

}

export { Store };
