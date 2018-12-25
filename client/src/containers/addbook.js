import React,{Component} from 'react' 
import {bindActionCreators} from 'redux'
import { connect } from "react-redux";
import {reduxForm} from 'redux-form'

const formConfig={
  form:"createBookForm",
  fields:['number','type','status']
}


 class Addbook extends Component {
   render(){
  return (
    <div className="form col-sm-10"><form action="">
        <div className="form-group">
        <label htmlFor=""> : الرقم </label>
          <input className="form-control" name="number" value="" onChange="" type="text"/>
        </div>
        <div className="form-group">
        <label htmlFor=""> : نوع الكتاب </label>
         <input className="form-control" name="type" value="" onChange="" type="text"/> 
        </div>
        <div className="form-group">
        <label htmlFor=""> : الحالة </label>
          <input className="form-control" name="status" value="" onChange="" type="text"/>
        </div>
        <button className="btn btn-primary" type="submit"> ajouter </button>
    </form>
    </div>
  )
}
}
export default connect(null,null)(reduxForm(formConfig)(Addbook));