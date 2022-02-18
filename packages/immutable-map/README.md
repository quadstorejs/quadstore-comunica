
# immutable-map

This package provides an alternative implementation of [immutable's Map][1],
tailored for use within Comunica.

The goal for this alternative implementation is to maintain similar performance
levels while drastically reducing the size of the package itself when compared
to `immutable`.

The performance profile of this alternative implementation tracks that of 
immutable only for relatively low numbers of keys and operations. This package
is not a universal replacement for immutable's Map.

[1]: https://immutable-js.com/docs/v4.0.0/Map/
