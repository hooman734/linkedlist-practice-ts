import { SinglyLinkedList } from '../';

describe('SinglyLinkedList', () => {
  let singlyLinkedList: SinglyLinkedList<number>;

  beforeAll(() => {
    singlyLinkedList = new SinglyLinkedList<number>();
  });

  beforeEach(() => {
    singlyLinkedList.clear();
  })

  it('add()', () => {
    [3, 2, 1].forEach(v => {
      singlyLinkedList.add(v);
    });

    expect(singlyLinkedList.size).toBe(3);
    expect(Array.from(singlyLinkedList)).toEqual([1, 2, 3]);
  });

  it('remove()', () => {
    [3, 2, 1].forEach(v => {
      singlyLinkedList.add(v);
    });

    [3, 1, 2].forEach(v => {
      singlyLinkedList.remove(v);
    });

    expect(singlyLinkedList.size).toBe(0);
    expect(Array.from(singlyLinkedList)).toEqual([]);
  });
});
