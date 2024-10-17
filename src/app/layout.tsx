import type { Metadata } from "next";
import "./globals.css";
import { ContextProviderGlobal } from "@/utils/context/_global";
import { Montserrat } from "next/font/google";
const fonts = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "☕ Kape ni Rab",
  description: "Kape ni Rab is a coffee shop in the Philippines.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.className} antialiased`}>
        <ContextProviderGlobal>{children}</ContextProviderGlobal>
      </body>
    </html>
  );
}
