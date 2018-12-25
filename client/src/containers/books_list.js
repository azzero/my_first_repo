import React,{Component} from 'react';
import {connect} from 'react-redux';
import {allBook,updateBook} from '../actions/index'
import { bindActionCreators } from 'redux'
import ReactTable from 'react-table';
import Addbook from './addbook'
import "react-table/react-table.css"

 class BookList extends Component {
  constructor(props){
    super(props)
    this.state={value:''}
      this.renderEditable=this.renderEditable.bind(this)
      this.updateBook=this.updateBook.bind(this)
      this.renderUpdateStatus=this.renderUpdateStatus.bind(this)
      this.renderOptionsStatus=this.renderOptionsStatus.bind(this)
      this.change=this.change.bind(this)
  }

//return editable cell 
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning

        dangerouslySetInnerHTML={{
          __html: this.props.books[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

// recupérer la valeur d'option 
change(e){
  this.setState({value:e.target.value})
}


//return  options values 
  renderOptionsStatus(cellInfo){
          const cellValue=this.props.books[cellInfo.index][cellInfo.column.id];
          const optionsValue=['value1','value2','value3']
          var options=optionsValue.filter((val)=>{
             if(val===cellValue){
              return false
               }else return true ;
             })
   return(
          <select onChange={this.change} className="form-control" >
          <option  className=""  key={this.props.books[cellInfo.index][cellInfo.column.id]} value={this.props.books[cellInfo.index][cellInfo.column.id]}>
          {this.props.books[cellInfo.index][cellInfo.column.id]}
          </option>
          {options.map((valeur)=><option  className="" key={valeur} value={valeur}>{valeur}</option>)}
      
         </select>
    )
  }


// recuperer tous les livres 
 componentWillMount(){
     this.props.allBook()
   }
 

//update book 
   updateBook(props){
     let book =props.original
     book.status = this.state.value
    this.props.updateBook(props.original)
   }


//  afficher le tableau 
   renderBooksList(){
         const books=this.props.books
        const columns =[
          {
            Header:" الرقم",
            accessor : "number",
          style:{
                texAlign:"right"
            },
            Cell: this.renderEditable 
          },
          {
            Header:" النوع",
            accessor : "type",
            Cell:this.renderEditable
          }
        ,
          {
            Header:" الحالة",
            accessor : "status",
            Cell:this.renderOptionsStatus 
          },
          {
            Header:" أوامر",
            filterable:false,
            style:{
              textAlign:"center"
            },
            Cell:props=>{
              return (<button onClick={()=>this.updateBook(props)} className="btn btn-primary ">تعديل</button>)
            }
          }
        ]
          if(books){
                return(
                    <ReactTable
                    columns={columns}
                    data={books}
                    filterable
                    defaultPageSize={10}
                    
                     >
                      </ReactTable>
                    )
          }else{
              return <div>No books found</div>
            }
   }

// update response 
  renderUpdateStatus(){
    const status=this.props.updatedBook;
    if(  status===0 ){
      return <div className="alert alert-success"> تم التعديل بنجاح</div>
    }
    if(status===1 ){
      return  <div className="alert alert-danger">هناك خطأ ما إتصل بالمطور على الايميل التالي 
      azzeddine.elatmani@gmail.com </div>
    }
    return <div className="alert alert-info ">نتمنى لك قضاء يوم جميل  </div>

  }

render(){
    return (
          <div className="container">
          <div className="row">
             <Addbook/>
          </div>
          <div className="row justify-content-center">
            <div className="col-4 response">{this.renderUpdateStatus()}</div>
          </div>
          
          <div className="row">
                <div className="col-sm-10">
              {
                this.renderBooksList()
              }
          </div>
           
            </div>
          </div>
          )
  }
  
};

function mapStateToProps(state){
  return {
    books: state.books,
    updatedBook:state.updatedBook
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({allBook,updateBook},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList);