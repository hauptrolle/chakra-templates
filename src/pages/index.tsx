import { DiscordToast } from "@/components/DiscordToast";
import { AppLayout } from "@/layout/AppLayout";
import { Hero } from "@/components/HomepageSections/Hero";
import { GettingStarted } from "@/components/HomepageSections/GettingStarted";
import { OpenSource } from "@/components/HomepageSections/OpenSource";

const Home = () => {
  return (
    <AppLayout>
      <DiscordToast />
      <Hero />
      <GettingStarted />
      <OpenSource />
    </AppLayout>
  );
};

export default Home;
