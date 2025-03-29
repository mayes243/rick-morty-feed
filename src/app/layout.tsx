"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import axios from "axios";
import { API_URL } from "@/constants/api-constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

axios.defaults.baseURL = process.env.API_URL || API_URL

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
