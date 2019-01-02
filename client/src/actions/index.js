import axios from "axios"
export const USER_SELECTED = 'USER_SELECTED'
export const GET_BOOKS = "GET_BOOKS"
export const UPDATE_BOOK = "UPDATE_BOOK"
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR"
export const UPDATE_BOOK_ERROR = "UPDATE_BOOK_ERROR"
export const ADD_BOOK_ERROR = "ADD_BOOK_ERROR"
export const ADD_BOOK = "ADD_BOOK"
export const DELETE_BOOK = "DELETE_BOOK"
export const DELETE_BOOK_ERROR = "DELETE_BOOK_ERROR"
export  function userSelected(user){
  return {
    type:USER_SELECTED,
    payload : user 
  }

}
export function allBook(){
    return function (dispatch){
        axios.get("/api/allbk").then(function(response){
          dispatch ({type:GET_BOOKS,payload:response.data})
        }).catch(function(error){
          console.log(error)
          dispatch({type:GET_BOOKS_ERROR,error:error.response})
        })
  }
}
export function updateBook(book){
  return function (dispatch){
    axios.post("/api/updatebook/"+book.id,{book})
      .then(function(response){
        dispatch ({type:UPDATE_BOOK,payload:0})
      })
      .catch(function(error){
        dispatch ({type:UPDATE_BOOK_ERROR,error:1})
      })
   }
}
export function addbook(book){
  return function (dispatch){
    axios.post("/api/addbook/",{book})
      .then(function(response){
        console.log("resssss",response.data)
        dispatch ({type:ADD_BOOK,payload:response.data})
      })
      .catch(function(error){
        console.log("khataaA",error)
        dispatch ({type:ADD_BOOK_ERROR,error:error.response.data.detail})
      })
   }
}
export function deleteBook(id){
  return function(dispatch){
    axios.delete("/api/deletebook/"+id)
    .then((response)=>{
      dispatch ({type:DELETE_BOOK,payload:id})
    })
    .catch((error)=>{
      dispatch({type:DELETE_BOOK_ERROR,payload:6})
    })
  }
 
  
}