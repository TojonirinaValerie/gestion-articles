// Next
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// UI
import ThemeProvider from "@/components/theme-provider";

import "./globals.css";
import AppQueryClientProvider from "@/components/query-provider";
import DialogInfo from "@/components/modal-info";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Product",
  description: "This is a dashboard page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppQueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <DialogInfo />
          </ThemeProvider>
        </AppQueryClientProvider>
      </body>
    </html>
  );
}
