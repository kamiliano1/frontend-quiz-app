import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import RecoilProvider from "./RecoilProvider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Frontend quiz app",
  description: "Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilProvider>
        <body className={rubik.className}>{children}</body>
      </RecoilProvider>
    </html>
  );
}
