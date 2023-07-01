import "../styles/index.scss";

import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import { getContentfulData } from "@/api/getContentfulData";

export const metadata = {
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
