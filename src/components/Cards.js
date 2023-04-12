import React from 'react';
import './Cards.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';



function Cards() {
const [subject, setSubject] = useState('');
const [question, setQuestion] = useState('');
const [answer, setAnswer] = useState('');
const [isLoading, setIsLoading] = useState(false);

const navigate = useNavigate();



const handleSubmit = (e) => {
    e.preventDefault();
    const studyCard = {subject, question, answer};
    setIsLoading(true);

    // console.log(studyCard);
    fetch('http://localhost:8000/studyCards', {
        // This is the method that tells the server what to do with the data
        method: 'POST',
        // This is the header that tells the server that the data is in JSON format
        headers: {"Content-Type": "application/json"},
        // This is the body of the request, which is the data that we want to send to the server
        body: JSON.stringify(studyCard)
        // This is the response that we get back from the server
    }).then(() => {
        console.log('new card added');
        setIsLoading(false);
        navigate(`/mystudycards`);
    })
}


    return (
        <div className='create'>
        <h1>Create new study cards</h1>
        <form onSubmit={handleSubmit}>
            <label>Subject</label>
            <input type="text" 
            name="subject" 
            required
            value= {subject}
            onChange= {(e)=> setSubject(e.target.value)}
            />
            <label>Question</label>
            <input type="text" 
            name="question" 
            required
            value= {question}
            onChange= {(e)=> setQuestion(e.target.value)}
            />
            <label>Answer</label>
            <input type="text" 
            name="answer" 
            required
            value= {answer}
            onChange= {(e)=> setAnswer(e.target.value)}
            />
            {!isLoading && <button>Add a new card</button>}
            {isLoading && <button disabled>Adding Card ...</button>}
            <br></br>
            <br></br>

            <button>Submit</button>

            <p>{subject}</p>
            <p>{question}</p>
            <p>{answer}</p>

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