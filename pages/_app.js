import * as React from "react";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { SSRProvider } from "@react-aria/ssr";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NextUIProvider>
        <Component {...pageProps} />
        <Analytics />
      </NextUIProvider>
    </SSRProvider>
  );
}
