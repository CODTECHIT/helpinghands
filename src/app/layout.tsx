import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "../styles.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Helping Hands Foundation",
  description:
    "Helping Hands Foundation — together, we can change lives through education, health, women empowerment and environment programmes.",
  authors: [{ name: "Helping Hands Foundation" }],
  openGraph: {
    type: "website",
    title: "Helping Hands Foundation",
    description:
      "Helping Hands Foundation — together, we can change lives through education, health, women empowerment and environment programmes.",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen bg-background font-sans text-foreground antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
