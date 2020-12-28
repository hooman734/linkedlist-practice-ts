import { AbstractCollection } from './abstracts/AbstractCollection';
import { Iterator } from './interfaces/IIterator';
import { Name } from './utilities/ClassDecorators';

class SinglyLinkedNode<T> {
  public value: T;
  public next: SinglyLinkedNode<T>;

  constructor(value: T, next: SinglyLinkedNode<T>) {
    this.value = value;
    this.next = next;
  }
}

@Name("SinglyLinkedList")
export class SinglyLinkedList<T> extends AbstractCollection<T> {
  head: SinglyLinkedNode<T> = null;

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
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  reverse(): void {
    if (this.size <= 1) {
      return;
    }
    let prevNode: SinglyLinkedNode<T> = null;
    let currentNode: SinglyLinkedNode<T> = this.head;
    while (currentNode != null) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
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

  contains(value: T): boolean {
    let temp = this.head;
    for (let i = 0; i < this.size; ++i) {
      if (value === temp.value) return true;
      temp = temp.next;
    }
    return false;
  }
}
