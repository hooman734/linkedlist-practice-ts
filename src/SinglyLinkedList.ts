import { ICollection } from './interfaces/ICollection';
import { Iterator } from './interfaces/IIterator';

class SinglyLinkedNode<T> {
  public value: T;
  public next: SinglyLinkedNode<T>;

  constructor(value: T, next: SinglyLinkedNode<T>) {
    this.value = value;
    this.next = next;
  }
}

export class SinglyLinkedList<T> implements ICollection<T> {
  private head: SinglyLinkedNode<T> = null;
  size = 0;

  add(value: T): void {
    this.size++;
    this.head = new SinglyLinkedNode(value, this.head);
  }

  remove(value: T): void {
    let prevNode: SinglyLinkedNode<T> = null;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.head = this.head.next;
        } else if (currentNode.next === null) {
          prevNode.next = null;
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
    let currentNode: SinglyLinkedNode<T> = null;
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
