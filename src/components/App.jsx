import * as React from 'react'
import {
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom'
import Navbar from './Navbar'
import Loading from './Loading'
const Home = React.lazy(() => import('./Home'))
const Teams = React.lazy(() => import('./Teams'))
const Players = React.lazy(() => import('./Players'))
const TeamPage = React.lazy(() => import('./TeamPage'))
const Player = React.lazy(() => import('./Player'))
const Team = React.lazy(() => import('./Team'))
const Articles = React.lazy(() => import('./Articles'))
const Article = React.lazy(() => import('./Article'))

function Routes () {
  return useRoutes([
    { path: '/', element: <Home /> },
    {
      path: '/players',
      element: <Players />,
      children: [
        { path: ':playerId', element: <Player /> },
        { path: '', element: <div className='sidebar-instruction'>Select a player</div> }
      ]
    },
    {
      path: '/teams',
      element: <Teams />,
      children: [
        { path: ':teamId', element: <Team /> },
        { path: '', element: <div className='sidebar-instruction'>Select a Team</div> }
      ]
    },
    {
      path: '/:teamId', element: <TeamPage />
    },
    {
      path: '/:teamId/articles',
      element: <Articles />,
      children: [
        { path: ':articleId', element: <Article /> },
        { path: '', element: <div className='sidebar-instruction'>Select an article</div> }
      ]
    }
  ])
}

export default function App () {
  return (
    <Router>
      <div>
        <Navbar />

        <React.Suspense fallback={<Loading />}>
          <Routes />
        </React.Suspense>
      </div>
    </Router>
  )
}