import { useParams } from 'react-router-dom';


const CardDetails = () => {

    const { subject } = useParams();
    return ( 
        <div className="card-details">
            <h2>Card Details - {subject}</h2>   
        </div>
     );
}
 
export default CardDetails;