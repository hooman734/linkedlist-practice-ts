import { ICollection } from './interfaces/ICollection';
import { Iterator } from './interfaces/IIterator';

class CircularSinglyLinkedNode<T> {
  public value: T;
  public next: CircularSinglyLinkedNode<T>;

  constructor(value: T, next: CircularSinglyLinkedNode<T>) {
    this.value = value;
    this.next = next;
  }
}

export class CircularSinglyLinkedList<T> implements ICollection<T> {
  private head: CircularSinglyLinkedNode<T> = null;
  private tail: CircularSinglyLinkedNode<T> = null;
  size = 0;

  add(value: T): void {
    this.size++;
    this.head = new CircularSinglyLinkedNode(value, this.head);
    if (this.size === 1) {
      this.tail = this.head;
    }

    this.tail.next = this.head;
  }

  remove(value: T): void {
    let prevNode: CircularSinglyLinkedNode<T> = null;
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
    let currentNode: CircularSinglyLinkedNode<T> = null;
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
