import { ICollection } from './interfaces/ICollection';
import { Iterator } from './interfaces/IIterator';

class DoublyLinkedNode<T> {
  public prev: DoublyLinkedNode<T>;
  public value: T;
  public next: DoublyLinkedNode<T>;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  constructor(prev: DoublyLinkedNode<T>, value: T, next: DoublyLinkedNode<T>) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.prev = value;
    this.value = value;
    this.next = next;
  }
}

export class DoublyLinkedList<T> implements ICollection<T> {
  private head: DoublyLinkedNode<T>;
  size = 0;

  add(value: T): void {
    this.size++;
    this.head = new DoublyLinkedNode(null, value, this.head);
    if (this.size !== 1) {
      this.head.next.prev = this.head;
    }
  }

  remove(value: T): void {
    let prevNode: DoublyLinkedNode<T> = null;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.head = this.head.next;
          if (this.head !== null) {
            this.head.prev = null;
          }
        } else if (currentNode.next === null) {
          prevNode.next = null;
        } else {
          prevNode.next = currentNode.next;
          prevNode.next.prev = prevNode;
        }
        this.size--;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  [Symbol.iterator](): Iterator<T> {
    let currentNode: DoublyLinkedNode<T> = null;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    return {
      next() {
        if (currentNode === null) {
          currentNode = self.head;
        } else {
          currentNode = currentNode.next;
        }

        return { done: currentNode === null, value: currentNode?.value };
      },
    };
  }

  clear(): void {
    this.head = null;
    this.size = 0;
  }
}
