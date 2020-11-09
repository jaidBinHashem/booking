import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import SecondaryNav from "./components/SecondaryNav/SecondaryNav";
import SearchBar from "./components/SerachBar/SearchBar";
import Home from "./pages/Home";
import Host from "./pages/Host";
import DeteilsPage from "./pages/Details/DeteilsPage";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SecondaryNav />
      <SearchBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/host" component={DeteilsPage} />
      </Switch>
    </>
  );
}

export default App;
