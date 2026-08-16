import "../src/index.css";
import "../src/App.css";
import Providers from "./providers";

export const metadata = {
  title: "Movie Library",
  description: "Browse and discover movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
