"use client";

import './globals.css';
import Link from "next/link";
import {Toaster} from "@/components/ui/toaster";
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={` font-mono antialiased`}>
        <nav className="bg-gray-100 p-4">
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/calendar">Calendar</Link></li>
              <li>
                <Link href="/special-request">Special Request</Link>
              </li>
            </ul>
        </nav>
        {children}
        <Toaster/>
        </body>
      </html>
  );
}
