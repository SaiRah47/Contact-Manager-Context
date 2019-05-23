import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Layout/Header";
import About from "./Components/Pages/About";
import AddContact from "./Components/Contacts/AddContact";
import EditContacts from "./Components/Contacts/EditContacts";
import { Provider } from "./Context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manger" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContacts} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
