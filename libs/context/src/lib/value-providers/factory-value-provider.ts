type FactoryFunction = (...args: any[]) => any;

class FactoryValueProvider {

  factory: FactoryFunction

  constructor(factory: FactoryFunction) {
    this.factory = factory;
  }

  getValue() {
    return this.factory();
  }

}

export {FactoryValueProvider}
