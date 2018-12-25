import React,{ Component } from "react";
import {connect} from 'react-redux';
import "./books.css";
const axios = require('axios');
var type1=[];
var type2=[];
var type3=[];

class Books extends Component{
constructor(props){
    super(props)
    this.state={books:[],booksType1:[],booksType2:[],booksType3:[]}

}
 componentWillMount(){  
    axios.get("/api/allbk")
    .then((response)=> {

    //console.log("la reponse ;",response.data)
    const books = response.data;
  
     type1=  books.filter((book)=>{
        if(book.type==="type1"){
            return true;
        }
        else
        {
            return false ;
        }
    })
     type2=books.filter((book)=>{
        if(book.type==="type2"){
            return true;
        }
        else
        {
            return false ;
        }
    })
     type3=books.filter((book)=>{
        if(book.type==="type3"){
            return true;
        }
        else
        {
            return false ;
        }
    })
    this.setState({booksType1:type1,booksType2:type2,booksType3:type3})
    })
    .catch((error)=>console.log(error))
 }     

     
render(){
   
    return(
      
        <div className="col-md-4">
           <ul>
               {
                   this.props.books.map((book)=>{
                       return (
                                <li key={book.id}>{book.name}</li>
                            )
                   })
               }
           </ul>
            
              <table>
                <thead><tr><th>الحالة</th><th>النوع</th><th>الرقم</th></tr></thead>
                <tbody>
            {
                this.state.booksType1.map((book)=>{
                    return <tr key={book.id} className={book.type}>
                    <td className={book.status}>{book.status}</td>
                    <td>{book.type}</td>
                    <td>{book.number}</td>
                    </tr>
                 })
            }
                 </tbody>
             </table>
             <table>
                <thead><tr><th>الحالة</th><th>النوع</th><th>الرقم</th></tr></thead>
                <tbody>
            {
                this.state.booksType2.map((book)=>{
                    return <tr key={book.id} className={book.type}>
                    <td className={book.status}>{book.status}</td>
                    <td>{book.type}</td>
                    <td>{book.number}</td>
                    </tr>
                 })
            }
                 </tbody>
             </table>
             <table>
                <thead><tr><th>الحالة</th><th>النوع</th><th>الرقم</th></tr></thead>
                <tbody>
            {
                this.state.booksType3.map((book)=>{
                    return <tr key={book.id} className={book.type}>
                    <td className={book.status}>{book.status}</td>
                    <td>{book.type}</td>
                    <td>{book.number}</td>
                    </tr>
                 })
            }
                 </tbody>
             </table>
        </div>
    );

    
    
}
}
function mapStateToProps (state){
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(Books) ;