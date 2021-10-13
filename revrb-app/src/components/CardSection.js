import React from 'react';
import Card from './Card';
import './CardSection.css';

const CardSection = () => {
    return (
        <div className="cards">
            <h1>Check out these trending genres...</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Card
                            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            text="Rock music that will hit like you're actually there"
                            label="Concert"
                            path="/songs"
                        />
                        <Card
                            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            text="A little EDM for when you want to Zone-out"
                            label="EDM"
                            path="/songs"
                        />
                        <Card
                            src="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            text="How about some Classical tunes for old times sake?"
                            label="Classical"
                            path="/songs"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardSection
