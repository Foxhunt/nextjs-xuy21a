import "./globals.css";
import { Providers } from "./providers";

export default function Home({ children }) {
  return (
    <html className="dark">
      <body className="text-foreground bg-background min-h-screen p-4">
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
