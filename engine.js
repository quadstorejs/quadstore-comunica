const __b16bnode115 = new (require('@comunica/logger-void').LoggerVoid)({});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-init/Bus/Init'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-optimize-query-operation/Bus/OptimizeQueryOperation'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-quad-pattern/Bus/RdfResolveQuadPattern'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-sparql-parse/Bus/SparqlParse'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-sparql-serialize/Bus/SparqlSerialize'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess_Bus_ContextPreprocess = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-context-preprocess/Bus/ContextPreprocess'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate_Bus_HttpInvalidate = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http-invalidate/Bus/HttpInvalidate'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-join/Bus/RdfJoin'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation = new (require('@comunica/core').BusIndexed)({
  'actorIdentifierFields': [
    'operationName'
  ],
  'actionIdentifierFields': [
    'operation',
    'type'
  ],
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-operation/Bus/QueryOperation'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_optimize_json_myJoinBgpOptimizer = new (require('@comunica/actor-optimize-query-operation-join-bgp').ActorOptimizeQueryOperationJoinBgp)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-optimize.json#myJoinBgpOptimizer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorOptimizeQueryOperation = new (require('@comunica/mediator-combine-pipeline').MediatorCombinePipeline)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorOptimizeQueryOperation',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_rdfjs_json_myRdfRdfJsSourceQuadPatternResolver = new (require('@comunica/actor-rdf-resolve-quad-pattern-rdfjs-source').ActorRdfResolveQuadPatternRdfJsSource)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-rdfjs.json#myRdfRdfJsSourceQuadPatternResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorResolveQuadPattern = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorResolveQuadPattern',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlParse = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorSparqlParse',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlSerialize = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorSparqlSerialize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const __b0bnode253 = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': '_:b0bnode253',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const __b1bnode253 = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypeFormats',
  'name': '_:b1bnode253',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorContextPreprocess = new (require('@comunica/mediator-combine-pipeline').MediatorCombinePipeline)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorContextPreprocess',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess_Bus_ContextPreprocess
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorHttpInvalidate = new (require('@comunica/mediator-all').MediatorAll)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorHttpInvalidate',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate_Bus_HttpInvalidate
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorRdfJoin',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinActorNestedLoop = new (require('@comunica/actor-rdf-join-nestedloop').ActorRdfJoinNestedLoop)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/join.json#myRdfJoinActorNestedLoop',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'httpRequests',
  'type': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/Mediator/Number/type/TypeMin',
  'ignoreErrors': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorQueryOperation',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myEmptyBgpQueryOperator = new (require('@comunica/actor-query-operation-bgp-empty').ActorQueryOperationBgpEmpty)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myEmptyBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myValuesQueryOperator = new (require('@comunica/actor-query-operation-values').ActorQueryOperationValues)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myValuesQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myQuadPatternQueryOperator = new (require('@comunica/actor-query-operation-quadpattern').ActorQueryOperationQuadpattern)({
  'mediatorResolveQuadPattern': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorResolveQuadPattern,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myQuadPatternQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinMultiActor = new (require('@comunica/actor-rdf-join-multi-smallest').ActorRdfJoinMultiSmallest)({
  'mediatorJoin': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/join.json#myRdfJoinMultiActor',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const urn_comunica_sparqlinit = new (require('@comunica/actor-init-sparql').ActorInitSparql)({
  'mediatorOptimizeQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorOptimizeQueryOperation,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'mediatorSparqlParse': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlParse,
  'mediatorSparqlSerialize': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlSerialize,
  'mediatorSparqlSerializeMediaTypeCombiner': __b0bnode253,
  'mediatorSparqlSerializeMediaTypeFormatCombiner': __b1bnode253,
  'mediatorContextPreprocess': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorContextPreprocess,
  'mediatorHttpInvalidate': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorHttpInvalidate,
  'logger': __b16bnode115,
  'contextKeyShortcuts': {
    'source': '@comunica/bus-rdf-resolve-quad-pattern:source',
    'sources': '@comunica/bus-rdf-resolve-quad-pattern:sources',
    'initialBindings': '@comunica/actor-init-sparql:initialBindings',
    'queryFormat': '@comunica/actor-init-sparql:queryFormat',
    'baseIRI': '@comunica/actor-init-sparql:baseIRI',
    'log': '@comunica/core:log',
    'datetime': '@comunica/actor-http-memento:datetime',
    'queryTimestamp': '@comunica/actor-init-sparql:queryTimestamp',
    'httpProxyHandler': '@comunica/actor-http-proxy:httpProxyHandler',
    'lenient': '@comunica/actor-init-sparql:lenient',
    'httpIncludeCredentials': '@comunica/bus-http:include-credentials',
    'httpAuth': '@comunica/bus-http:auth'
  },
  'name': 'urn:comunica:sparqlinit',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myAltPathOperator = new (require('@comunica/actor-query-operation-path-alt').ActorQueryOperationPathAlt)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myAltPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myInvPathOperator = new (require('@comunica/actor-query-operation-path-inv').ActorQueryOperationPathInv)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myInvPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myLinkPathOperator = new (require('@comunica/actor-query-operation-path-link').ActorQueryOperationPathLink)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myLinkPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myNpsPathOperator = new (require('@comunica/actor-query-operation-path-nps').ActorQueryOperationPathNps)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myNpsPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myOneOrMorePathOperator = new (require('@comunica/actor-query-operation-path-one-or-more').ActorQueryOperationPathOneOrMore)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myOneOrMorePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_mySeqPathOperator = new (require('@comunica/actor-query-operation-path-seq').ActorQueryOperationPathSeq)({
  'mediatorJoin': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#mySeqPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrMorePathOperator = new (require('@comunica/actor-query-operation-path-zero-or-more').ActorQueryOperationPathZeroOrMore)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myZeroOrMorePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrOnePathOperator = new (require('@comunica/actor-query-operation-path-zero-or-one').ActorQueryOperationPathZeroOrOne)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myZeroOrOnePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myAskQueryOperator = new (require('@comunica/actor-query-operation-ask').ActorQueryOperationAsk)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myAskQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myServiceQueryOperator = new (require('@comunica/actor-query-operation-service').ActorQueryOperationService)({
  'forceSparqlEndpoint': false,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myServiceQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySliceQueryOperator = new (require('@comunica/actor-query-operation-slice').ActorQueryOperationSlice)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mySliceQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySingleBgpQueryOperator = new (require('@comunica/actor-query-operation-bgp-single').ActorQueryOperationBgpSingle)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mySingleBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftDeepSmallestBgpQueryOperator = new (require('@comunica/actor-query-operation-bgp-left-deep-smallest').ActorQueryOperationBgpLeftDeepSmallest)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myLeftDeepSmallestBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myConstructQueryOperator = new (require('@comunica/actor-query-operation-construct').ActorQueryOperationConstruct)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myConstructQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDescribeQueryOperator = new (require('@comunica/actor-query-operation-describe-subject').ActorQueryOperationDescribeSubject)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myDescribeQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDistinctQueryOperator = new (require('@comunica/actor-query-operation-distinct-hash').ActorQueryOperationDistinctHash)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myDistinctQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myExtendQueryOperator = new (require('@comunica/actor-query-operation-extend').ActorQueryOperationExtend)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myExtendQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myReducedQueryOperator = new (require('@comunica/actor-query-operation-reduced-hash').ActorQueryOperationReducedHash)({
  'cacheSize': 100,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myReducedQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFilterQueryOperator = new (require('@comunica/actor-query-operation-filter-sparqlee').ActorQueryOperationFilterSparqlee)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myFilterQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFromQueryOperator = new (require('@comunica/actor-query-operation-from-quad').ActorQueryOperationFromQuad)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myFromQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myGroupQueryOperator = new (require('@comunica/actor-query-operation-group').ActorQueryOperationGroup)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myGroupQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myJoinQueryOperator = new (require('@comunica/actor-query-operation-join').ActorQueryOperationJoin)({
  'mediatorJoin': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myJoinQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftJoinQueryOperator = new (require('@comunica/actor-query-operation-leftjoin-left-deep').ActorQueryOperationLeftJoinLeftDeep)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myLeftJoinQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myOrderByQueryOperator = new (require('@comunica/actor-query-operation-orderby-sparqlee').ActorQueryOperationOrderBySparqlee)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myOrderByQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myProjectQueryOperator = new (require('@comunica/actor-query-operation-project').ActorQueryOperationProject)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myProjectQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myUnionQueryOperator = new (require('@comunica/actor-query-operation-union').ActorQueryOperationUnion)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myUnionQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myMinusQueryOperator = new (require('@comunica/actor-query-operation-minus').ActorQueryOperationMinus)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myMinusQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const urn_comunica_my = ({
  'busInit': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init,
  'actors': [
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_optimize_json_myJoinBgpOptimizer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_rdfjs_json_myRdfRdfJsSourceQuadPatternResolver,
    urn_comunica_sparqlinit,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinMultiActor,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinActorNestedLoop,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myAltPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myInvPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myLinkPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myNpsPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myOneOrMorePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_mySeqPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrMorePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrOnePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myAskQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myServiceQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySliceQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myEmptyBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySingleBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftDeepSmallestBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myConstructQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDescribeQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDistinctQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myExtendQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myReducedQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFilterQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFromQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myGroupQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myJoinQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftJoinQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myOrderByQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myProjectQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myUnionQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myMinusQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myValuesQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myQuadPatternQueryOperator
  ]
});
module.exports = urn_comunica_sparqlinit;

