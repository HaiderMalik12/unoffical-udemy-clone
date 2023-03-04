import { Header } from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Udemy Clone Application in Next.js v13',
  description:
    'An Example Application from fullstack web development with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
