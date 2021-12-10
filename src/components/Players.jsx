import * as React from 'react'
import { useLocation, useSearchParams, Link, Outlet } from 'react-router-dom'
import usePlayerNames from '../hooks/usePlayerNames'
import { slugify } from '../utils'

function CustomLink ({ to, children }) {
  const location = useLocation()
  const playerId = location.pathname.split('/')[2]
  const match = playerId === to

  const styles = match === true
    ? { fontWeight: 900, color: 'var(--white)' }
    : {}

  return (
    <li>
      <Link
        style={{...styles}}
        to={{
          pathname: to,
          search: location.search
        }}>
          {children}
      </Link>
    </li>
  )
}

function Sidebar ({ title, list }) {
  return (
    <div>
      <h3 className='header'>{title}</h3>
      <ul className='sidebar-list'>
        {list.map((item) => (
          <CustomLink
            key={item}
            to={`${slugify(item)}`}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}

export default function Players () {
  const location = useLocation()
  const [searchParams] = useSearchParams(location.search)
  const [team, setTeam] = React.useState(
    searchParams.get('teamId')
  )

  React.useEffect(() => {
    if (location.search === '') {
      searchParams.delete('teamId')
      setTeam(null)
    } else {
      setTeam(searchParams.get('teamId'))
    }
  }, [location.search, searchParams])

  const {
    response: names,
    loading
  } = usePlayerNames(team)

  if (loading === true) {
    return null
  }

  return (
    <div className='container two-column'>
      <Sidebar
        title='Players'
        list={names}
      />

      <Outlet />
    </div>
  )
}