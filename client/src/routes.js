import React, { Component } from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Books from './components/books/books'
import addbook from './components/books/addbook'
class Routes extends Component {
  
  render() {
    return (
      <div>
       <BrowserRouter>
        <Switch>
           <Route path="/" component={Books}/>  
           <Route path="/addbook" component={addbook}/>   
        </Switch>
       </BrowserRouter>
      </div>
    )
  }
}

export default Routes;
