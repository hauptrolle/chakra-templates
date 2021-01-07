import path from 'path';
import * as fs from 'fs';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { AppLayout } from '@/layout/AppLayout';
import { Hero } from '@/components/HomepageSections/Hero';
import { GettingStarted } from '@/components/HomepageSections/GettingStarted';
import {
  Contributor,
  OpenSource,
} from '@/components/HomepageSections/OpenSource';
import { DiscordBanner } from '@/components/HomepageSections/DiscordBanner';
import { fetchStargazers, Stargazers } from '../api/stargazers';

interface PageProps {
  contributors: Contributor[];
  stargazers: Stargazers;
}

const Home: NextPage<PageProps> = ({ contributors, stargazers }) => {
  return (
    <AppLayout>
      <NextSeo
        title="Chakra Templates - Production-ready Chakra UI Templates for developers"
        description="Production-ready Chakra UI Templates for developers"
      />
      <Hero />
      <GettingStarted />
      <OpenSource contributors={contributors} stargazers={stargazers} />
      <DiscordBanner />
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  // Get contributors from .all-contributorsrc
  const contributorsRcPath = path.resolve('.all-contributorsrc');
  const { contributors } = JSON.parse(
    fs.readFileSync(contributorsRcPath, 'utf-8')
  );

  // Get stargazers from GitHub API
  const stargazers = await fetchStargazers();

  return {
    props: { contributors, stargazers },
  };
};

export default Home;
