
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

  // Get the total count of objects we can expect when executing
  // the query.

  const { availableOrders } = await query.metadata({ availableOrders: true });

  console.log('available orders', availableOrders);

});
