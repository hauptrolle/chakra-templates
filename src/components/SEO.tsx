import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { title } from 'process';

import {
  SEO_TITLE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_OG_IMAGE,
  SEO_TWITTER_IMAGE,
} from '../constants';

export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

export const SEO = (props: SEOProps) => {
  const router = useRouter();

  return (
    <Head>
      <meta name="description" content={props.description ?? SEO_DESCRIPTION} />
      <meta name="keywords" content={props.keywords ?? SEO_KEYWORDS} />
      <title>{props.title ?? SEO_TITLE}</title>
      <meta property="og:title" content={props.title ?? SEO_TITLE} />
      <meta
        property="og:description"
        content={props.description ?? SEO_DESCRIPTION}
      />
      <meta property="og:image" content={props.ogImage ?? SEO_OG_IMAGE} />
      <meta property="og:site_name" content={SEO_TITLE} />
      <meta
        property="og:url"
        content={props.ogUrl ?? `https://chakra-templates.dev${router.asPath}`}
      />
      <meta property="og:type" content={'website'} />
      <meta name="twitter:title" content={props.title ?? SEO_TITLE} />
      <meta
        name="twitter:description"
        content={props.description ?? SEO_DESCRIPTION}
      />
      <meta
        name="twitter:image"
        content={props.twitterImage ?? SEO_TWITTER_IMAGE}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
