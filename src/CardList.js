import React from 'react';
import Card from './Card';

/* returns the cards *
const CardList = ({robots}) => {
    return(
        <div>
            <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
        </div>
    );
}*/

/*const CardList = ({robots}) => {
    const cardComponent = robots.map( (user, idx) => {
        return (<Card
            key={idx}
            id={robots[idx].id}
            name={robots[idx].name}
            email={robots[idx].email}
            />
        );
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}*/

const CardList = ({robots}) => {
    return(
        <div>
            {
                robots.map( (user, idx) => {
                    return (
                        <Card
                            key={idx}
                            id={robots[idx].id}
                            name={robots[idx].name}
                            email={robots[idx].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
