
const NOTHING = {};
const MAX_DEPTH = 5;

const isIterable = (item: any): item is Iterable<unknown> => {
  return Symbol.iterator in item;
};

export class ImmutableMap<K extends string, V> implements Iterable<[K, V]>{

  private readonly data: Record<K, V>;
  private readonly depth: number;

  constructor(entries: Iterable<[K, V]> | Record<K, V>, depth?: number) {
    if (isIterable(entries)) {
      const data: Record<K, V> = Object.create(null);
      for (const [key, value] of entries) {
        data[key] = value;
      }
      this.data = data;
      this.depth = 0;
    } else {
      this.data = entries;
      this.depth = typeof depth === 'number' ? depth : 0;
    }
  }

  get size(): number {
    let size = 0;
    for (const _ of this) {
      size += 1;
    }
    return size;
  }

  set(key: K, value: V): ImmutableMap<K, V> {
    let data: Record<K, V>;
    let depth: number;
    if (this.depth < MAX_DEPTH) {
      data = Object.create(this.data);
      depth = this.depth + 1;
    } else {
      data = this.toJS();
      depth = 0;
    }
    data[key] = value;
    return new ImmutableMap<K, V>(data, depth);
  }

  delete(key: K): ImmutableMap<K, V> {
    return this.set(key, NOTHING as V);
  }

  get(key: K): V | undefined {
    const v = this.data[key];
    return v !== NOTHING ? v : undefined;
  }

  has(key: K): boolean {
    return key in this.data && this.data[key] !== NOTHING;
  }

  forEach(iterator: (value: V, key: K) => any) {
    for (const [key, value] of this) {
      iterator(value, key);
    }
  }

  map<M>(iterator: (value: V, key: K) => M): ImmutableMap<K, M> {
    const data: Record<K, M> = Object.create(null);
    for (const [key, value] of this) {
      data[key] = iterator(value, key);
    }
    return new ImmutableMap<K, M>(data, 0);
  }

  filter(iterator: (value: V, key: K) => boolean): ImmutableMap<K, V> {
    const data: Record<K, V> = Object.create(null);
    for (const [key, value] of this) {
      if (iterator(value, key)) {
        data[key] = value;
      }
    }
    return new ImmutableMap<K, V>(data, 0);
  }

  toJS(): Record<K, V> {
    return Object.fromEntries(this) as Record<K, V>;
  }

  toJSON() {
    return this.toJS();
  }

  *keys(): Iterator<K> {
    const { data } = this;
    for (const key in data) {
      if (data[key] !== NOTHING){
        yield key;
      }
    }
  }

  *values(): Iterator<V> {
    const { data } = this;
    let value: V;
    for (const key in data) {
      if ((value = data[key]) !== NOTHING){
        yield value;
      }
    }
  }

  *entries(): Iterator<[K, V]> {
    const { data } = this;
    let value: V;
    for (let key in data) {
      if ((value = data[key]) !== NOTHING){
        yield [key, value];
      }
    }
  }

  [Symbol.iterator]() {
    return this.entries();
  }

}


