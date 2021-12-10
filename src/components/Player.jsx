import * as React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import usePlayer from '../hooks/usePlayer'
import Loading from './Loading'

export default function Player () {
  const { playerId } = useParams()

  const {
    response: player,
    loading
  } = usePlayer(playerId)

  let body
  if (loading === true) {
    body = <Loading />
  } else if (player === null) {
    body = <Navigate to='/players' />
  } else {
    body = (
      <React.Fragment>
        <img
          className='avatar'
          src={`${player.avatar}`}
          alt={`${player.name}'s avatar`}
        />
        <h1 className='medium-header'>{player.name}</h1>
        <h3 className='header'>#{player.number}</h3>
        <div className='row'>
          <ul className='info-list' style={{marginRight: 80}}>
            <li>Team
              <div>
                <Link to={`/${player.teamId}`}>
                  {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
                </Link>
              </div>
            </li>
            <li>Position<div>{player.position}</div></li>
            <li>PPG<div>{player.ppg}</div></li>
          </ul>
          <ul className='info-list'>
            <li>APG<div>{player.apg}</div></li>
            <li>SPG<div>{player.spg}</div></li>
            <li>RPG<div>{player.rpg}</div></li>
          </ul>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className='panel'>
      {body}
    </div>
  )
}