export const API_URL = 'https://api.github.com/graphql'

export type Repo = {
  id: string
  name: string
  url: string
  description: string
  stargazers: {
    totalCount: number
  }
}

export const fetchData = async <R extends any>(query: any) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({ query })
  })

  const { data }: { data: R } = await res.json()
  return data
}
