import LandingPage from '../pages/landing'
import React, { useContext } from 'react'
import Post from '../pages/post'
import ProfilePage from '../pages/profile'
import { AuthContext } from '../context/authContext'
import { Route, useLocation } from 'react-router-dom'
import DashboardPage from '../pages/dashboard'

export const useRoutesController = () => {
  const location = useLocation()
  const { auth } = useContext(AuthContext)
  const route = (item) => {
    return (
      <Route key={item.id} exact path={item.path}>
        {item.children}
      </Route>
    )
  }
  const routes = () => {
    const userRoutes = [
      { id: 1, path: '/', children: <LandingPage /> },
      { id: 2, path: '/post', children: <Post /> },
      { id: 3, path: '/profile', children: <ProfilePage /> },
    ]
    const writerRoutes = [
      { id: 1, path: '/', children: <LandingPage /> },
      { id: 2, path: '/post', children: <Post /> },
      { id: 3, path: '/profile', children: <ProfilePage /> },
      { id: 4, path: '/dashboard', children: <DashboardPage /> },
    ]
    const adminRoutes = [
      { id: 1, path: '/', children: <LandingPage /> },
      { id: 2, path: '/post', children: <Post /> },
      { id: 3, path: '/profile', children: <ProfilePage /> },
      { id: 4, path: '/admin-panel', children: <DashboardPage /> },
    ]
    if (auth.isLogged) {
      switch (auth.role) {
        case 'WRITER':
          return writerRoutes.map((item) => route(item))
        case 'ADMIN':
          return adminRoutes.map((item) => route(item))
        default:
          return userRoutes.map((item) => route(item))
      }
    }
    return userRoutes.map((item) => (
      <Route key={item.id} exact path={item.path}>
        {item.children}
      </Route>
    ))
  }
  return { routes, location, auth }
}
