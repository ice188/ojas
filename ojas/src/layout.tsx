
import "../styles/globals.css";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "My App",
//   description: "This is a sample Next.js SPA",
//   other: {
//     "google-site-verification": "ktoOJE5C8EGmF_NefALK4ywlpdREMmJ7U-3gh4hyYwg",
//   },
// };
import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-opensans',
});

export const metadata = {
  title: 'Ojas Message & Spa',
  description: 'Relax and unwind with our services',
};

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
