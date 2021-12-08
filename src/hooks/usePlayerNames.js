import useFetch from './useFetch'

export default function usePlayerNames (team) {
  return useFetch('/players?filter=names', 'POST', JSON.stringify({ team }))
}