/**
 * @generated SignedSource<<a6a122bb0b642317d98e3602bdf54a38>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlayerInformationsStatsFragment$data = {
  readonly age: number;
  readonly height: number;
  readonly points: number;
  readonly rank: number;
  readonly weight: number;
  readonly " $fragmentType": "PlayerInformationsStatsFragment";
};
export type PlayerInformationsStatsFragment$key = {
  readonly " $data"?: PlayerInformationsStatsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PlayerInformationsStatsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PlayerInformationsStatsFragment",
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
  "type": "Stats",
  "abstractKey": null
};

(node as any).hash = "5ac86ea0b37d5ba4ff8c2183344d3d18";

export default node;
