
# uuid

This package is used as a replacement for the well-known [`uuid`][1] package by 
`quadstore-comunica`'s build system.

This package only exports a `v4()` function, which is the only function amongst
all of `uuid`'s exports that Comunica actually uses.

This package is not published to NPM.

[1]: https://www.npmjs.com/package/uuid
