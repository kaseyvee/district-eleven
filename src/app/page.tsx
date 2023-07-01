import { getContentfulData } from "@/api/getContentfulData";
import HomepageHero from "@/components/homepage/HomepageHero";
import HomepagePartners from "@/components/homepage/HomepagePartners";
import HomepageStory from "@/components/homepage/HomepageStory";

export default async function Home() {
  const data: any = await getContentfulData();

  return (
    <main className="homepage page">
      <HomepageHero data={data} />
      <HomepagePartners />
      <HomepageStory />
    </main>
  );
}
