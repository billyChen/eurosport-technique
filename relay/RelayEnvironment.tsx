"use client";

import environment from "@/relay/environment";
import * as React from "react";
import { useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay";

export default function RelayEnvironment({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
