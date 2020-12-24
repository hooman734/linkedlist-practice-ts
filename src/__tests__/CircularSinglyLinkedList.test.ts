import { CircularSinglyLinkedList } from '../';

describe('CircularSinglyLinkedList', () => {
  let circularSinglyLinkedList: CircularSinglyLinkedList<number>;

  beforeAll(() => {
    circularSinglyLinkedList = new CircularSinglyLinkedList<number>();
  });

  beforeEach(() => {
    circularSinglyLinkedList.clear();
  })

  it('add()', () => {
    [3, 2, 1].forEach(v => {
      circularSinglyLinkedList.add(v);
    });

    expect(circularSinglyLinkedList.size).toBe(3);
    expect(Array.from(circularSinglyLinkedList)).toEqual([1, 2, 3]);
  });

  it('remove()', () => {
    [3, 2, 1].forEach(v => {
      circularSinglyLinkedList.add(v);
    });

    [3, 1, 2, 0].forEach(v => {
      circularSinglyLinkedList.remove(v);
    });

    expect(circularSinglyLinkedList.size).toBe(0);
    expect(Array.from(circularSinglyLinkedList)).toEqual([]);
  });
});
