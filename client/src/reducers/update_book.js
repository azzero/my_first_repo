import {UPDATE_BOOK,UPDATE_BOOKS_ERROR} from "../actions/index"
export default function (state=null,action){
  switch(action.type){
    case UPDATE_BOOK:
    return action.payload
    case UPDATE_BOOKS_ERROR:
    return action.error
    default:
    return state
  }
}
