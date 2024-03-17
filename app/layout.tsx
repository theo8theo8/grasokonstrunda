import { Comfortaa } from "next/font/google";
import { Metadata } from "next";
import "@/styles/globals.css";

const font = Comfortaa({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Gräsö konstrunda 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
