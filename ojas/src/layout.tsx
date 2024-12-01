
import "../styles/globals.css";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "My App",
//   description: "This is a sample Next.js SPA",
//   other: {
//     "google-site-verification": "ktoOJE5C8EGmF_NefALK4ywlpdREMmJ7U-3gh4hyYwg",
//   },
// };


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
