export interface IteratorResult<T> {
    done: boolean;
    value: T;
}

export interface Iterator<T> {
    next(): IteratorResult<T>;
}
