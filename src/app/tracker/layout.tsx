import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { Providers } from "./providers";

export default function Home({ children }) {
  return (
    <html className="dark text-foreground bg-background ">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
