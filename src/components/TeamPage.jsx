import { useParams } from 'react-router-dom'
import useTeamNames from '../hooks/useTeamNames'
import useTeamsArticles from '../hooks/useTeamsArticles'
import useTeam from '../hooks/useTeam'
import TeamLogo from './TeamLogo'

function useTeamPageData (teamId) {
    const {
        response: teamNames,
        loading: loadingTeamNames
    } = useTeamNames()

    const {
        response: articles,
        loading: loadingArticles
    } = useTeamsArticles(teamId)
    const {
        response: team,
        loading: loadingTeam
    } = useTeam()

    return {
        teamNames,
        articles,
        team,
        loading: loadingArticles || loadingTeamNames || loadingTeam
    }
}

export default function TeamPage () {
    const { teamId } = useParams()

    return (
        <div>
            Team page for {teamId}
        </div>
    )
}