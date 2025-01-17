import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";  
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "cykean",
    template: "%s | chronark.com",
  },
  description: "Co-founder of unkey.dev and founder of planetfall.io",
  openGraph: {
    title: "cykean",
    description:
      "Co-founder of unkey.dev and founder of planetfall.io",
    url: "https://chronark.com",
    siteName: "chronark.com",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "./favicon.ico",
  },
};

const inter = Inter({
  subsets: ["latin"],      
  variable: "--font-inter", 
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf", 
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>

      </head>
      <body className={'bg-black'}>
        {children}
      </body>
    </html>
  );
}
