import { ICollection } from '../interfaces/ICollection';
import { SinglyLinkedList } from '../SinglyLinkedList';
import { DoublyLinkedList } from '../DoublyLinkedList';
import { CircularSinglyLinkedList } from '../CircularSinglyLinkedList';
import { CircularDoublyLinkedList } from '../CircularDoublyLinkedList';
import { getName } from '../utilities/ClassDecorators';

function testCollection<T extends ICollection<number>>(collection: T) {

  // eslint-disable-next-line jest/valid-title
  describe(getName(collection), () => {
    beforeEach(() => {
      collection.clear();
    })

    it('add()', () => {
      [3, 2, 1].forEach(v => {
        collection.add(v);
      });

      expect(collection.size).toBe(3);
      expect(Array.from(collection)).toEqual([1, 2, 3]);
    });

    it('remove()', () => {
      [3, 2, 1].forEach(v => {
        collection.add(v);
      });

      [3, 1, 2, 0].forEach(v => {
        collection.remove(v);
      });

      expect(collection.size).toBe(0);
      expect(Array.from(collection)).toEqual([]);
    });

    it('reverse()', () => {
      [3, 2, 1].forEach(v => {
        collection.add(v);
      });

      collection.reverse();

      expect(collection.size).toBe(3);
      expect(Array.from(collection)).toEqual([3, 2, 1]);
    });

    it('addAll()', () => {
      [3, 2, 1].forEach(v => {
        collection.add(v);
      });

      collection.addAll([6, 5, 4]);

      expect(collection.size).toBe(6);
      expect(Array.from(collection)).toEqual([4, 5, 6, 1, 2, 3]);
    });

    it('contains()', () => {
      [3, 2, 1].forEach(v => {
        collection.add(v);
      });

      expect(collection.contains(3)).toBe(true);
      expect(collection.contains(4)).toBe(false);
    });

    it('removeAll()', () => {
      [6, 5, 4, 3, 2, 1].forEach(v => {
        collection.add(v);
      });

      collection.removeAll([1, 4, 6]);

      expect(collection.size).toBe(3);
      expect(Array.from(collection)).toEqual([2, 3, 5]);
    });

    it('containsAll()', () => {

      [6, 5, 4, 3, 2, 1].forEach(v => {
        collection.add(v);
      });

      expect(collection.containsAll([4, 1, 3, 5, 6, 2])).toBe(true);
      expect(collection.containsAll([1, 2])).toBe(true);
      expect(collection.containsAll([1, 2, 7])).toBe(false);
    });

    it('isEmpty()', () => {

      [6, 5, 4, 3, 2, 1].forEach(v => {
        collection.add(v);
      });

      expect(collection.isEmpty()).toBe(false);
      collection.clear();
      expect(collection.isEmpty()).toBe(true);
    });

    it('toArray()', () => {
      [6, 5, 4, 3, 2, 1].forEach(v => {
        collection.add(v);
      });

      expect(collection.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('shuffle()', () => {
      [6, 5, 4, 3, 2, 1].forEach(v => {
        collection.add(v);
      });

      const result = collection.shuffle();
      expect(result.indexOf(1)).toBeGreaterThanOrEqual(0);
      expect(result.indexOf(2)).toBeGreaterThanOrEqual(0);
      expect(result.indexOf(3)).toBeGreaterThanOrEqual(0);
      expect(result.indexOf(4)).toBeGreaterThanOrEqual(0);
      expect(result.indexOf(5)).toBeGreaterThanOrEqual(0);
      expect(result.indexOf(6)).toBeGreaterThanOrEqual(0);
      expect(result.length).toBe(6);
    });

    it('sort()', () => {
      [2, 1, 6, 4, 5, 3].forEach(v => {
        collection.add(v);
      });
      const result = collection.sort();
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

  });
}

testCollection(new SinglyLinkedList<number>());
testCollection(new DoublyLinkedList<number>());
testCollection(new CircularSinglyLinkedList<number>());
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
testCollection(new CircularDoublyLinkedList<number>());

