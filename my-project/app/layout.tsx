import type { Metadata } from "next";
import { Playpen_Sans  } from "next/font/google";
import "./globals.css";


const playpen = Playpen_Sans({
  variable: "--font-playpen-sans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playpen.className}  antialiased bg-blue-950 h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
