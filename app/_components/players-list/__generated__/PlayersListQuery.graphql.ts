/**
 * @generated SignedSource<<db5350b433861ee9569281077a3ef784>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
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
    };
  }>;
  readonly players: ReadonlyArray<{
    readonly id: string;
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
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "firstname",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Player",
    "kind": "LinkedField",
    "name": "players",
    "plural": true,
    "selections": [
      (v0/*: any*/)
    ],
    "storageKey": null
  },
  {
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
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Player",
        "kind": "LinkedField",
        "name": "players",
        "plural": true,
        "selections": (v1/*: any*/),
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PlayersListQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PlayersListQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "269cc8ef7a3724d2936a456800f3c10f",
    "id": null,
    "metadata": {},
    "name": "PlayersListQuery",
    "operationKind": "query",
    "text": "query PlayersListQuery {\n  players {\n    id\n  }\n  matches {\n    id\n    winner {\n      firstname\n    }\n    players {\n      firstname\n    }\n    startTime\n    endTime\n  }\n}\n"
  }
};
})();

(node as any).hash = "fb2d9060ddc1a970f70bdda6722a0627";

export default node;
