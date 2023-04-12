import React from 'react';
import './Cards.css';



function Cards() {
    return (
        <div className='create'>
        <h1>Create new study cards</h1>
        <form>
            <label>Subject</label>
            <input type="text" name="subject" required/>
            <label>Question</label>
            <input type="text" name="question" required/>
            <label>Answer</label>
            <input type="text" name="answer" required/>
            <button>Add a new card</button>
            <br></br>
            <br></br>
            <button>Submit</button>

        </form>
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

        </div>
    )
}

export default Cards;