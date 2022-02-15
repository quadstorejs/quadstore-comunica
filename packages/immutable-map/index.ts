
import { ImmutableMap } from './lib/ImmutableMap';

export function Map<K extends string, V>(data?: ImmutableMap<K, V> | Iterable<[K, V]> | Record<K, V>) {
  return new ImmutableMap(data || Object.create(null), 0);
}
