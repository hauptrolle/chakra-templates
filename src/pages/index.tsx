import { AppLayout } from "@/layout/AppLayout";
import { Hero } from "@/components/HomepageSections/Hero";
import { GettingStarted } from "@/components/HomepageSections/GettingStarted";
import { OpenSource } from "@/components/HomepageSections/OpenSource";
import { DiscordBanner } from "@/components/HomepageSections/DiscordBanner";

const Home = () => {
  return (
    <AppLayout>
      <Hero />
      <GettingStarted />
      <OpenSource />
      <DiscordBanner />
    </AppLayout>
  );
};

export default Home;
