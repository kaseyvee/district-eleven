import { getContentfulData } from "@/api/getContentfulData";

export default async function Home() {
  const { data }: any = await getContentfulData();

  return (
    <main className="home page">
      home
    </main>
  );
}
