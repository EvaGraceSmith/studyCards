import StudyCards from './StudyCards';
import useFetch from '../useFetch';

const MyCards = () => {

    //grab the data, and now call it studyCards
const { data: studyCards, isLoading, error } = useFetch('http://localhost:8000/studyCards');


    return ( 
        <div className="home">
        {/* this is conditional templating in react */}
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}

        {/* The code below returns ALL the cards. Because I want them sorted by subject, I filtered the results */}
        {/* <StudyCards studyCards={studyCards} heading="History Questions"/> */}

        {/* // This is the code that filters the cards by subject */}
        {/* //  in order to access this information once it is in json file, I need to use js.  */}
        {/* this is conditional templating in react */}
        {/* if the information on the left is true, then render the right side.  */}
        {/* 3. once the state has a value, the left side will be true and the right side will be rendered */}
        {studyCards && <StudyCards studyCards={studyCards.filter((cards) => cards.subject === 'history')} heading="History Questions" />}
        {studyCards && <StudyCards studyCards={studyCards.filter((cards) => cards.subject === 'geometry')} heading="Geometry Questions" />}
        {studyCards && <StudyCards studyCards={studyCards.filter((cards) => cards.subject !== 'history' && cards.subject !=='geometry'    )} heading="Miscellaneous Questions" />}

    </div>
     );
}
 
export default MyCards;