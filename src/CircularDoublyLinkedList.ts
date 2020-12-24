import { ICollection } from './interfaces/ICollection';
import { Iterator } from './interfaces/IIterator';

class CircularDoublyLinkedNode<T> {
  public prev: CircularDoublyLinkedNode<T>;
  public value: T;
  public next: CircularDoublyLinkedNode<T>;

  constructor(prev: CircularDoublyLinkedNode<T>, value: T, next: CircularDoublyLinkedNode<T>) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }
}

export class CircularDoublyLinkedList<T> implements ICollection<T> {
  private head: CircularDoublyLinkedNode<T> = null;
  private tail: CircularDoublyLinkedNode<T> = null;
  size = 0;

  add(value: T): void {
    this.size++;
    this.head = new CircularDoublyLinkedNode(this.tail, value, this.head);
    if (this.size === 1) {
      this.tail = this.head;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    } else {
      this.tail.next = this.head;
    }
  }

  remove(value: T): void {
    let prevNode: CircularDoublyLinkedNode<T> = null;
    let currentNode = this.head;
    while (currentNode !== this.tail) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.head = this.head.next;
          this.tail.next = this.head;
        } else if (currentNode.next === this.tail) {
          prevNode.next = this.head;
        } else {
          prevNode.next = currentNode.next;
        }
        this.size--;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  [Symbol.iterator](): Iterator<T> {
    let currentNode: CircularDoublyLinkedNode<T> = null;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    return {
      next() {
        if (currentNode === null) {
          currentNode = self.head;
          return { done: currentNode === null, value: currentNode?.value };
        } else {
          currentNode = currentNode.next;
          return { done: currentNode === self.head, value: currentNode?.value };
        }
      },
    };
  }

  clear(): void {
    this.head = null;
    this.size = 0;
  }
}
