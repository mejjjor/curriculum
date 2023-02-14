import "~/styles/globals.css";
import { AnalyticsWrapper } from "./Analytics";

export default async function Layout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>CV Érik Aouizerate</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body className="w-screen max-w-full bg-neutral-50 print:bg-white">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
