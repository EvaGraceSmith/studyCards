import { useEffect, useState } from 'react';

import CardTest from './CardTest';


const Home = () => {

    const [studyCards, setStudyCards]= useState(null);

const deleteCard = (id) => {
        const newStudyCards = studyCards.filter((studyCard) => studyCard.id !== id);
        setStudyCards(newStudyCards);
    
}

useEffect(() => {
    const getStudyCards = async () => {
        const studyCardsFromServer = await fetchStudyCards();
        setStudyCards(studyCardsFromServer);
    },[]);

    return ( 
        <div className="home">

{/* The code below returns all the cards. Because I want them sorted by subject, I filtered the results */}
           {/* <CardTest studyCards={studyCards} heading="History Questions"/> */}

           <CardTest studyCards={studyCards.filter((cards) => cards.subject === 'history')} heading="History Questions"/>
              <CardTest studyCards={studyCards.filter((cards) => cards.subject === 'geometry')} heading="Geometry Questions" deleteCard= {deleteCard}/>

        </div>
     );
}
 
export default Home;