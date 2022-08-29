
import { run, crash, quadToString } from './utils';
import { instantiate } from './instantiation';

run(async () => {

  const { engine } = await instantiate();

  // Queries the store using the queryQuads() method, which
  // returns an RDF/JS stream of quads for compatible queries
  // (i.e. DESCRIBE queries).

  const queryStr = 'DESCRIBE <http://ex#foo>';

  const stream = await engine.queryQuads(queryStr);

  stream.on('data', (quad) => {
    console.log(quadToString(quad));
  });

  // Using queryQuads() with a query that returns anything
  // other than quads will throw

  await engine.queryQuads('SELECT * WHERE { ?s ?p ?o }')
    .then(() => {
      crash(new Error('we should not be here'));
    })
    .catch((err) => {
      // Catching the error thrown by queryQuads().
      // We must go through here for this program to terminate correctly.
    })
  ;

});



