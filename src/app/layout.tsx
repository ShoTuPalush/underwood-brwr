import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import TanstackProvider from '@/app/components/providers/TanstackProvider';
import { Header } from '@/app/components/Header/Header';
import { Footer } from '@/app/components/Footer/Footer';

const helvetica = localFont({ src: '../fonts/Helvetica.woff2' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanstackProvider>
        <body className={`${helvetica.className} antialiased`}>
          <div className=" container px-[24px] pt-[10px] md:px-[40px] md:pt-[16px]">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </TanstackProvider>
    </html>
  );
}
