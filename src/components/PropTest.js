const PropTest = (props) => {

    const studyCards = props.studyCards


    return ( 
        <div className="questions">
        <h1>{props.heading}</h1>
                            {studyCards.map((studyCard) => (
                <div className="studyCard-preview" key={studyCard.id}>
                    <h2>{studyCard.subject}</h2>
                    <p>{studyCard.question}</p>
                    <p>{studyCard.answer}</p>
                </div>
            ))}
    </div>

    );
}
 
export default PropTest;