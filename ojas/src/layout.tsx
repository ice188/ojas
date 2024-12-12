
import "../styles/globals.css";

import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} font-nunito`}>
      <body>{children}</body>
    </html>
  );
}
