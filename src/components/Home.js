import { useEffect, useState } from 'react';

import CardTest from './CardTest';


const Home = () => {

    const [studyCards, setStudyCards]= useState(null);

const deleteCard = (id) => {
        const newStudyCards = studyCards.filter((studyCard) => studyCard.id !== id);
        setStudyCards(newStudyCards);
    
}

useEffect(() => {
fetch('http://localhost:8000/studyCards')
//this returns a promise
.then(res => { //this is the response from the server
    return res.json();//this returns another promise that we can use
})
.then((data) => { //this is the data from the server
    // console.log(data);
    setStudyCards(data);
})
    },[]);

    return ( 
        <div className="home">

{/* The code below returns all the cards. Because I want them sorted by subject, I filtered the results */}
           {/* <CardTest studyCards={studyCards} heading="History Questions"/> */}

{/* // This is the code that filters the cards by subject */}
{/* //  in order to access this information once it is in json file, I need to use js.  */}
{/* this is conditional templating in react */}
           {studyCards && <CardTest studyCards={studyCards.filter((cards) => cards.subject === 'history')} heading="History Questions"/>}
             {studyCards &&  <CardTest studyCards={studyCards.filter((cards) => cards.subject === 'geometry')} heading="Geometry Questions" deleteCard= {deleteCard}/>}

        </div>
     );
}
 
export default Home;