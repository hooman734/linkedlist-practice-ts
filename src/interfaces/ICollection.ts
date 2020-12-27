import { Iterator} from "./IIterator";

export interface ICollection<T> {
  size: number;
  clear(): void;
  add(value: T) : void;
  remove(value: T) : void;
  reverse(): void;
  addAll(arr: T[]): void;
  removeAll(arr: T[]): void;
  contains(value: T): boolean;
  [Symbol.iterator]() : Iterator<T>;
}
