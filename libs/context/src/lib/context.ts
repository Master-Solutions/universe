interface Resource {
  id: string,
  value?: any
}

type Aspect = Resource;

interface Feature {
  aspects?: Aspect[]
}

const DEFAULT_NAMESPACE = 'uni';

class Context {
  memo = [];
  defaultNamespace;

  constructor(options = {
    defaultNamespace: DEFAULT_NAMESPACE
  }) {
    this.defaultNamespace = options.defaultNamespace;
  }

  use(feature: Feature) {
    this.memo.push(feature);
  }

}

export { Context };
