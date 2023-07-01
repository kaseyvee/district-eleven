import { getContentfulData } from "@/api/getContentfulData";

export default async function Menu() {
  const { data }: any = await getContentfulData();

  return <main className="menu page">menu</main>;
}
