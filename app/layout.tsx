import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const work = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "A minimist figma clone using fabric and liveblock  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${work.className} bg-primary-grey-100`}>
        <Room>
          {children}
        </Room>
      
      </body>
    </html>
  );
}
