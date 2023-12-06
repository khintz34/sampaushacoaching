import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["100", "400", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam Pausha Coaching",
  description: "Fitness coaching done by USA Triathalon certified Sam Pausha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
