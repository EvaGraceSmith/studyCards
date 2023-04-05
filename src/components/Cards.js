import React from 'react';
import './Cards.css';



function Cards() {
    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className='question'>

                        <h1>Question</h1>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className='textBox'>
                        <h1>Answer</h1>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Cards;