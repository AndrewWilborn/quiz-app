
export default function Card({ qData, qLength, handleAnswer }){
    
    return (
        <div className="quiz-card">
            <p>{qData.id}/{qLength}</p>
            <h3>{qData.question}</h3>
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