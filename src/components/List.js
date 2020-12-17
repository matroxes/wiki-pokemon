import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'

function List() {
  const [fetchParams, setFetchParams] = useState({
    data: {},
    loading: true
  })

  useEffect(() => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=9999")
      .then(function (response) {
        setFetchParams({
          ...fetchParams,
          data: response.data.results,
          loading: false })
     })
      .catch(function (error) {
        setFetchParams({
          ...fetchParams,
          data: {},
          loading: false })
        console.log(error);
      })

  }, [])

  return (
    <>
    <h2 className="main-title">Все покемоны</h2>
    <hr className="divider"/>
    <ul className="pokemon-list">
      {
        fetchParams.loading ? <h1 className="loading">Загрузка</h1> : (
            fetchParams.data ? (fetchParams.data.map((item) => (<div className="pokemon-list-item-container" key={item.name}>
               <Link className="pokemon-list-item" to={"/name/" + item.name} >{item.name}</Link>
            </div>)))
             : <h2>Упс! Что-то пошло не так...</h2>
          )
      }
    </ul>
    </>
  )
}

export default List
