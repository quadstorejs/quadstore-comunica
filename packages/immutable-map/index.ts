
import { empty } from 'typed-immutable-map/dist/HashMap/empty';
import { fromIterable, fromObject } from 'typed-immutable-map/dist/HashMap/from';

import { Map as _Map } from './lib/Map';

const isIterable = (item: any): item is Iterable<unknown> => {
  return Symbol.iterator in item;
};

export function Map<K extends string | number | symbol, V>(data?: Iterable<[K, V]> | Record<K, V>): _Map<K, V> {
  if (data) {
    if (isIterable(data)) {
      return new _Map(fromIterable(data));
    } else {
      return new _Map(fromObject(data));
    }
  } else {
    return new _Map(empty<K, V>());
  }
}
