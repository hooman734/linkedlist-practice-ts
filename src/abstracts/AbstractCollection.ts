import { ICollection } from '../interfaces/ICollection';

abstract class AbstractCollection<T> implements ICollection<T> {
  size: number;

  abstract [Symbol.iterator](): Iterator<T>;

  add(value: T): void;
  remove(value: T): void;
  addAll(arr: T[]): void;
  clear(): void;
  reverse(): void;
  contains(value: T): boolean;

  containsAll(arr: T[]): boolean {
    for (const v of arr) {
      if (!this.contains(v)) {
        return false;
      }
    }
    return true;
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
