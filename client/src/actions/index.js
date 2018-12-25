import axios from "axios"
export const USER_SELECTED = 'USER_SELECTED'
export const GET_BOOKS = "GET_BOOKS"
export const UPDATE_BOOK = "UPDATE_BOOK"
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR"
export const UPDATE_BOOKS_ERROR = "UPDATE_BOOKS_ERROR"

export  function userSelected(user){
  return {
    type:USER_SELECTED,
    payload : user 
  }

}
export function allBook(){
    return function (dispatch){
        axios.get("/api/allbk").then(function(response){
          console.log(response.data)
          dispatch ({type:GET_BOOKS,payload:response.data})
        }).catch(function(error){
          console.log(error)
          dispatch({type:GET_BOOKS_ERROR,error:error.response.data.detail})
        })
  }
}
export function updateBook(book){
  return function (dispatch){
    console.log("book",book)
    axios.post("/api/updatebook/"+book.id,{book})
      .then(function(response){
        console.log("response",response)
        dispatch ({type:UPDATE_BOOK,payload:0})
      })
      .catch(function(error){
        console.log("khataaA",error)
        dispatch ({type:UPDATE_BOOKS_ERROR,error:1})
      })
    

  }
}