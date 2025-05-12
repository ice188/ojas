import "../globals.css";
import { Averia_Serif_Libre } from 'next/font/google';

const averia = Averia_Serif_Libre({
  subsets: ['latin'],
  weight: ['700'], 
  variable: '--font-averia',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={averia.variable}>
      <body>{children}</body>
    </html>
  )
}
