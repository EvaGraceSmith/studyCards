import { useParams } from 'react-router-dom';
import useFetch from '../useFetch.js';


const CardDetails = () => {

    const { id } = useParams();
const {data: studyCards, isLoading, error} = useFetch('http://localhost:8000/studyCards/' + id);

const handleDelete = () => {
    // you could also use studyCards.id instead of id
    fetch('http://localhost:8000/studyCards/' + id, {
        method: 'DELETE'
    }).then(() => {

    return ( 
        <div className="card-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {studyCards && (
                <article>
                    <h2>{ studyCards.subject }</h2>
                    <p>Question: { studyCards.question }</p>
                    <p>Answer: { studyCards.answer }</p>
                    <button OnClick={handleDelete} >Delete</button>
                </article>
            )}
  
        </div>
     );
}
 
export default CardDetails;