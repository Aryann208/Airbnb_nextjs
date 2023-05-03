import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData, cardsData }) {
  console.log(exploreData);
  return (
    <>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-2xl lg:text-4xl font-semibold pb-5 ">
            Explore Nearby
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={location}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className=" flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://github.com/Aryann208/Store/blob/main/illustrationLandscape.jpeg?raw=true"
          title="The Sunset"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://raw.githubusercontent.com/Aryann208/Store/main/airbnbHome.json"
  ).then((res) => res.json());
  const cardsData = await fetch(
    "https://raw.githubusercontent.com/Aryann208/Store/main/airbnbAnywhere.json"
  ).then((res) => res.json());
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
