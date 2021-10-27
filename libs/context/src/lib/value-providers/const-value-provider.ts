class ConstValueProvider {

  value: any

  constructor(value: any) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

}

export {ConstValueProvider}
