import TeamLogo from './TeamLogo'
import { Link } from 'react-router-dom'
import useTeamNames from '../hooks/useTeamNames'

export default function Home () {
    const {
        loading,
        response: teamNames,
    } = useTeamNames()

    if (loading) {
        return null
    }

    return (
        <div className="container">
            <h1 className='large-header'>Hash History Basketball League</h1>
            <h3 className="header text-center">Select a Team</h3>
            <div className="home-grid">
                {teamNames.map((id) => (
                    <Link key={id} to={`/${id}`}>
                        <TeamLogo id={id} width='125px' />
                    </Link>
                ))}
            </div>
        </div>
    )
}