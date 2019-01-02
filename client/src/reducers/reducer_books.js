
import {GET_BOOKS,GET_BOOKS_ERROR,ADD_BOOK,ADD_BOOK_ERROR,DELETE_BOOK,DELETE_BOOK_ERROR} from '../actions/index' 
export default function(state=null,action){
        switch(action.type){
          case GET_BOOKS:
          return action.payload
          case GET_BOOKS_ERROR:
          return action.error
          case ADD_BOOK:
          return [...state,action.payload]
          case ADD_BOOK_ERROR:
          return action.error
          case DELETE_BOOK:
          return state.filter((book)=>{
            if(book.id===action.payload){
              return false
            }else{
              return true
            }
          })
          case DELETE_BOOK_ERROR:
          return action.error
          default :
          return state
        }
}