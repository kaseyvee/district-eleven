import { getContentfulData } from "@/api/getContentfulData";
import HomepageHero from "@/components/homepage/HomepageHero";
import HomepagePartners from "@/components/homepage/HomepagePartners";
import HomepageStory from "@/components/homepage/HomepageStory";
import useScrollToTop from "@/helpers/useScrollToTop";

export default async function Home() {
  const data: any = await getContentfulData();
  // useScrollToTop();
  // document.title = "District Eleven";


  return (
    <main className="homepage page">
      <HomepageHero data={data} />
      <HomepagePartners />
      <HomepageStory />

    </main>
  );
}
