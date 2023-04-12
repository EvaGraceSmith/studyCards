import { useParams } from 'react-router-dom';
import useFetch from '../useFetch.js';


const CardDetails = () => {

    const { id } = useParams();
const {data: studyCards, isLoading, error} = useFetch('http://localhost:8000/studyCards/' + id);

    return ( 
        <div className="card-details">
            {isLoading && <div>Loading...</div>}
            <h2>Card Details - { id }</h2>   
        </div>
     );
}
 
export default CardDetails;