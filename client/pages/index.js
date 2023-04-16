import { useSession } from "next-auth/react";
import CategorySection from "../components/home/landing/CategorySection";
import HeroContent from "../components/home/landing/HeroContent";
import OurStory from "../components/home/landing/OurStory";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  // const productQuery = useQuery({
  //   queryKey: ["products"],
  //   queryFn: FetchProducts,
  // });

  // console.log(productQuery.data);
  return (
    <main>
      <HeroContent />
      <CategorySection />
      <OurStory />
    </main>
  );
}
