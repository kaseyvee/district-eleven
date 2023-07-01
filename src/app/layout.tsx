import "../styles/index.scss";

import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import { getContentfulData } from "@/api/getContentfulData";

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
        <Footer data={data} />
      </body>
    </html>
  );
}
