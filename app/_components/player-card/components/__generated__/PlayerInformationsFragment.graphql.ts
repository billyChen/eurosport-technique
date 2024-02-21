/**
 * @generated SignedSource<<e8c085a78011ba4143cc81e75919e849>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlayerInformationsFragment$data = {
  readonly country: {
    readonly picture: {
      readonly url: string;
    };
  };
  readonly firstname: string;
  readonly lastname: string;
  readonly picture: {
    readonly url: string;
  };
  readonly stats: {
    readonly " $fragmentSpreads": FragmentRefs<"PlayerInformationsStatsFragment">;
  };
  readonly " $fragmentType": "PlayerInformationsFragment";
};
export type PlayerInformationsFragment$key = {
  readonly " $data"?: PlayerInformationsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PlayerInformationsFragment">;
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
  "name": "PlayerInformationsFragment",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "PlayerInformationsStatsFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Player",
  "abstractKey": null
};
})();

(node as any).hash = "faddf7df95be02bd392a822b2cb7caa8";

export default node;
