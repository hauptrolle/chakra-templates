import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { title } from 'process';

import {
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_OG_DESCRIPTION,
  SEO_OG_IMAGE,
  SEO_OG_TITLE,
  SEO_TWITTER_DESCRIPTION,
  SEO_TWITTER_IMAGE,
  SEO_TWITTER_TITLE,
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
      <title>{props.title ?? 'Chakra Templates'}</title>
      <meta property="og:title" content={props.ogTitle ?? SEO_OG_TITLE} />
      <meta
        property="og:description"
        content={props.ogDescription ?? SEO_OG_DESCRIPTION}
      />
      <meta property="og:image" content={props.ogImage ?? SEO_OG_IMAGE} />
      <meta property="og:site_name" content={'Chakra Templates'} />
      <meta
        property="og:url"
        content={props.ogUrl ?? `https://chakra-templates.dev${router.asPath}`}
      />
      <meta property="og:type" content={'website'} />
      <meta
        name="twitter:title"
        content={props.twitterTitle ?? SEO_TWITTER_TITLE}
      />
      <meta
        name="twitter:description"
        content={props.twitterDescription ?? SEO_TWITTER_DESCRIPTION}
      />
      <meta
        name="twitter:image"
        content={props.twitterImage ?? SEO_TWITTER_IMAGE}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
