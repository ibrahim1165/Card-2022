import React from 'react';

const Card = ({ card }) => {
    const {gender,name,email} = card;

    console.log(card)
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
            <p>{gender}. NL</p>
                <h2 class="card-title font-bold text-xl">{name.title} {name.first} {name.last}</h2>
                <p className="text-orange-600">{email}</p>
            </div>
        </div>
    );
};

export default Card;