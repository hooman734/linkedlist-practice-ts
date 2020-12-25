import { ICollection } from '../interfaces/ICollection';
import { SinglyLinkedList } from '../SinglyLinkedList';
import { DoublyLinkedList } from '../DoublyLinkedList';
import { CircularSinglyLinkedList } from '../CircularSinglyLinkedList';
import { CircularDoublyLinkedList } from '../CircularDoublyLinkedList';
import { getName } from '../utilities/classdecorators';

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
  });
}

testCollection(new SinglyLinkedList<number>());
testCollection(new DoublyLinkedList<number>());
testCollection(new CircularSinglyLinkedList<number>());
testCollection(new CircularDoublyLinkedList<number>());

