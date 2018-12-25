import React from 'react'
import {NavLink} from 'react-router-dom'




const Navigation = ()=>{
  return (
  <div className="row">
  <div className="form col-sm-10 ">
    <nav className="navbar navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/"> الرئيسية </NavLink>
          <NavLink className="navbar-brand" to="/addbook"> أضف كتاب </NavLink>
          </nav>
    </div>
   </div> );  
}
export default Navigation ;