import path from 'path';
import * as fs from 'fs';
import { GetStaticProps, NextPage } from 'next';

import { AppLayout } from '@/layout/AppLayout';
import { Hero } from '@/components/HomepageSections/Hero';
import { GettingStarted } from '@/components/HomepageSections/GettingStarted';
import {
  Contributor,
  OpenSource,
} from '@/components/HomepageSections/OpenSource';
import { DiscordBanner } from '@/components/HomepageSections/DiscordBanner';

interface PageProps {
  contributors: Contributor[];
}

const Home: NextPage<PageProps> = ({ contributors }) => {
  return (
    <AppLayout>
      <Hero />
      <GettingStarted />
      <OpenSource contributors={contributors} />
      <DiscordBanner />
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const contributorsRcPath = path.resolve('.all-contributorsrc');
  const { contributors } = JSON.parse(
    fs.readFileSync(contributorsRcPath, 'utf-8')
  );

  return {
    props: { contributors },
  };
};

export default Home;
