import React from 'react'
import {NavLink} from 'react-router-dom'




const Navigation = ()=>{
  return (<nav className="navbar navbar-dark bg-dark col-md-6 col-md-offset-3 ">
  
          <NavLink className="navbar-brand" to="/"> الرئيسية </NavLink>
          <NavLink className="navbar-brand" to="/addbook"> أضف كتاب </NavLink>

          </nav>
          );  
}
export default Navigation ;