
import { run } from './utils';
import { instantiate } from './instantiation';

run(async () => {

  const { engine } = await instantiate();

  // Queries the store using the queryBindings() method, which
  // returns an RDF/JS stream of bindings.

  const queryStr = 'SELECT * WHERE { ?s ?p ?o }';

  const query = await engine.query(queryStr);

  // Check whether the result type of this query matches our
  // expectations.

  if (query.resultType !== 'bindings') {
    throw new Error('We should not be here');
  }

  // Execute the query

  const stream = await query.execute();

  // Query execution results in a stream of bindings objects.

  stream.on('data', (bindings) => {
    console.log(bindings.toString());
  });

});



