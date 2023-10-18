import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Virtual Escape Room',
  description: 'An online platform offering immersive escape room experiences. Features dynamic scenarios, challenging puzzles, and real-time collaboration. Built with Next.js, TypeScript, Prisma, and more. Dive in and unlock the adventure!',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body className={inter.className}>
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {children}</main>
    </body>
    </html>
  );
}
