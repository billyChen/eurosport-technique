import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { RelayEnvironmentProvider } from "react-relay";
import { RelayMockEnvironment } from "relay-test-utils/lib/RelayModernMockEnvironment";

type Props = {
  children: React.ReactNode;
  mockEnvironment: RelayMockEnvironment;
};

export const TestProviders = ({ children, mockEnvironment }: Props) => {
  return (
    <Provider store={store}>
      <RelayEnvironmentProvider environment={mockEnvironment}>
        {children}
      </RelayEnvironmentProvider>
    </Provider>
  );
};
