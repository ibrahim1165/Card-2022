import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [cards , SetCards]= useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020')
        .then(res=>res.json())
        .then(data=>{
            SetCards(data.results)
        })
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2">    
           {
           cards.map(card=><Card 
            card={card}
            >
            </Card>)
           }
        </div>
    );
};

export default Cards;