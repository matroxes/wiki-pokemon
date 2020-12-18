import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
import axios from 'axios'

import Card from './Card.js'

function SinglePokemon() {
  let pokemonName = useParams().name
  const [fetchPokemon, setFetchPokemon] = useState({
    data: {},
    loading: true
  })

  useEffect(() => {
    let api = "https://pokeapi.co/api/v2/pokemon/"+pokemonName

    axios.get(api)
      .then(function (response) {
            // Types
            let typesArray = []
            response.data.types.forEach( function(element, index) {
                    (typesArray.length != 0) && (typesArray.push(", "))
                    typesArray.push(element.type.name)
                });
            // Stats
            let statsArray = []
            response.data.stats.forEach( function(element, index) {
                    statsArray.push(element.base_stat)
                });
            // Items
            let itemsArray = []
            response.data.held_items.forEach( function(element, index) {
                    /*(itemsArray.length != 0) && (itemsArray.push(", "))*/
                    itemsArray.push(element.item.name)
                });
            // Abilities
            let abilitiesArray = []
            response.data.abilities.forEach( function(element, index) {
                    /*(itemsArray.length != 0) && (itemsArray.push(", "))*/
                    abilitiesArray.push(element.ability.name)
                });

        setFetchPokemon({
          ...fetchPokemon,
          data: {
            img: response.data.sprites.other.["official-artwork"].front_default,
            height: response.data.height,
            weight: response.data.weight,
            type: typesArray,
            stats: {
                hp: statsArray[0],
                attack: statsArray[1],
                defense: statsArray[2],
                sp_attack: statsArray[3],
                sp_defense: statsArray[4],
                speed: statsArray[5]
            },
            items: itemsArray,
            abilities: abilitiesArray
            },
          loading: false })
     })
      .catch(function (error) {
        setFetchPokemon({
          ...fetchPokemon,
          data: {},
          loading: false })
        console.log(error);
      })
  }, [])

  return (
    <div id="loading-container">
    <h2 className="main-title">{pokemonName}</h2>
      <hr className="divider"/>
    {
    fetchPokemon.loading ? <h1 className="loading">Загрузка</h1> : (
    <div className="wrapper">
        <div className="single-container">
          <div className="card-items-container">

            <Card name={pokemonName} link={fetchPokemon.data.img} />

            <div className="pokemon-ico">
                <div className="height pokemon-ico-item">
                    <div className="pokemon-ico-item-con" id="one">
                        <i className="fas fa-arrows-alt-v pokemon-ico-item-icon"></i>
                        <div className="pokemon-ico-item-sign" id="two">Высота</div>
                    </div>
                    <div className="pokemon-ico-item-value">{fetchPokemon.data.height}</div>
                </div>
                <div className="weight pokemon-ico-item">
                    <div className="pokemon-ico-item-con">
                        <i className="fas fa-weight-hanging pokemon-ico-item-icon"></i>
                        <div className="pokemon-ico-item-sign">Вес</div>
                    </div>
                    <div className="pokemon-ico-item-value">{fetchPokemon.data.weight}</div>
                </div>
                <div className="type pokemon-ico-item">
                    <div className="pokemon-ico-item-con">
                        <i className="fas fa-paw pokemon-ico-item-icon"></i>
                        <div className="pokemon-ico-item-sign">Тип</div>
                    </div>
                    <div className="pokemon-ico-item-value">
                        { fetchPokemon.data.type.map((element) => element)}
                    </div>
                </div>


                <div className="hp pokemon-ico-item">
                    <div className="pokemon-ico-item-con">
                        <i className="fas fa-heart pokemon-ico-item-icon"></i>
                        <div className="pokemon-ico-item-sign">Здоровье</div>
                    </div>
                    <div className="pokemon-ico-item-value">{fetchPokemon.data.stats.hp}</div>
                </div>
                <div className="attack pokemon-ico-item">
                    <div className="pokemon-ico-item-con">
                        <i className="fas fa-fist-raised pokemon-ico-item-icon"></i>
                        <div className="pokemon-ico-item-sign att">Атака</div>
                    </div>
                    <div className="pokemon-ico-item-value">{fetchPokemon.data.stats.attack}</div>
                </div>
                <div className="defense pokemon-ico-item">
                    <div className="pokemon-ico-item-con">
                        <i className="fas fa-shield-alt pokemon-ico-item-icon"></i>
                        <div className="pokemon-ico-item-sign">Защита</div>
                    </div>
                    <div className="pokemon-ico-item-value">{fetchPokemon.data.stats.defense}</div>
                </div>
                <div className="sp-attack pokemon-ico-item">
                    <div className="pokemon-ico-item-con">
                        <i className="fas fa-hand-sparkles pokemon-ico-item-icon"></i>
                        <div className="pokemon-ico-item-sign" id="sp-att">Спец. атака</div>
                    </div>
                    <div className="pokemon-ico-item-value">{fetchPokemon.data.stats.sp_attack}</div>
                </div>
                <div className="sp-defense pokemon-ico-item">
                    <div className="pokemon-ico-item-con">
                        <i className="fas fa-hamsa pokemon-ico-item-icon"></i>
                        <div className="pokemon-ico-item-sign">Спец. защита</div>
                    </div>
                    <div className="pokemon-ico-item-value">{fetchPokemon.data.stats.sp_defense}</div>
                </div>
                <div className="speed pokemon-ico-item">
                    <div className="pokemon-ico-item-con">
                        <i className="fas fa-running pokemon-ico-item-icon"></i>
                        <div className="pokemon-ico-item-sign">Cкорость</div>
                    </div>
                    <div className="pokemon-ico-item-value">{fetchPokemon.data.stats.speed}</div>
                </div>

            </div>
          </div>

                <div className="item-abilities-container">
                    {(fetchPokemon.data.items.length > 0) && (
                        <div className="items-con">
                            <div className="items-title">Держимые предметы</div>
                            { fetchPokemon.data.items.map((element) => <div key={element} className="item">{element}</div>)}
                        </div>
                    )}

                    {(fetchPokemon.data.abilities.length > 0) && (
                        <div className="abilities-con">
                            <div className="abilities-title">Способности</div>
                            { fetchPokemon.data.abilities.map((element) => <div key={element} className="item">{element}</div>)}
                        </div>
                    )}
                </div>

            </div>
        </div>
      )
    }

    </div>
  )
}

export default SinglePokemon
