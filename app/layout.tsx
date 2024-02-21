import RelayEnvironment from "@/relay/RelayEnvironment";
import "../globals.css";
import { ReduxProvider } from "@/redux/ReduxProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <RelayEnvironment>{children}</RelayEnvironment>
        </ReduxProvider>
      </body>
    </html>
  );
}
