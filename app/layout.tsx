import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vigilant — Your Mac bites back",
  description:
    "A macOS menu bar app that triggers a jumpscare when someone touches your unattended Mac — capturing their face via the front camera.",
  openGraph: {
    title: "Vigilant — Your Mac bites back",
    description:
      "Arm your Mac. Catch intruders red-handed. $4.99 one-time.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
