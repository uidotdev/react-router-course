import useTeamNames from '../hooks/useTeamNames'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Loading from './Loading'

export default function Teams () {
  const {
    response: teamNames,
    loading
  } = useTeamNames()

  if (loading === true) {
    return <Loading />
  }

  return (
    <div className='container two-column'>
      <Sidebar
        title='Teams'
        list={teamNames}
      />

      <Outlet />
    </div>
  )
}