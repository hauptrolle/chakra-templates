import { fetchData } from './github'

export interface Stargazers {
  totalCount: number
}

interface Response {
  user: {
    repository: {
      stargazers: Stargazers
    }
  }
}

export const fetchStargazers = async () => {
  const query = `
    query {
      user (login: "hauptrolle") {
        repository(name: "chakra-templates") {
          stargazers {
            totalCount
          }
        }
      }
    }
  `

  const data = await fetchData<Response>(query)

  return data.user.repository.stargazers
}
