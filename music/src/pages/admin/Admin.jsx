import React from 'react'
import { Link } from "react-router-dom";
import AdminNavbar from '../../component/admin/AdminNavbar'

const Admin = () => {
  return (
    <div>

        <Link to={"/admin"}>
       <AdminNavbar/> 
       </Link>
    </div>
  )
}

export default Admin