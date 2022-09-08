import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../GlobalContext'
import { toast } from 'react-toastify';
import axios from 'axios';
import SideMenu from './SideMenu';
// import "./chart"

function AdminDashboard() {
  const data = useContext(GlobalContext);
  const [products] = data.productApi.products;
  const [allUsers] = data.authApi.allUsers


  useEffect(() => {

  }, [])


  return (
    <React.Fragment>

      <div className="container-fluid">
        <div className="row">
          {/* side menu */}
          <SideMenu />
          {/* menu ends */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                {/* options goes here */}
              </div>
            </div>
            
          </main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminDashboard