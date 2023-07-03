import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

import { getContentfulData } from "@/app/api/getContentfulData";

import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";

import "../styles/index.scss";
 
export const metadata: Metadata = {
  title: 'District Eleven',
  description: 'Late night. Asian-fusion. Snack bar.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: any = await getContentfulData();

  return (
    <html lang="en">
      <body>
        <NavBar data={data} />
        {children}
        <Analytics />
        <Footer data={data} />
      </body>
    </html>
  );
}
