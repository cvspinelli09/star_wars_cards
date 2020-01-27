import React from 'react';

import Card from '../card/card.component';


const CardList = ({ people }) => {
    return (
      <div>
        {
            people.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={people[i].id}
                        name={people[i].name}
                        height={people[i].height}
                        mass={people[i].mass}
                        img={people[i].img}
                        homeworld={people[i].homeworld}
                    />
                );
            })
        }
      </div>
    );
}

export default CardList;