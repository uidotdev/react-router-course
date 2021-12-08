import useFetch from './useFetch'

export default function useTeamsArticles (team) {
  return useFetch('/articles', 'POST', JSON.stringify({ team }))
}