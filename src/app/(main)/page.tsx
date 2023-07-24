import path from 'node:path'
import fs from 'node:fs'

import { fetchStargazers } from '#/services/stargazers'

import { data } from '#/data'

import { getTemplatesCount } from '#/utils/getTemplatesCount'
import { getCategoriesCount } from '#/utils/getCategoriesCount'

import { Hero } from '#/components/HomepageSections/Hero'
import { GettingStarted } from '#/components/HomepageSections/GettingStarted'
import { OpenSource } from '#/components/HomepageSections/OpenSource'
import { ExploreTemplates } from '#/components/HomepageSections/ExploreTemplates'

const fetchHome = async () => {
  const contributorsRcPath = path.resolve('.all-contributorsrc')
  const { contributors } = JSON.parse(fs.readFileSync(contributorsRcPath, 'utf-8'))

  // Get stargazers from GitHub API
  const stargazers = await fetchStargazers()

  // Counts
  const templatesCount = getTemplatesCount(data)
  const categoriesCount = getCategoriesCount(data)

  return { contributors, stargazers, categoriesCount, templatesCount }
}

export const revalidate = 3600

const Home = async () => {
  const { stargazers, contributors, categoriesCount, templatesCount } = await fetchHome()

  return (
    <>
      <Hero categoriesCount={categoriesCount} templatesCount={templatesCount} />
      <GettingStarted />
      <OpenSource
        contributors={contributors}
        stargazers={stargazers}
        categoriesCount={categoriesCount}
        templatesCount={templatesCount}
      />
      <ExploreTemplates templatesCount={templatesCount!} />
    </>
  )
}

export default Home
