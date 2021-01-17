import path from 'path';
import * as fs from 'fs';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { AppLayout } from '@/layout/AppLayout';
import { Hero } from '@/components/HomepageSections/Hero';
import { GettingStarted } from '@/components/HomepageSections/GettingStarted';
import {
  OpenSource,
  OpenSourceProps,
} from '@/components/HomepageSections/OpenSource';
import { DiscordBanner } from '@/components/HomepageSections/DiscordBanner';
import { fetchStargazers } from '../api/stargazers';
import { templatesList, categoriesNumber } from '@/utils/templatesUtils';

type PageProps = OpenSourceProps & {};

const Home: NextPage<PageProps> = ({
  contributors,
  stargazers,
  categoriesNumber,
  templatesNumber,
}: PageProps) => {
  return (
    <AppLayout>
      <NextSeo
        title="Chakra Templates - Production-ready Chakra UI Templates for developers"
        description="Production-ready Chakra UI Templates for developers"
      />
      <Hero />
      <GettingStarted />
      <OpenSource
        contributors={contributors}
        stargazers={stargazers}
        categoriesNumber={categoriesNumber}
        templatesNumber={templatesNumber}
      />
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
  const templatesNumber = templatesList.length;

  return {
    props: { contributors, stargazers, categoriesNumber, templatesNumber },
  };
};

export default Home;
