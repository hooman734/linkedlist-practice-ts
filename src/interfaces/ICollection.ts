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
  containsAll(arr: T[]): boolean;
  isEmpty(): boolean;
  toArray(): T[];
  shuffle(): T[];
  [Symbol.iterator]() : Iterator<T>;
}
