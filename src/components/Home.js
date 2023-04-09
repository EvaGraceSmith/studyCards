import { useState } from 'react';
import Questions from './Questions';
import PropTest from './PropTest';


const Home = () => {

    const [studyCards, setStudyCards]= useState([
{subject: 'history', question: 'Who was the first president of the United States?', answer: 'George Washington', id: 1},
{subject:'history', question: "What state produces the most wine?", answer: 'California', id: 2},
{subject:'history', question: "What is the capital of the United States?", answer: 'Washington, D.C.', id: 3},
{subject: 'history', question: 'Who won the 2016 presidential election?', answer: 'Donald Trump', id: 4},

    ]);
    return ( 
        <div className="home">
           <PropTest studyCards={studyCards} heading="History Questions"/>
        </div>
     );
}
 
export default Home;