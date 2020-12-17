import React from 'react'

function Card(props) {
  return (
    <>
    <div className="card card-no-hover">
        <div className="front">
            <img className="card-img"  src={props.link}/>
            <div className="name-con">
                <div className="name">{props.name}</div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Card
