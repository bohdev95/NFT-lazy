import Roadmap from "@/components/Roadmap/Roadmap";
import FAQ from "@/components/FAQ/FAQ";
import NFTIntroduction from "@/components/NFTIntroduction/NFTIntroduction";
import WelcomeBlock from "@/components/WelcomeBlock/WelcomeBlock";
import Test from "@/components/Test/Test";
import AppBlock from "@/components/AppBlock/AppBlock";
import LazyrActivityBlock from "@/components/LazyrActivityBlock/LazyrActivityBlock";
import WebthreeBlock from "@/components/WebthreeBlock/WebthreeBlock";
import PartnersBlock from "@/components/PartnersBlock/PartnersBlock";
import TeamBlock from "@/components/TeamBlock/TeamBlock";

export default function Home() {
  return (
    <>
      {/* <Test /> */}
      <WelcomeBlock />
      <NFTIntroduction />
      <AppBlock />
      <LazyrActivityBlock />
      <WebthreeBlock />
      <PartnersBlock />
      <Roadmap />
      <TeamBlock />
      <FAQ />
    </>
  );
}
