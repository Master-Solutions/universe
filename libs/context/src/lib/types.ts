import { Context } from "./context";
import { Resource } from "./resource";

export type Predicate<T> = (r: T) => boolean;

export type ConfigureFunctionOptions = any;
export type ConfigureFunction = (ctx: Context, options?: ConfigureFunctionOptions) => void;

export interface IValueProvider {
  getValue(): any
}

export type ValueProviderClass = new (...args: any[]) => IValueProvider;

export interface IResourceBehavior<T extends Resource> {
  decorate(resource: T): any
}

export type RegisterTypeOptions<T extends Resource> = {
  resourceClass?: typeof Resource,
  behaviors?: IResourceBehavior<T>[]
}
