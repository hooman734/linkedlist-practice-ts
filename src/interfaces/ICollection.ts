import { Iterator} from "./IIterator";

export interface ICollection<T> {
  size: number;
  clear(): void;
  add(value: T) : void;
  remove(value: T) : void;
  reverse(): void;
  [Symbol.iterator]() : Iterator<T>;
}
