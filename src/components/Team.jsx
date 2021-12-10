import {
  Link,
  useParams,
} from 'react-router-dom'
import useTeam from '../hooks/useTeam'
import TeamLogo from './TeamLogo'

export default function Team () {
  const { teamId } = useParams()
  const {
    loading,
    response: team
  } = useTeam(teamId)

  if (loading === true){
    return null
  }

  return (
    <div className='panel'>
      <div style={{width: '100%'}}>
        <TeamLogo id={team.id} className='center' />
        <h1 className='medium-header'>{team.name}</h1>
        <ul className='info-list row'>
          <li>Est.<div>{team.established}</div></li>
          <li>Manager<div>{team.manager}</div></li>
          <li>Coach<div>{team.coach}</div></li>
        </ul>
        <Link
          className='center btn-main'
          to={`/${teamId}`}>
            {team.name} Team Page
        </Link>
      </div>
    </div>
  )
}