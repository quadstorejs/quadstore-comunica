
import { HashMap } from 'typed-immutable-map/dist/HashMap/HashMap';
import { has } from 'typed-immutable-map/dist/HashMap/has';
import { get } from 'typed-immutable-map/dist/HashMap/get';
import { set } from 'typed-immutable-map/dist/HashMap/set';
import { forEach } from 'typed-immutable-map/dist/HashMap/forEach';
import { map } from 'typed-immutable-map/dist/HashMap/map';
import { filter } from 'typed-immutable-map/dist/HashMap/filter';
import { remove } from 'typed-immutable-map/dist/HashMap/remove';
import { entries } from 'typed-immutable-map/dist/HashMap/entries';
import { values } from 'typed-immutable-map/dist/HashMap/values';
import { keys } from 'typed-immutable-map/dist/HashMap/keys';
import { size } from 'typed-immutable-map/dist/HashMap/size';

export class Map<K, V> implements Iterable<[K, V]>{

  private readonly hashmap: HashMap<K, V>;

  constructor(entries: HashMap<K, V>) {
    this.hashmap = entries;
  }

  get size(): number {
    return size(this.hashmap);
  }

  set(key: K, value: V): Map<K, V> {
    return new Map<K, V>(set(key, value, this.hashmap));
  }

  delete(key: K): Map<K, V> {
    return new Map<K, V>(remove(key, this.hashmap));
  }

  get(key: K): V | undefined {
    return get(key, this.hashmap);
  }

  has(key: K): boolean {
    return has(key, this.hashmap);
  }

  forEach(iterator: (value: V, key: K) => any) {
    forEach(iterator, this.hashmap);
  }

  map<M>(iterator: (value: V, key: K) => M): Map<K, M> {
    return new Map<K, M>(map(iterator, this.hashmap));
  }

  filter(iterator: (value: V, key: K) => boolean): Map<K, V> {
    return new Map<K, V>(filter(iterator, this.hashmap));
  }

  toJS(): Record<string, V> {
    return Object.fromEntries(this);
  }

  toJSON(): Record<string, V> {
    return this.toJS();
  }

  keys(): Iterator<K> {
    return keys(this.hashmap);
  }

  values(): Iterator<V> {
    return values(this.hashmap);
  }

  entries(): Iterator<[K, V]> {
    return entries(this.hashmap);
  }

  [Symbol.iterator]() {
    return this.entries();
  }

}


