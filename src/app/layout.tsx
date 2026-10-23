import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jatis Mobile | Software Email Blast untuk Bisnis di Indonesia",
  description:
    "Buat, kelola, kirim, dan evaluasi kampanye email marketing dari satu platform bersama Jatis Mobile.",
  icons: {
    icon: "/assets/logo-jatis-mobile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
