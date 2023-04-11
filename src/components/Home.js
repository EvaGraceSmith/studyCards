import { useEffect, useState } from 'react';

import CardTest from './CardTest';


const Home = () => {
    // 2. once the data is fetched, store it in a state variable
    const [studyCards, setStudyCards] = useState(null);

    const [isLoading, setIsLoading] = useState(true);


    //1. fetch the data from the server when the component loads/ first renders
    useEffect(() => {
        fetch('http://localhost:8000/studyCards')
            //this returns a promise
            .then(res => { //this is the response from the server
                console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();//this returns another promise that we can use
            })
            .then((data) => { //this is the data from the server
                setStudyCards(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div className="home">

            {isLoading && <div>Loading...</div>}

            {/* The code below returns all the cards. Because I want them sorted by subject, I filtered the results */}
            {/* <CardTest studyCards={studyCards} heading="History Questions"/> */}

            {/* // This is the code that filters the cards by subject */}
            {/* //  in order to access this information once it is in json file, I need to use js.  */}
            {/* this is conditional templating in react */}
            {/* if the information on the left is true, then render the right side.  */}
            {/* 3. once the state has a value, the left side will be true and the right side will be rendered */}
            {studyCards && <CardTest studyCards={studyCards.filter((cards) => cards.subject === 'history')} heading="History Questions" />}
            {studyCards && <CardTest studyCards={studyCards.filter((cards) => cards.subject === 'geometry')} heading="Geometry Questions" />}

        </div>
    );
}

export default Home;