/**
 * @generated SignedSource<<88b15582b7e1118c22dc92de36843ec3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlayersListQuery$variables = Record<PropertyKey, never>;
export type PlayersListQuery$data = {
  readonly matches: ReadonlyArray<{
    readonly endTime: string;
    readonly id: string;
    readonly players: ReadonlyArray<{
      readonly firstname: string;
    }>;
    readonly startTime: string;
    readonly winner: {
      readonly firstname: string;
      readonly id: string;
    };
  }>;
  readonly players: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"PlayerCardFragment">;
  }>;
};
export type PlayersListQuery = {
  response: PlayersListQuery$data;
  variables: PlayersListQuery$variables;
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
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Match",
  "kind": "LinkedField",
  "name": "matches",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Player",
      "kind": "LinkedField",
      "name": "winner",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Player",
      "kind": "LinkedField",
      "name": "players",
      "plural": true,
      "selections": [
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startTime",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endTime",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PlayersListQuery",
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
      },
      (v2/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PlayersListQuery",
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastname",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Country",
            "kind": "LinkedField",
            "name": "country",
            "plural": false,
            "selections": [
              (v3/*: any*/)
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
      },
      (v2/*: any*/)
    ]
  },
  "params": {
    "cacheID": "cdafa58ae3b6dd8afe46639203c987f6",
    "id": null,
    "metadata": {},
    "name": "PlayersListQuery",
    "operationKind": "query",
    "text": "query PlayersListQuery {\n  players {\n    id\n    ...PlayerCardFragment\n  }\n  matches {\n    id\n    winner {\n      id\n      firstname\n    }\n    players {\n      firstname\n    }\n    startTime\n    endTime\n  }\n}\n\nfragment PlayerCardFragment on Player {\n  id\n  firstname\n  ...PlayerInformationsFragment\n}\n\nfragment PlayerInformationsFragment on Player {\n  ...PlayerInformationsPictureAndNameFragment\n  stats {\n    ...PlayerInformationsStatsFragment\n  }\n}\n\nfragment PlayerInformationsPictureAndNameFragment on Player {\n  firstname\n  lastname\n  picture {\n    url\n  }\n  country {\n    picture {\n      url\n    }\n  }\n}\n\nfragment PlayerInformationsStatsFragment on Stats {\n  rank\n  points\n  weight\n  height\n  age\n}\n"
  }
};
})();

(node as any).hash = "4e476c3d10482e069cdb17f635c79cda";

export default node;
