import TeamLogo from './TeamLogo'
import { Link } from 'react-router-dom'
import useTeamNames from '../hooks/useTeamNames'
import Loading from './Loading'

export default function Home () {
  const {
    loading,
    response: teamNames
  } = useTeamNames()

  return (
    <div className='container'>
      <h1 className='large-header'>
        Hash History Basketball League
      </h1>
      <h3 className='header text-center'>
        Select a team
      </h3>
      <div className='home-grid'>
        {loading === true
          ? <Loading />
          : teamNames.map((id) => (
            <Link key={id} to={`/${id}`}>
              <TeamLogo id={id} width='125px' />
            </Link>
          ))}
      </div>
    </div>
  )
}