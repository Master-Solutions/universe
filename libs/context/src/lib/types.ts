import { Context } from "./context";

// export interface Tag {
//   name: string,
//   value: string
// }

export type Tag = string;

export interface Resource<T> {
  id: string,
  type: string,
  value: T,
  tags?: Tag[]
}

export type AnyResource = Resource<any>;

export interface Feature {
  resources: AnyResource[]
}

export type ConfigureFunctionOptions = any;
export type ConfigureFunction = (ctx: Context, options?: ConfigureFunctionOptions) => void;

