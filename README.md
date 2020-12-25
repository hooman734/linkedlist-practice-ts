# linkedin-practice-ts

Playground for writing some typescript

### Data-Structures:
- SinglyLinkedList
- DoublyLinkedList
- SinglyCircularLinkedList
- DoublyCircularLinkedList

### Common interface:
```typescript
export interface ICollection<T> {
    size: number;
    clear(): void;
    add(value: T) : void;
    remove(value: T) : void;
    reverse(): void;
    [Symbol.iterator]() : Iterator<T>;
}
```
