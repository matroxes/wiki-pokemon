import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header.js'
import Main from './components/Main.js'
import List from './components/List.js'
import SinglePokemon from './components/SinglePokemon.js';

function App() {
  return (
    <>


    <Router>
        <Header/>

        <Switch>
            <Route path="/" exact>
                <Main/>
            </Route>
            <Route path="/all">
                <List/>
            </Route>

            <Route path="/name/:name" children={<SinglePokemon />} />
        </Switch>
    </Router>
    </>
  )
}

export default App
