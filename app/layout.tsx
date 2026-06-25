import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Refinement: Elevate Your AI Video Quality.",
  description:
    "A premium editorial resource for AI prompt refinement, AI video generation, cinematic prompting, and creative workflow systems.",
  icons: {
    icon: "/mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
