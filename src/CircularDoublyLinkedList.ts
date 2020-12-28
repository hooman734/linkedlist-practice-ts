import { AbstractCollection } from './abstracts/AbstractCollection';
import { Name } from './utilities/ClassDecorators';

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

@Name("CircularDoublyLinkedList")
export class CircularDoublyLinkedList<T> extends AbstractCollection<T> {

  private head: CircularDoublyLinkedNode<T> = null;
  private tail: CircularDoublyLinkedNode<T> = null;
  private size = 0;

  add(value: T): void {
    this.size++;
    this.head = new CircularDoublyLinkedNode(this.tail, value, this.head);
    if (this.size === 1) {
      this.tail = this.head;
    }

    this.tail.next = this.head;
    this.tail.prev = this.head;
  }

  remove(value: T): void {
    let prevNode: CircularDoublyLinkedNode<T> = null;
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
          this.head.prev = prevNode;
          this.tail = prevNode;
        } else {
          prevNode.next = currentNode.next;
          currentNode.next.prev = prevNode;
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
    let prevNode: CircularDoublyLinkedNode<T> = this.tail;
    let currentNode: CircularDoublyLinkedNode<T> = this.head;
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
    this.head = this.tail = null;
    this.size = 0;
  }
}
