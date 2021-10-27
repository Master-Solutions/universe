import { Context } from "../context";

class AliasValueProvider {

  ctx: Context
  type: string
  aliasId: string

  constructor(ctx: Context, type: string, aliasId: string) {
    this.ctx = ctx;
    this.type = type;
    this.aliasId = aliasId;
  }

  getValue() {
    return this.ctx.store.getById(this.type, this.aliasId).getValue();
  }

}

export {AliasValueProvider}
