import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({ weight: ["100", "400", "900"], subsets: ["latin"] });

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
