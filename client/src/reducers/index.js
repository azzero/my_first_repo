import 'bootstrap/dist/css/bootstrap.min.css';
import {combineReducers} from 'redux';
import booksReducer from './reducer_books'
import bookUpdate from './update_book'
import activeUserReducer   from './activer_book'
import {reducer as ReducerForm} from 'redux-form'
const rootReducer = combineReducers({
  books : booksReducer,
  activeUser :activeUserReducer,
  updatedBook:bookUpdate,
  form:ReducerForm
});
export default rootReducer;