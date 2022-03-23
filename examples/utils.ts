
import type { Quad } from 'rdf-js';

/**
 * Crashes the process.
 */
export const crash = (err: Error) => {
  console.error(err);
  process.exit(1);
};

/**
 * Helper function to run async main-like functions.
 * Crashes the process with exit code 1 whenever an error
 * is encountered.
 */
export const run = (fn: () => Promise<any>): void => {
  fn().catch((err) => {
    crash(err);
  });
};

/**
 * Returns a string representation of the provided quad.
 */
export const quadToString = (quad: Quad): string => {
  return `${quad.subject.value} ${quad.predicate.value} ${quad.object.value} ${quad.graph.value}`;
};


export interface ArrayfyReadable<T> {
  read(): T | null;
  on(event: 'data', handler: (item: T) => any): any;
  on(event: 'error', handler: (err: Error) => any): any;
  on(event: 'end', handler: () => any): any;
}

/**
 * Consumes a readable-like object into an array of items.
 */
export const arrayfy = <T>(readable: ArrayfyReadable<T>): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    const buf: T[] = [];
    readable.on('data', (item) => {
      buf.push(item);
    });
    readable.on('error', (err) => {
      reject(err);
    });
    readable.on('end', () => {
      resolve(buf);
    });
  });
};
