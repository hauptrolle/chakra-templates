import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { data } from '../../../../data';

interface PreviewPageProps {
  template: string;
  category: string;
  subCategory: string;
}

const PreviewPage: NextPage<PreviewPageProps> = ({
  category,
  subCategory,
  template,
}) => {
  return (
    <>
      <h1>
        {template} {category} {subCategory}
      </h1>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(data)
    .map((category) => {
      return Object.keys(data[category].children)
        .map((subCategory) => [
          {
            params: {
              category,
              subCategory,
              template: 'joinOurTeam',
            },
          },
        ])
        .flat();
    })
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      category: params!.category as string,
      subCategory: params!.subCategory as string,
      template: params!.template as string,
    },
  };
};

export default PreviewPage;
