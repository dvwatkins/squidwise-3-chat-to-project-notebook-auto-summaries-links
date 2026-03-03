import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat-to-Project Notebook (Auto-Summaries + Links)",
  description: "A lightweight “notebook” that automatically converts each chat into a structured page: summary, decisions, TODOs, code snippets, and links to related files/commits. Users browse the notebook instead of raw chat logs and can reopen the original thread from any note.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
