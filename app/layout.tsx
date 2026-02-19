import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import UserSync from '@/components/UserSync';
import TanStackProvider from '@/components/providers/TanStackProvider';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'E-Doctor - AI powered medical assistant',
    description:
        'Get instant medical advise through voice calls with our AI assistant. Available 24/7',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <TanStackProvider>
            <ClerkProvider
                appearance={{
                    // 1. Set the base theme to dark so Clerk handles internal contrast
                    variables: {
                        // 2. Reference your raw CSS variables directly
                        colorPrimary: 'var(--primary)',
                        colorBackground: 'var(--card)',
                        colorText: 'var(--foreground)',
                        colorTextSecondary: 'var(--foreground)',
                        colorInputBackground: 'var(--input)',
                        colorInputText: 'var(--foreground)',
                    },
                }}
            >
                <html lang="en">
                    <body
                        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
                    >
                        <UserSync />
                        {children}
                    </body>
                </html>
            </ClerkProvider>
        </TanStackProvider>
    );
}
