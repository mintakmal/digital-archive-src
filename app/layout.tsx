import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/components/auth-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital Archive - Premium Digital Files & Resources',
  description: 'Browse, purchase, and download premium digital files including PDFs, ZIPs, and more. Secure, fast, and reliable digital archive.',
  keywords: 'digital files, PDF download, ZIP files, digital archive, premium resources',
  authors: [{ name: 'Digital Archive Team' }],
  openGraph: {
    title: 'Digital Archive - Premium Digital Files',
    description: 'Browse and download premium digital files securely',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
              {children}
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}