
interface Readable<T> {
  on(event: 'data', cb: (item: T) => void): any;
  on(event: 'end', cb: () => void): any;
  on(event: 'error', cb: (err: Error) => void): any;
}

export const streamToArray = <T>(source: Readable<T>): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    const items: T[] = [];
    source.on('data', (item) => {
      items.push(item);
    });
    source.on('end', () => {
      resolve(items);
    });
    source.on('error', (err) => {
      reject(err);
    });
  });
};
