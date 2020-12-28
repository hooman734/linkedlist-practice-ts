import { ICollection } from '../interfaces/ICollection';

export abstract class AbstractCollection<T> implements ICollection<T> {
  size = 0;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  abstract [Symbol.iterator](): Iterator<T>;

  abstract add(value: T): void;
  abstract remove(value: T): void;
  abstract clear(): void;
  abstract reverse(): void;
  protected head;
  contains(value: T): boolean {
    let temp = this.head;
    for (let i = 0; i < this.size; ++i) {
      if (value === temp.value) return true;
      temp = temp.next;
    }
    return false;
  }

  containsAll(arr: T[]): boolean {
    for (const v of arr) {
      if (!this.contains(v)) {
        return false;
      }
    }
    return true;
  }

  addAll(arr: T[]): void {
    arr.forEach(v => {
      this.add(v);
    });
  }

  isEmpty(): boolean {
    return (0 === this.size);
  }

  removeAll(arr: T[]): void {
    arr.forEach(v => {
      this.remove(v);
    });
  }

  shuffle(): T[] {
      const answer = [];
      const temp = this.toArray();
      while (temp.length > 0) {
        const index = Math.floor(1.5 * this.size * Math.random()) % temp.length;
        answer.push(temp[index]);
        temp.splice(index, 1);
      }
      return answer;
    }

  toArray(): T[] {
    return Array.from(this);
  }

}
