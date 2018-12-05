import React,{Component} from 'react'
class BookItem extends Component{
        constructor(props){
                super(props)
                this.state={data:this.props.data}
              console.log(this.props.data)
        }
render(){

return (

        <div>
         <table>
                <thead><tr><th>الحالة</th><th>النوع</th><th>الرقم</th></tr></thead>
                <tbody>
            {
                this.state.data.map((book)=>{
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
export default BookItem ;
