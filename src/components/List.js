import React, {useState, useEffect} from 'react'
import {  Link  } from "react-router-dom";
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
            fetchParams.data ? (fetchParams.data.map((item) => (<Link className="pokemon-list-item-container" key={item.name} to={"/name/" + item.name}>
               <div className="pokemon-list-item" >{item.name}</div>
            </Link>)))
             : <h2>Упс! Что-то пошло не так...</h2>
          )
      }
    </ul>
    </>
  )
}

export default List
