/**
 * @generated SignedSource<<9990e22a4fd3605b05e2e470b3486bcb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlayerInformationsFragment$data = {
  readonly stats: {
    readonly " $fragmentSpreads": FragmentRefs<"PlayerInformationsStatsFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"PlayerInformationsPictureAndNameFragment">;
  readonly " $fragmentType": "PlayerInformationsFragment";
};
export type PlayerInformationsFragment$key = {
  readonly " $data"?: PlayerInformationsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PlayerInformationsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PlayerInformationsFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PlayerInformationsPictureAndNameFragment"
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

(node as any).hash = "47351597e8eeafcf1ddb80836a768573";

export default node;
