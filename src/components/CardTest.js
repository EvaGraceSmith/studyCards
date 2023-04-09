import './Cards.css';

const CardTest = ({studyCards, heading}) => {

// this is the same thing, but written differently.
// const CardTest = (props) => {

//     const studyCards = props.studyCards

    return (
        <div className="questions"
>
            <h1>{heading}</h1>
            <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem',
            }}
            
            >
            {studyCards.map((studyCard) => (
                <div className="studyCard-preview" key={studyCard.id}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className='question'>

                                    <h2>{studyCard.question}</h2>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className='textBox'>
                                    <h2>{studyCard.answer}</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            ))}



            </div>

        </div>
    );
}

export default CardTest;