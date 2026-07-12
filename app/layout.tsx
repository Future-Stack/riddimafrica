import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.riddimafrica.com/"), 
  icons: "/logo.svg",
  title: "Riddim Africa - The Home of African Music",
  description:
    "Africa's home for music,merch and artists- where artists and creators getpaid instantly",
  openGraph: {
    title: "Riddim Africa - The Home of African Music",
    description:
      "Africa's home for music,merch and artists- where artists and creators getpaid instantly",
    url: "https://www.riddimafrica.com/",
    siteName: "Riddim Africa",
    images: [
      {
        url: "/og-image.png", // resolved against metadataBase
        width: 1200,
        height: 630,
        alt: "Riddim Africa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riddim Africa - The Home of African Music",
    description:
      "Africa's new home for music, merchandise and entertainment. Stream, own the culture.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}




// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   icons: "/logo.svg", 
//   title: " Riddim Africa - The Home of African Music",
//   description: "Africa's new home for music, merchandise and entertainment. Stream, own the culture.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">{children}</body>
//     </html>
//   );
// }
