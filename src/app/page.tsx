import Article from "@/components/Article";
import Banner from "@/components/Banner";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 flex flex-col">
      <Banner />
      <Title />
      <Article />
    </div>
  );
}
