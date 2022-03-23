
# SPARQL test suite for `quadstore-comunica`

This package facilitates testing of the `quadstore-comunica` query engine by
wrapping it for use with [`rdf-test-suite`][s4], which verifies SPARQL support
against official test suites published by the W3C.

Available tests:

```shell
npm run spec:query    # SPARQL 1.1 / QUERY
npm run spec:update   # SPARQL 1.1 / UPDATE
```
