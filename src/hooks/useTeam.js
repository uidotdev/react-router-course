import useFetch from './useFetch'

export default function useTeam (team) {
  return useFetch('/team', 'POST', JSON.stringify({ team }))
}