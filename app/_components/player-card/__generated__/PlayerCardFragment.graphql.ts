/**
 * @generated SignedSource<<cef2259816f206ae85ac7f4856edd008>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlayerCardFragment$data = {
  readonly firstname: string;
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"PlayerInformationsFragment">;
  readonly " $fragmentType": "PlayerCardFragment";
};
export type PlayerCardFragment$key = {
  readonly " $data"?: PlayerCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PlayerCardFragment">;
};

const node: ReaderFragment = {
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "PlayerInformationsFragment"
    }
  ],
  "type": "Player",
  "abstractKey": null
};

(node as any).hash = "d4531933aff51a3775d15944da68998b";

export default node;
