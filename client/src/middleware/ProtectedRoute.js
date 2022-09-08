import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext';

const ProtectedRoute = () => {
  const context = useContext(GlobalContext)
  const [token] = context.token

  return (
    <React.Fragment>
      {
        token ? <Outlet /> : <Navigate to={`/login`} />
      }
    </React.Fragment>
  )
}

export default ProtectedRoute