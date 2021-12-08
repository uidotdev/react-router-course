import useFetch from './useFetch'

export default function usePlayer (player) {
  return useFetch(`/players/${player}`, 'POST')
}