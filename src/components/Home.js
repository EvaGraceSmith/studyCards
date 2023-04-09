import { useState } from 'react';

import CardTest from './CardTest';


const Home = () => {

    const [studyCards, setStudyCards]= useState([
{subject: 'history', question: 'Who was the first president of the United States?', answer: 'George Washington', id: 1},
{subject:'history', question: "What state produces the most wine?", answer: 'California', id: 2},
{subject:'history', question: "What is the capital of the United States?", answer: 'Washington, D.C.', id: 3},
{subject: 'history', question: 'Who won the 2016 presidential election?', answer: 'Donald Trump', id: 4},
{subject: 'history', question: 'What state is the Grand Canyon in?', answer: 'Arizona', id: 5},
{subject: 'history', question: 'When did the United States declare independence from Great Britain?', answer: 'July 4, 1776', id: 6},
{subject: 'history', question: 'Why did the United States declare independence from Great Britain?', answer: 'Because of unfair taxes', id: 7},
{subject: 'history', question: 'Who wrote the Declaration of Independence?', answer: 'Thomas Jefferson', id: 8},
{subject: 'history', question: 'Which president was assassinated in 1963?', answer: 'John F. Kennedy', id: 9},
{subject: 'history', question: 'Where did the first Thanksgiving take place?', answer: 'Plymouth, Massachusetts', id: 10},

    ]);
    return ( 
        <div className="home">

           <CardTest studyCards={studyCards} heading="History Questions"/>

        </div>
     );
}
 
export default Home;