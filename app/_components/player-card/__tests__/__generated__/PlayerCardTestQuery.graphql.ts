/**
 * @generated SignedSource<<1bb440523b0bfce637996286e29caa6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlayerCardTestQuery$variables = Record<PropertyKey, never>;
export type PlayerCardTestQuery$data = {
  readonly players: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"PlayerCardFragment">;
  }>;
};
export type PlayerCardTestQuery = {
  response: PlayerCardTestQuery$data;
  variables: PlayerCardTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
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
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Picture"
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v4 = {
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
    "name": "PlayerCardTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Player",
        "kind": "LinkedField",
        "name": "players",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PlayerCardFragment"
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
    "name": "PlayerCardTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Player",
        "kind": "LinkedField",
        "name": "players",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Country",
            "kind": "LinkedField",
            "name": "country",
            "plural": false,
            "selections": [
              (v1/*: any*/)
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
    "cacheID": "7665d30c8291667c6dcec359e5f2ef7a",
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
        "players.country.picture": (v2/*: any*/),
        "players.country.picture.url": (v3/*: any*/),
        "players.firstname": (v3/*: any*/),
        "players.id": (v3/*: any*/),
        "players.lastname": (v3/*: any*/),
        "players.picture": (v2/*: any*/),
        "players.picture.url": (v3/*: any*/),
        "players.stats": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Stats"
        },
        "players.stats.age": (v4/*: any*/),
        "players.stats.height": (v4/*: any*/),
        "players.stats.points": (v4/*: any*/),
        "players.stats.rank": (v4/*: any*/),
        "players.stats.weight": (v4/*: any*/)
      }
    },
    "name": "PlayerCardTestQuery",
    "operationKind": "query",
    "text": "query PlayerCardTestQuery {\n  players {\n    id\n    ...PlayerCardFragment\n  }\n}\n\nfragment PlayerCardFragment on Player {\n  id\n  firstname\n  ...PlayerInformationsFragment\n}\n\nfragment PlayerInformationsFragment on Player {\n  ...PlayerInformationsPictureAndNameFragment\n  stats {\n    ...PlayerInformationsStatsFragment\n  }\n}\n\nfragment PlayerInformationsPictureAndNameFragment on Player {\n  firstname\n  lastname\n  picture {\n    url\n  }\n  country {\n    picture {\n      url\n    }\n  }\n}\n\nfragment PlayerInformationsStatsFragment on Stats {\n  rank\n  points\n  weight\n  height\n  age\n}\n"
  }
};
})();

(node as any).hash = "7734a2cbdbecb45b9b1413e7a1a65ff2";

export default node;
