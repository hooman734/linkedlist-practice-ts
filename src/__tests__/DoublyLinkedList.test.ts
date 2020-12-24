import { DoublyLinkedList } from '../';

describe('DoublyLinkedList', () => {
  let doublyLinkedList: DoublyLinkedList<number>;

  beforeAll(() => {
    doublyLinkedList = new DoublyLinkedList<number>();
  });

  beforeEach(() => {
    doublyLinkedList.clear();
  })

  it('add()', () => {
    [3, 2, 1].forEach(v => {
      doublyLinkedList.add(v);
    });

    expect(doublyLinkedList.size).toBe(3);
    expect(Array.from(doublyLinkedList)).toEqual([1, 2, 3]);
  });

  it('remove()', () => {
    [3, 2, 1].forEach(v => {
      doublyLinkedList.add(v);
    });

    [3, 1, 2, 0].forEach(v => {
      doublyLinkedList.remove(v);
    });

    expect(doublyLinkedList.size).toBe(0);
    expect(Array.from(doublyLinkedList)).toEqual([]);
  });
});
