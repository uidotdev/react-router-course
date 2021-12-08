import useFetch from './useFetch'

export default function useArticle (args) {
  return useFetch('/article', 'POST', JSON.stringify(args))
}