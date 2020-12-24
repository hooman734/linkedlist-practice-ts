import { CircularDoublyLinkedList } from '../';

describe('CircularDoublyLinkedList', () => {
  let circularDoublyLinkedList: CircularDoublyLinkedList<number>;

  beforeAll(() => {
    circularDoublyLinkedList = new CircularDoublyLinkedList<number>();
  });

  beforeEach(() => {
    circularDoublyLinkedList.clear();
  })

  it('add()', () => {
    [3, 2, 1].forEach(v => {
      circularDoublyLinkedList.add(v);
    });

    expect(circularDoublyLinkedList.size).toBe(3);
    expect(Array.from(circularDoublyLinkedList)).toEqual([1, 2, 3]);
  });

  it('remove()', () => {
    [3, 2, 1].forEach(v => {
      circularDoublyLinkedList.add(v);
    });

    [3, 1, 2].forEach(v => {
      circularDoublyLinkedList.remove(v);
    });

    expect(circularDoublyLinkedList.size).toBe(0);
    expect(Array.from(circularDoublyLinkedList)).toEqual([]);
  });
});
