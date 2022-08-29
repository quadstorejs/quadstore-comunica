import { HashMap } from 'typed-immutable-map/dist/HashMap/HashMap';
export declare class Map<K, V> implements Iterable<[K, V]> {
    private readonly hashmap;
    constructor(entries: HashMap<K, V>);
    get size(): number;
    set(key: K, value: V): Map<K, V>;
    delete(key: K): Map<K, V>;
    get(key: K): V | undefined;
    has(key: K): boolean;
    forEach(iterator: (value: V, key: K) => any): void;
    map<M>(iterator: (value: V, key: K) => M): Map<K, M>;
    filter(iterator: (value: V, key: K) => boolean): Map<K, V>;
    toJS(): Record<string, V>;
    toJSON(): Record<string, V>;
    keys(): Iterator<K>;
    values(): Iterator<V>;
    entries(): Iterator<[K, V]>;
    [Symbol.iterator](): Iterator<[K, V], any, undefined>;
}
