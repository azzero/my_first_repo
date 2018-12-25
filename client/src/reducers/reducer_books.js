
import {GET_BOOKS,GET_BOOKS_ERROR} from '../actions/index' 
export default function(state=null,action){
        switch(action.type){
          case GET_BOOKS:
          return action.payload
          case GET_BOOKS_ERROR:
          return action.error
          default :
          return state
        }
}