/**
 * @generated SignedSource<<ec1832ad7073674286a534c5b7510763>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlayerInformationsTestQuery$variables = Record<PropertyKey, never>;
export type PlayerInformationsTestQuery$data = {
  readonly players: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"PlayerInformationsFragment">;
  }>;
};
export type PlayerInformationsTestQuery = {
  response: PlayerInformationsTestQuery$data;
  variables: PlayerInformationsTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "Picture",
  "kind": "LinkedField",
  "name": "picture",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v1 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Picture"
},
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PlayerInformationsTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Player",
        "kind": "LinkedField",
        "name": "players",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PlayerInformationsFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PlayerInformationsTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Player",
        "kind": "LinkedField",
        "name": "players",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstname",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastname",
            "storageKey": null
          },
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Country",
            "kind": "LinkedField",
            "name": "country",
            "plural": false,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Stats",
            "kind": "LinkedField",
            "name": "stats",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rank",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "points",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "weight",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "height",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "age",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "03a110169bf62dacbf93a1a23bb2268e",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "players": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "Player"
        },
        "players.country": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Country"
        },
        "players.country.picture": (v1/*: any*/),
        "players.country.picture.url": (v2/*: any*/),
        "players.firstname": (v2/*: any*/),
        "players.lastname": (v2/*: any*/),
        "players.picture": (v1/*: any*/),
        "players.picture.url": (v2/*: any*/),
        "players.stats": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Stats"
        },
        "players.stats.age": (v3/*: any*/),
        "players.stats.height": (v3/*: any*/),
        "players.stats.points": (v3/*: any*/),
        "players.stats.rank": (v3/*: any*/),
        "players.stats.weight": (v3/*: any*/)
      }
    },
    "name": "PlayerInformationsTestQuery",
    "operationKind": "query",
    "text": "query PlayerInformationsTestQuery {\n  players {\n    ...PlayerInformationsFragment\n  }\n}\n\nfragment PlayerInformationsFragment on Player {\n  firstname\n  lastname\n  picture {\n    url\n  }\n  country {\n    picture {\n      url\n    }\n  }\n  stats {\n    ...PlayerInformationsStatsFragment\n  }\n}\n\nfragment PlayerInformationsStatsFragment on Stats {\n  rank\n  points\n  weight\n  height\n  age\n}\n"
  }
};
})();

(node as any).hash = "d794457a7fa7e644a263eec1a2e0ea21";

export default node;
