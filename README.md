# linkedin-practice-ts

[![Build Status](https://travis-ci.com/amir734jj/linkedlist-practice-ts.svg?branch=master)](https://travis-ci.com/amir734jj/linkedlist-practice-ts)

Playground for writing some typescript data structures

### Data-Structures:
- SinglyLinkedList
- DoublyLinkedList
- SinglyCircularLinkedList
- DoublyCircularLinkedList

### Common interface:
```typescript
export interface ICollection<T> {
  length(): number;
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
  sort(comparer?: (a: T, b: T) => number): T[];
  [Symbol.iterator]() : Iterator<T>;
}


```
