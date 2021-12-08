import useFetch from './useFetch'

export default function usePlayers (team) {
  return useFetch('/players', 'POST', JSON.stringify({ team }))
}