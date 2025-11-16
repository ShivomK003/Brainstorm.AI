import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import AlertProvider from "@/lib/components/Alert/AlertProvider";

export const metadata: Metadata = {
  title: "Brainstorm AI",
  description: "Next.js + Supabase starter kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen max-w-screen min-h-screen overflow-x-hidden bg-[#1F0438] text-white antialiased">
        <AlertProvider>{children}</AlertProvider>
      </body>
    </html>
  );
}
