import { Comfortaa } from "next/font/google";
import { Metadata } from "next";
import { Providers } from "./providers";
import Topbar from "@/components/topbar";
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
    <html lang="sv" className="graso text-foreground bg-background">
      <body className={`${font.className}`}>
        <Providers>
          <Topbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
