import { AbstractCollection } from './abstracts/AbstractCollection';
import { Iterator } from './interfaces/IIterator';
import { Name } from './utilities/ClassDecorators';

class CircularSinglyLinkedNode<T> {
  public value: T;
  public next: CircularSinglyLinkedNode<T>;

  constructor(value: T, next: CircularSinglyLinkedNode<T>) {
    this.value = value;
    this.next = next;
  }
}


@Name('CircularSinglyLinkedList')
export class CircularSinglyLinkedList<T> extends AbstractCollection <T> {
  head: CircularSinglyLinkedNode<T> = null;
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
    if (currentNode === null) {
      return;
    }
    do {
      if (currentNode.value === value) {
        if (currentNode.next === currentNode) {
          this.head = this.tail = null;
        } else if (currentNode === this.head) {
          this.head = this.head.next;
          this.tail.next = this.head;
        } else if (currentNode === this.tail) {
          prevNode.next = this.head;
          this.tail = prevNode;
        } else {
          prevNode.next = currentNode.next;
        }
        this.size--;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    } while (currentNode !== this.head);
  }

  reverse(): void {
    if (this.size <= 1) {
      return;
    }
    let prevNode: CircularSinglyLinkedNode<T> = null;
    let currentNode: CircularSinglyLinkedNode<T> = this.head;
    do {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    } while (currentNode !== this.head);

    this.head.next = prevNode;
    this.head = prevNode;
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
    this.head = this.tail = null;
    this.size = 0;
  }
}
