import "./globals.css";
import { Providers } from "./providers";

export default function Home({ children }) {
  return (
    <html className="dark text-foreground bg-background ">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
