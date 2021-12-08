import useFetch from './useFetch'

export default function useTeamNames () {
  return useFetch('/teams', 'GET')
}