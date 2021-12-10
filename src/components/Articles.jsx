import { useParams, Outlet } from 'react-router-dom'
import useTeamsArticles from '../hooks/useTeamsArticles'
import Sidebar from './Sidebar'
import Loading from './Loading'

export default function Articles () {
  const { teamId } = useParams()

  const {
    response: articles,
    loading
  } = useTeamsArticles(teamId)

  if (loading === true) {
    return <Loading />
  }

  return (
    <div className='container two-column'>
      <Sidebar
        title='Articles'
        list={articles.map((article) => article.title)}
      />

      <Outlet />
    </div>
  )
}