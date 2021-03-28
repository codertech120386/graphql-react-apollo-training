import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Books from "./components/Books";
import BookEdit from "./components/BookEdit";
import BookDelete from "./components/BookDelete";
import BookAdd from "./components/BookAdd";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Books} />
          <Route path='/books/:id/edit' component={BookEdit} />
          <Route path='/books/:id/delete' component={BookDelete} />
          <Route path='/books/add' component={BookAdd} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
