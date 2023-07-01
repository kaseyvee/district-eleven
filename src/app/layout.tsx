import { Metadata } from 'next'

import { getContentfulData } from "@/api/getContentfulData";

import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";

import "../styles/index.scss";
 
export const metadata: Metadata = {
  title: 'Menu | District Eleven',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: any = await getContentfulData();

  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.png'/>
      </head>
      <body>
        <NavBar data={data} />
        {children}
        <Footer data={data} />
      </body>
    </html>
  );
}
