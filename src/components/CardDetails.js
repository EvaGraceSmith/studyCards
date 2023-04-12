import { useParams } from 'react-router-dom';
import useFetch from '../useFetch.js';
import { useNavigate } from 'react-router-dom';


const CardDetails = () => {

    const { id } = useParams();
const {data: studyCards, isLoading, error} = useFetch('http://localhost:8000/studyCards/' + id);
const navigate = useNavigate();

const handleDelete = () => {

    // you could also use studyCards.id instead of id
    fetch('http://localhost:8000/studyCards/' + studyCards.id, {
        method: 'DELETE',
    }).then(() => {
        navigate(`/mystudycards`);
    })
}

    return ( 
        <div className="card-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {studyCards && (
                <article>
                    <h2>{ studyCards.subject }</h2>
                    <p>Question: { studyCards.question }</p>
                    <p>Answer: { studyCards.answer }</p>
                    <button onClick={handleDelete} onSubmit={handleDelete}>Delete</button>

                </article>
            )}
  
        </div>
     );
}
 
export default CardDetails;