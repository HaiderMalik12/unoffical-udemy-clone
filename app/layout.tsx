import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

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
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
