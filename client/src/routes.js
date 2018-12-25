import React from 'react';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'
import Books from './containers/books_list'
import {Provider} from 'react-redux'
import Addbook from './containers/addbook'
import Navigation from "./components/navigation";
      
const Root = ({store})=>(  <Provider store={store}>
       <Router>
         <div>
            <Navigation/>
            <Switch>
              <Route path="/" component={Books} exact/>  
              <Route path="/addbook" component={Addbook}/>   
            </Switch>     
        </div>   
       </Router>
       </Provider>)
      
 

export default Root;
