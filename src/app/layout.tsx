import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import TanstackProvider from '@/app/components/providers/TanstackProvider';
import { Header } from '@/app/components/Header/Header';
import { Footer } from '@/app/components/Footer/Footer';

const helvetica = localFont({ src: '../fonts/Helvetica.woff2' });

export const metadata: Metadata = {
  title: 'underwood-brwr',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <TanstackProvider>
          <body className={`${helvetica.className} antialiased`}>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            {modal}
            <div className=" container px-[24px] pt-[10px] md:px-[40px] md:pt-[16px]">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </body>
        </TanstackProvider>
      </html>
    </>
  );
}
