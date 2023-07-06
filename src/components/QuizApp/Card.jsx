const imageUri = process.env.PUBLIC_URL + '/images/'

export default function Card({ qData, qLength, handleAnswer }){
    
    return (
        <div className="quiz-card">
            <h2>Guess the Movie <span>({qData.id}/{qLength})</span></h2>
            <img src={imageUri + qData.image} alt="" />
            <ul>
                {
                    qData.options.map(
                        (element, index)=>{
                            return(
                                <li key={index}
                                onClick={() => {handleAnswer(element.isCorrect)}}
                                >{element.answer}</li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}