
import { run, crash } from './utils';
import { instantiate } from './instantiation';

run(async () => {

  const { engine } = await instantiate();

  // Queries the store using the queryBindings() method, which
  // returns an RDF/JS stream of bindings for compatible queries
  // (i.e. SELECT queries).

  const queryStr = 'SELECT * WHERE { ?s ?p ?o }';

  const stream = await engine.queryBindings(queryStr);

  stream.on('data', (bindings) => {
    console.log(bindings.toString());
  });

  // Using queryBindings() with a query that returns anything
  // other than bindings will throw

  await engine.queryBindings('DESCRIBE <http://ex#foo>')
    .then(() => {
      crash(new Error('we should not be here'));
    })
    .catch((err) => {
      // Catching the error thrown by queryBindings().
      // We must go through here for this program to terminate correctly.
    })
  ;

});



