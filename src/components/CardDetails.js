import { useParams } from 'react-router-dom';
import useFetch from '../useFetch.js';


const CardDetails = () => {

    const { id } = useParams();
const {data: studyCards, isLoading, error} = useFetch('http://localhost:8000/studyCards/' + id);

    return ( 
        <div className="card-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {studyCards && (
                <article>
                    <h2>{ studyCards.subject }</h2>
                    <p>Question: { studyCards.question }</p>
                    <p>Answer: { studyCards.answer }</p>
                </article>
            )}
  
        </div>
     );
}
 
export default CardDetails;