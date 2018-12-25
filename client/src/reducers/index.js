import {combineReducers} from 'redux';
import booksReducer from './reducer_books'
import bookUpdate from './update_book'
import activeUserReducer   from './activer_book'
const rootReducer = combineReducers({
  books : booksReducer,
  activeUser :activeUserReducer,
  updatedBook:bookUpdate
});
export default rootReducer;