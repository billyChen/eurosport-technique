/**
 * @generated SignedSource<<8f04321572fa8008ab8fedd5d39b9428>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlayerCardFragment$data = {
  readonly country: {
    readonly picture: {
      readonly url: string;
    };
  };
  readonly firstname: string;
  readonly id: string;
  readonly lastname: string;
  readonly picture: {
    readonly url: string;
  };
  readonly stats: {
    readonly age: number;
    readonly height: number;
    readonly points: number;
    readonly rank: number;
    readonly weight: number;
  };
  readonly " $fragmentType": "PlayerCardFragment";
};
export type PlayerCardFragment$key = {
  readonly " $data"?: PlayerCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PlayerCardFragment">;
};

const node: ReaderFragment = (function(){
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PlayerCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
  "type": "Player",
  "abstractKey": null
};
})();

(node as any).hash = "88454c05d2138b31a96a283520590580";

export default node;
