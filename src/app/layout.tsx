import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="mn">
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
