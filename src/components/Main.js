import React from 'react'
import {  Link  } from "react-router-dom";

import Card from './Card.js'


function Main() {
    return (
        <>
        <h2 className="main-title">Главная</h2>
        <hr className="divider"/>
            <div className="container">
                <div className="card">
                    <Link to="name/pikachu">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"/>
                            <div className="name-con">
                                <div className="name">Pikachu</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/bulbasaur">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
                            <div className="name-con">
                                <div className="name">Bulbasaur</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/charmander">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"/>
                            <div className="name-con">
                                <div className="name">Charmander</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/tyranitar">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png"/>
                            <div className="name-con">
                                <div className="name">Tyranitar</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/gardevoir">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png"/>
                            <div className="name-con">
                                <div className="name">Gardevoir</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/rayquaza">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"/>
                            <div className="name-con">
                                <div className="name">Rayquaza</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/garchomp">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"/>
                            <div className="name-con">
                                <div className="name">Garchomp</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/sylveon">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png"/>
                            <div className="name-con">
                                <div className="name">Sylveon</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/umbreon">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"/>
                            <div className="name-con">
                                <div className="name">Umbreon</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/lugia">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"/>
                            <div className="name-con">
                                <div className="name">Lugia</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/lucario">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"/>
                            <div className="name-con">
                                <div className="name">Lucario</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/name/pidgey">
                        <div className="front">
                            <img className="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"/>
                            <div className="name-con">
                                <div className="name">Pidgey</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Main
