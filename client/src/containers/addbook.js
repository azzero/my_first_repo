import React,{Component} from 'react' 
import {bindActionCreators} from 'redux'
import { connect } from "react-redux";
import {Field,reduxForm} from 'redux-form'
import {addbook} from '../actions/index'

const formConfig={
  form:"createBookForm",
  fields:['number','type','status']
}


 class Addbook extends Component {
   render(){
     const {handleSubmit}=this.props
  return (
    <div className="cont col-sm-10 border ">
    <form onSubmit={handleSubmit(this.createBook.bind(this))}>
        <div className="form-group">
        <label htmlFor=""> : الرقم </label>
        <Field  className="form-control" name="number" component="input" type="text" />
        </div>
        <div className="form-group">
        <label htmlFor=""> : نوع الكتاب </label>
          <Field  className="form-control" name="type" component="input" type="text" />
        </div>
        <div className="form-group">
        <label htmlFor=""> : الحالة </label>
        <Field  className="form-control" name="status" component="select" type="text" >
        <option key="open" value="جديد">جديد</option>
        <option  key="closed" value="جاري">جاري</option>
        <option key="verified"  value="منتهي"> منتههي</option>
        <option key="مفتشية"  value="مفتشية"> مفتشية</option>
        <option key="مراجع"  value="مراجع"> مراجع</option>
        <option key="مغلق"  value="مغلق"> مغلق</option>
        </Field>
        </div>
        <button className="btn btn-primary" type="submit"> ajouter </button>
    </form>
    </div>
  )
}
createBook(book){
  this.props.addbook(book);
}
} 
function mapDispatchToProps(dispatch ) {
  return(bindActionCreators({addbook},dispatch))
  }

export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(Addbook));